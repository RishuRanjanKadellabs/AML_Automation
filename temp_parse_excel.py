import pandas as pd
import json
import sys

def parse_excel_test_cases(file_path):
    try:
        # Read all sheets from the Excel file
        xls = pd.ExcelFile(file_path)
        all_data = {}
        
        for sheet_name in xls.sheet_names:
            df = pd.read_excel(file_path, sheet_name=sheet_name)
            all_data[sheet_name] = df.to_dict('records')
            
        # Output structured data
        print(json.dumps(all_data, indent=2, default=str))
        
    except Exception as e:
        print(f"Error parsing Excel: {e}")
        sys.exit(1)

if __name__ == "__main__":
    file_path = "pipeline/test-data/Milestone2/Test Cases/Missing Mandatory Test Cases.xlsx"
    parse_excel_test_cases(file_path)