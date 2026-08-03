#!/usr/bin/env python3
"""
Parse Excel file for QA Automation Pipeline Stage 1-2 (Validation)
Outputs validation-report.json with row statuses.
"""
import json
import sys
import os
from pathlib import Path
import pandas as pd
import re

def normalize_header(header):
    """Normalize column header for matching"""
    if pd.isna(header):
        return ""
    return str(header).strip().lower().replace(' ', '').replace('-', '').replace('_', '')

def find_column_mapping(df_columns, column_aliases):
    """Map Excel columns to canonical field names"""
    mapping = {}
    normalized_columns = {normalize_header(col): col for col in df_columns}
    
    for canonical, aliases in column_aliases.items():
        for alias in aliases:
            normalized_alias = normalize_header(alias)
            if normalized_alias in normalized_columns:
                mapping[canonical] = normalized_columns[normalized_alias]
                break
    
    return mapping

def validate_row(row, row_num, column_mapping, required_columns):
    """Validate a single Excel row"""
    issues = []
    
    # Check if row is essentially empty
    non_empty_cells = sum(1 for field in ['testCaseId', 'testSteps', 'expectedResult'] 
                         if field in column_mapping and pd.notna(row.get(column_mapping[field])))
    
    if non_empty_cells == 0:
        issues.append({
            "code": "EMPTY_ROW",
            "severity": "error", 
            "field": None,
            "message": f"Row {row_num} appears to be empty"
        })
        return issues, "Invalid"
    
    # Check required columns
    for field in required_columns:
        if field not in column_mapping:
            issues.append({
                "code": "MISSING_REQUIRED",
                "severity": "error",
                "field": field,
                "message": f"Required column '{field}' not found in Excel"
            })
        elif pd.isna(row.get(column_mapping[field])) or str(row.get(column_mapping[field], '')).strip() == '':
            issues.append({
                "code": "MISSING_REQUIRED", 
                "severity": "error",
                "field": field,
                "message": f"Required field '{field}' is empty in row {row_num}"
            })
    
    # Check Test Case ID format (should look like MM-TC-001, etc)
    if 'testCaseId' in column_mapping:
        tc_id = str(row.get(column_mapping['testCaseId'], '')).strip()
        if tc_id and not re.match(r'^[A-Z]{2,}-TC-\d{3}$', tc_id):
            issues.append({
                "code": "INVALID_FORMAT",
                "severity": "warning",
                "field": "testCaseId", 
                "message": f"Test Case ID '{tc_id}' doesn't match expected format (XX-TC-001)"
            })
    
    # Determine status
    error_issues = [i for i in issues if i['severity'] == 'error']
    warning_issues = [i for i in issues if i['severity'] == 'warning']
    
    if error_issues:
        return issues, "Invalid"
    elif warning_issues:
        return issues, "Valid with warnings"
    else:
        return issues, "Valid"

def main():
    if len(sys.argv) != 2:
        print("Usage: python parse-excel-qa-pipeline.py <excel-file>")
        sys.exit(1)
    
    excel_path = sys.argv[1]
    
    # Load column aliases from schema
    schema_path = "specs/generated/qa-pipeline/schemas/excel-input-schema.json"
    try:
        with open(schema_path, 'r') as f:
            schema = json.load(f)
        column_aliases = schema['properties']['columnAliases']['default']
        required_columns = schema['properties']['requiredColumns']['default']
    except Exception as e:
        print(f"Error loading schema: {e}")
        sys.exit(1)
    
    try:
        # Read Excel file
        df = pd.read_excel(excel_path, sheet_name=0)  # Use first sheet
        
        # Get sheet name
        excel_file = pd.ExcelFile(excel_path)
        sheet_name = excel_file.sheet_names[0]
        
        print(f"Processing sheet: {sheet_name}")
        print(f"Found {len(df)} rows")
        print(f"Columns: {list(df.columns)}")
        
        # Find column mapping
        column_mapping = find_column_mapping(df.columns, column_aliases)
        print(f"Column mapping: {column_mapping}")
        
        # Track Test Case IDs for duplicates
        seen_tc_ids = {}
        
        # Process rows
        processed_rows = []
        validation_summary = {"Valid": 0, "Valid with warnings": 0, "Invalid": 0, "Requires clarification": 0}
        
        for idx, row in df.iterrows():
            row_num = idx + 2  # Excel row number (assuming header is row 1)
            
            # Extract row data
            row_data = {
                "excelRowNumber": row_num,
                "testCaseId": str(row.get(column_mapping.get('testCaseId', ''), '')).strip(),
                "rawCells": {col: str(row.get(col, '')) for col in df.columns}
            }
            
            # Add optional fields if available
            for field in ['requirementId', 'module', 'feature', 'scenario', 'preconditions', 
                         'testData', 'testSteps', 'expectedResult', 'priority', 'testType', 'tags']:
                if field in column_mapping:
                    val = row.get(column_mapping[field])
                    row_data[field] = str(val).strip() if pd.notna(val) else None
            
            # Validate row
            issues, status = validate_row(row, row_num, column_mapping, required_columns)
            
            # Check for duplicate Test Case IDs
            tc_id = row_data['testCaseId']
            if tc_id and tc_id != '':
                if tc_id in seen_tc_ids:
                    issues.append({
                        "code": "DUPLICATE_ID",
                        "severity": "error", 
                        "field": "testCaseId",
                        "message": f"Duplicate Test Case ID '{tc_id}' (also in row {seen_tc_ids[tc_id]})"
                    })
                    status = "Invalid"
                else:
                    seen_tc_ids[tc_id] = row_num
            
            row_data["validationIssues"] = issues
            row_data["validationStatus"] = status
            
            processed_rows.append(row_data)
            validation_summary[status] += 1
        
        # Create validation report
        validation_report = {
            "filePath": excel_path,
            "worksheetName": sheet_name,
            "columnMapping": column_mapping,
            "totalRows": len(processed_rows),
            "validationSummary": validation_summary,
            "rows": processed_rows
        }
        
        # Output to results directory
        output_path = "results/qa-pipeline/validation/validation-report.json"
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        
        with open(output_path, 'w') as f:
            json.dump(validation_report, f, indent=2)
        
        print(f"\nValidation Summary:")
        for status, count in validation_summary.items():
            print(f"  {status}: {count}")
        
        print(f"\nValidation report written to: {output_path}")
        
        # Return summary for pipeline
        return {
            "status": "completed",
            "summary": validation_summary,
            "invalidRows": validation_summary["Invalid"],
            "outputPath": output_path
        }
        
    except Exception as e:
        print(f"Error processing Excel file: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()