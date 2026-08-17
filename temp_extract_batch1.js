#!/usr/bin/env node
const fs = require('fs');

// Read validation report
const validationReport = JSON.parse(fs.readFileSync('results/qa-pipeline/validation/validation-report.json', 'utf-8'));

// Extract first 23 cases (TC-MM-001 to TC-MM-023) for batch 1
const batch1Cases = validationReport.rows.slice(0, 23);

console.log('Batch 1 Test Cases (TC-MM-001 to TC-MM-023):');
console.log('='.repeat(50));

batch1Cases.forEach(testCase => {
  console.log(`\n${testCase.testCaseId}: ${testCase.rawCells['Task Description']}`);
  console.log(`Module: ${testCase.module}`);
  console.log(`Test Steps:\n${testCase.testSteps}`);
  console.log(`Expected Result: ${testCase.expectedResult}`);
  console.log('-'.repeat(40));
});

// Save batch 1 cases to a file for the generator
const batch1Data = {
  batchIndex: 1,
  cases: batch1Cases,
  module: "Missing Mandatory Data Template",
  targetSpec: "tests/milestone2/test-cases/MissingMandatoryDataTemplateModule/missingMandatoryDataTemplateTests/missing-mandatory-data-template.spec.ts"
};

fs.writeFileSync('batch1-cases.json', JSON.stringify(batch1Data, null, 2));
console.log('\nBatch 1 data saved to batch1-cases.json');