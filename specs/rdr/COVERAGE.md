# Reference Data Registry — Coverage Summary

| Excel ID | Scenario | FSD Ref | Spec File | Status | Missing Info |
| --- | --- | --- | --- | --- | --- |
| RDR_001 | Verify Customer ID is displayed for every customer record loaded from source systems and remains unique across all records. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_002 | Verify Customer ID hyperlink functionality and navigation to customer profile details. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_003 | Verify Customer Type values are displayed correctly as received from source systems. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_004 | Verify Customer Type filter allows users to filter customer records based on selected type. | §4.5 | reference-data-registry.spec.ts | Automated |  |
| RDR_005 | Verify Full Legal Name is displayed correctly for customer records. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_006 | Verify masking of Full Legal Name according to AML privacy and PII requirements. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_007 | Verify Active customer status is displayed correctly in Customer Status column. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_008 | Verify Inactive customer status is displayed correctly in Customer Status column. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_009 | Verify Risk Rating values are displayed correctly for all customer records. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_010 | Verify KYC Status is displayed correctly and reflects latest customer KYC review status. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_011 | Verify PEP Flag is displayed correctly for Politically Exposed Persons. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_012 | Verify Sanctions Flag is displayed correctly for sanctions/watchlist matched customers. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_013 | Verify Date Onboarded is displayed correctly in configured date format. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_014 | Verify Last Review Date is displayed correctly and reflects latest customer review activity. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_015 | Verify View action opens complete customer profile information including customer, risk, KYC and AML details. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_016 | Verify search functionality using Customer ID and ensure the system retrieves the exact matching customer record. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_017 | Verify search functionality using Full Legal Name and ensure matching customer records are displayed. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_018 | Verify Clear button functionality after applying filters and search criteria. | §4.5 | reference-data-registry.spec.ts | Automated |  |
| RDR_019 | Verify CSV Export functionality and validate exported customer data. | §11.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_020 | Verify Excel Export functionality and validate exported customer information. | §11.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_021 | Verify Address ID is generated and displayed uniquely for every customer address record loaded from CBS. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_022 | Verify Customer ID displayed against each address record matches the linked customer in Customer Master. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_023 | Verify Address Type values are displayed correctly based on configured address classifications. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_024 | Verify Address Line 1 is displayed according to configured masking rules to protect customer PII information. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_025 | Verify City and State values are displayed correctly for each address record. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_026 | Verify Postal Code is displayed according to configured masking rules. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_027 | Verify Country Code is displayed correctly for address records. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_028 | Verify Primary Address indicator is displayed correctly for customer addresses. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_029 | Verify Valid From date is displayed correctly and matches source onboarding information. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_030 | Verify View action opens complete address details for the selected customer address record. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_031 | Verify search functionality using Address ID. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_032 | Verify search functionality using Customer ID and retrieve all linked addresses. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_033 | Verify Address Verification Status (Is Verified) in address details screen. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_034 | Verify High Risk Location Flag and Human Trafficking Risk Flag values in address details. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_035 | Verify CSV and Excel export functionality for Customer Address records. | §11.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_036 | Verify Document ID is displayed uniquely for each customer document record loaded from CBS. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_037 | Verify Customer ID displayed against each document record matches the linked customer profile. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_038 | Verify Document Type values are displayed correctly based on configured document classifications. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_039 | Verify Document Number is displayed according to masking rules to protect customer sensitive information. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_040 | Verify Issuing Country is displayed correctly for all customer documents. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_041 | Verify Issue Date is displayed correctly and matches source document information. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_042 | Verify Expiry Date is displayed correctly for permanent and non-permanent documents. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_043 | Verify Document Status is displayed correctly based on document validity. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_044 | Verify expired documents are highlighted appropriately for AML review. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_045 | Verify Verified Date is displayed correctly and matches document verification records. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_046 | Verify Verification Method is displayed correctly according to document verification process. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_047 | Verify search functionality using Document ID. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_048 | Verify search functionality using Customer ID and retrieve all linked customer documents. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_049 | Verify View action opens complete document details including AML-related information. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_050 | Verify CSV and Excel export functionality for Customer Documents data. | §11.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_051 | Verify Assessment ID is generated and displayed uniquely for each risk assessment record. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_052 | Verify Customer ID displayed against each risk assessment record matches the linked customer profile. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_053 | Verify Assessment Date is displayed correctly and matches the date on which risk assessment was performed. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_054 | Verify Assessment Type values are displayed correctly based on configured assessment classifications. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_055 | Verify Total Risk Score is calculated and displayed correctly for each customer assessment. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_056 | Verify Risk Rating values are displayed correctly according to configured risk score ranges. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_057 | Verify high-risk customers are highlighted appropriately when Total Risk Score exceeds configured threshold. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_058 | Verify Previous Risk Rating is displayed correctly and reflects prior assessment results. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_059 | Verify Rating Changed indicator correctly identifies customers whose risk rating has changed since the last assessment. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_060 | Verify Next Review Date is calculated and displayed correctly based on risk review schedule. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_061 | Verify Review Frequency values are displayed correctly based on risk assessment configuration. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_062 | Verify search functionality using Assessment ID. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_063 | Verify search functionality using Customer ID and retrieve all associated risk assessments. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_064 | Verify View action opens complete risk assessment details including score components and review information. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_065 | Verify CSV and Excel export functionality for Risk Assessment records. | §11.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_066 | Verify Account ID is generated uniquely and displayed correctly for each account record loaded from CBS. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_067 | Verify Account ID hyperlink functionality and ensure account details open correctly when selected. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_068 | Verify Account Number is displayed according to masking requirements to protect sensitive banking information. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_069 | Verify Customer ID displayed against each account matches the linked customer profile. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_070 | Verify Account Type values are displayed correctly based on account classification. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_071 | Verify Currency and Branch details are displayed correctly for each account. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_072 | Verify Account Status values are displayed correctly based on account lifecycle status. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_073 | Verify Frozen accounts are highlighted appropriately and displayed with Frozen status. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_074 | Verify Current Balance is displayed correctly and matches account balance received from CBS. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_075 | Verify Freeze Flag is displayed correctly for active and frozen accounts. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_076 | Verify Last Transaction Date is displayed correctly and reflects the latest transaction posted to the account. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_077 | Verify Customer ID filter functionality and ensure accounts are filtered correctly. | §4.5 | reference-data-registry.spec.ts | Automated |  |
| RDR_078 | Verify search functionality using Account ID. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_079 | Verify View action opens complete account details including AML-related information. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_080 | Verify CSV and Excel export functionality for Account Master records. | §11.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_081 | Verify Relationship ID (Rel ID) is displayed uniquely for every customer-account relationship record. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_082 | Verify Customer ID displayed in relationship records matches the linked customer profile in Customer Master. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_083 | Verify Account ID displayed in relationship records matches the linked account in Account Master. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_084 | Verify Relationship Type is displayed correctly according to the account ownership relationship maintained in source systems. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_085 | Verify Signing Authority values are displayed correctly and reflect the account operation rights assigned to the customer. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_086 | Verify Ownership Percentage is displayed correctly for the customer-account relationship. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_087 | Verify Effective Date is displayed correctly and represents the date from which the relationship became active. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_088 | Verify KYC Status values are displayed correctly and reflect the latest KYC review status. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_089 | Verify search functionality using Relationship ID and retrieve the exact matching relationship record. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_090 | Verify View action opens complete customer-account relationship details including customer, account and KYC information. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_091 | Verify Loan ID is displayed uniquely for every loan account record and correctly mapped to the loan account. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_092 | Verify Customer ID displayed against each loan account matches the linked customer profile. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_093 | Verify Account ID displayed against each loan account matches the linked account in Account Master. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_094 | Verify Loan Type is displayed correctly based on the loan product assigned to the customer. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_095 | Verify Sanctioned Amount is displayed correctly and matches the approved loan amount maintained in CBS. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_096 | Verify Outstanding Balance is displayed correctly and reflects the current unpaid loan balance. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_097 | Verify Interest Rate is displayed correctly for each loan account as per the approved loan terms. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_098 | Verify Disbursement Date and Maturity Date are displayed correctly according to loan lifecycle information. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_099 | Verify Loan Status values are displayed correctly and reflect the current loan condition. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_100 | Verify View action opens complete loan account details including loan information, balances, repayment schedule and status. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_101 | Verify Balance ID is generated uniquely and displayed correctly for every EOD balance record loaded from CBS. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_102 | Verify Account ID displayed in EOD records matches the linked account in Account Master. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_103 | Verify Customer ID displayed against each EOD balance record matches the linked customer profile. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_104 | Verify Balance Date is displayed correctly and represents the business date for which EOD balance was calculated. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_105 | Verify Opening Balance is displayed correctly and matches the opening balance received from CBS. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_106 | Verify Total Credits and Total Debits are displayed correctly for the selected EOD date. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_107 | Verify Closing Balance is calculated and displayed correctly based on Opening Balance, Credits and Debits. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_108 | Verify Currency values are displayed correctly for all EOD balance records. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_109 | Verify Credit Count and Debit Count values are displayed correctly based on transaction activity for the day. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_110 | Verify View action opens complete EOD balance details including balance calculation and transaction summary information. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_111 | Verify Card ID is generated uniquely and displayed correctly for every card record loaded from CBS. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_112 | Verify Customer ID and Account ID displayed for each card are correctly mapped to the associated customer and account records. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_113 | Verify masked card number (Last 4 digits) is displayed according to PCI-DSS masking requirements. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_114 | Verify Card Type values are displayed correctly according to card classification maintained in source systems. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_115 | Verify card Network values are displayed correctly for issued cards. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_116 | Verify Card Status values are displayed correctly and reflect the current card lifecycle status. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_117 | Verify hot-listed cards are highlighted appropriately and displayed with the correct status indicator. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_118 | Verify Issue Date and Expiry Date are displayed correctly for issued cards. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_119 | Verify International Usage and Contactless indicators are displayed correctly based on card configuration. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_120 | Verify View action opens complete card details including card status, limits, AML risk flags and usage configuration. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_121 | Verify Mobile Banking ID (MB ID) is generated uniquely and displayed correctly for each mobile banking registration record. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_122 | Verify Customer ID and Account ID displayed in mobile banking records are correctly mapped to the linked customer and account. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_123 | Verify registered mobile number is displayed according to masking rules to protect customer PII information. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_124 | Verify Registration Date is displayed correctly and reflects the actual mobile banking enrollment date. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_125 | Verify Registration Channel values are displayed correctly according to the channel used during mobile banking registration. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_126 | Verify UPI VPA is displayed correctly and mapped to the corresponding mobile banking customer. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_127 | Verify UPI Banks Linked count is displayed correctly and reflects the number of bank accounts linked to UPI. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_128 | Verify Login Failures (24H) count is displayed correctly and reflects failed login attempts within the last 24 hours. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_129 | Verify Status values are displayed correctly and reflect the current mobile banking registration status. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_130 | Verify View action opens complete mobile banking details including registration information, AML indicators and mobile banking activity details. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_131 | Verify ATM ID is generated uniquely and displayed correctly for every ATM record loaded from CBS. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_132 | Verify ATM Code is displayed correctly and uniquely identifies each ATM machine. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_133 | Verify ATM Name is displayed correctly and matches the ATM location name maintained in CBS. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_134 | Verify Branch information is displayed correctly for each ATM location. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_135 | Verify ATM Type values are displayed correctly according to ATM classification maintained in source systems. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_136 | Verify City values are displayed correctly based on ATM location information. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_137 | Verify Country Code is displayed correctly for ATM locations. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_138 | Verify ATM Status is displayed correctly and reflects the current operational state of the ATM. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_139 | Verify search functionality using ATM ID. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_140 | Verify search functionality using ATM Code. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_141 | Verify High Risk Location Flag in ATM details for ATMs located in high-risk geographic areas. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_142 | Verify Daily Cash Loaded value is displayed correctly in ATM details. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_143 | Verify View action opens complete ATM details including AML and operational information. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_144 | Verify CSV export functionality for ATM Master records. | §11.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_145 | Verify Excel export functionality for ATM Master records. | §11.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_146 | Verify Instrument ID is generated uniquely and displayed correctly for each instrument record loaded from CBS. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_147 | Verify Instrument Type values are displayed correctly according to instrument classification maintained in source systems. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_148 | Verify search functionality using Instrument ID and ensure the correct instrument record is retrieved. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_149 | Verify View action opens complete instrument details including status and AML-related information. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_150 | Verify Instrument Status is displayed correctly in instrument details and reflects the current instrument lifecycle state. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_151 | Verify dishonoured instruments display the correct Dishonour Reason in instrument details. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_152 | Verify Stop Payment Flag is displayed correctly for instruments where stop-payment instructions have been placed. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_153 | Verify AML Alert Flag is displayed correctly for instruments flagged by AML monitoring rules. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_154 | Verify CSV export functionality for Instrument Master records. | §11.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_155 | Verify Excel export functionality for Instrument Master records. | §11.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_156 | Verify Device ID is generated uniquely and displayed correctly for each transaction device record. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_157 | Verify Device Type is displayed correctly according to the registered device classification. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_158 | Verify OS information is displayed correctly for registered transaction devices. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_159 | Verify Device Model is displayed correctly according to device registration information. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_160 | Verify IMEI/Device Fingerprint information is displayed in masked format to protect sensitive device data. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_161 | Verify Customer IDs displayed against each device are correctly mapped to registered customers. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_162 | Verify devices linked to multiple customer IDs are identified correctly according to AML rules. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_163 | Verify Customer Count value in device details matches the number of linked customers. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_164 | Verify High Risk Device Flag is displayed correctly for devices identified as AML high-risk. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_165 | Verify High Risk Reason is displayed correctly for flagged devices. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_166 | Verify Rooted Device Flag is displayed correctly when a device is identified as rooted or jailbroken. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_167 | Verify Remote Access App Flag is displayed correctly when remote access applications are detected. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_168 | Verify Proxy/VPN Usage Flag is displayed correctly for devices using proxy or VPN connections. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_169 | Verify View action opens complete transaction device details including AML risk indicators and device fingerprint information. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_170 | Verify search functionality using Device ID and retrieve the correct device record. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_171 | Verify BO ID is generated uniquely and displayed correctly for every beneficial owner record. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_172 | Verify Customer ID displayed against each beneficial owner record matches the linked customer/entity record. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_173 | Verify Beneficial Owner Full Name is displayed in masked format according to PII masking requirements. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_174 | Verify Nationality is displayed correctly for each beneficial owner. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_175 | Verify Country of Residence is displayed correctly according to beneficial owner profile information. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_176 | Verify ID Type values are displayed correctly according to the identification documents maintained for the beneficial owner. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_177 | Verify Ownership Percentage is displayed correctly for beneficial owners with direct ownership stake. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_178 | Verify beneficial owners meeting regulatory ownership thresholds are displayed correctly. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_179 | Verify Control Type values are displayed correctly according to beneficial ownership/control relationship. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_180 | Verify Watchlist Flag is displayed correctly for beneficial owners identified on internal or external watchlists. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_181 | Verify beneficial owners with Watchlist Flag = Yes are highlighted appropriately for AML review. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_182 | Verify search functionality using BO ID retrieves the correct beneficial owner record. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_183 | Verify search functionality using Customer ID retrieves all associated beneficial owners. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_184 | Verify View action opens complete beneficial owner details including ownership, control and AML screening information. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_185 | Verify PEP Flag, Sanctions Flag, Internal Watchlist Flag and Verification Method are displayed correctly in the Beneficial Owner detail screen. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_186 | Verify Relationship ID is generated uniquely and displayed correctly for every relationship record. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_187 | Verify Entity1 Type is displayed correctly according to the source entity classification. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_188 | Verify Entity1 ID is displayed correctly and mapped to the appropriate customer or beneficial owner record. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_189 | Verify Entity2 Type is displayed correctly according to the linked entity classification. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_190 | Verify Entity2 ID is displayed correctly and linked to the appropriate target entity record. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_191 | Verify Relationship Type values are displayed correctly according to relationship classification maintained in source systems. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_192 | Verify Subtype values are displayed correctly according to the specific relationship category. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_193 | Verify Ownership Percentage is displayed correctly for ownership-based relationships. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_194 | Verify ownership relationships above regulatory thresholds are displayed correctly. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_195 | Verify Valid From date is displayed correctly and reflects the effective start date of the relationship. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_196 | Verify PEP Flag is displayed correctly in relationship details when the relationship involves a politically exposed person. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_197 | Verify Risk Flag is displayed correctly for AML-risk relationships. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_198 | Verify Verified Flag is displayed correctly for validated relationship records. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_199 | Verify search functionality retrieves the correct relationship record using Relationship ID. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_200 | Verify View action opens complete relationship details including entity mapping, ownership information and AML indicators. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_201 | Verify Non-Customer ID is generated uniquely and displayed correctly for every non-customer record. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_202 | Verify Full Name is displayed in masked format according to PII masking requirements. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_203 | Verify Non-Customer Type is displayed correctly according to classification maintained in source systems. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_204 | Verify Nationality is displayed correctly for each non-customer record. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_205 | Verify Country of Residence is displayed correctly according to profile information. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_206 | Verify ID Type values are displayed correctly according to identification documents maintained for non-customers. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_207 | Verify ID Number is displayed in masked format to protect sensitive identification information. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_208 | Verify PEP Individual records are classified correctly and displayed with appropriate visual indicators. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_209 | Verify linked customer information is displayed correctly in detail view when a non-customer is associated with a bank customer. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_210 | Verify Relationship to Customer is displayed correctly in detail view. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_211 | Verify PEP Flag is displayed correctly in the detail screen according to AML screening results. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_212 | Verify Sanctions Flag is displayed correctly for sanctioned non-customer entities. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_213 | Verify Internal Watchlist Flag is displayed correctly for entities appearing on internal watchlists. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_214 | Verify search functionality retrieves the correct non-customer record using Non-Customer ID. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_215 | Verify View action opens complete non-customer details including AML flags, relationship information and source details. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_216 | Verify Customer Type records are displayed successfully in the Customer Type Master grid after data load. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_217 | Verify Customer Type Code is displayed correctly for each customer category maintained in the master. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_218 | Verify Customer Type Name is displayed correctly according to configured customer classifications. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_219 | Verify Customer Type Code remains unique across all customer type records. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_220 | Verify Segment ID is displayed uniquely for each customer type record. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_221 | Verify search functionality retrieves the correct customer type record using Customer Type Code. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_222 | Verify search functionality retrieves the correct customer type record using Customer Type Name. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_223 | Verify View action opens complete customer type details including risk and CDD configuration fields. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_224 | Verify Customer Type Code displayed in UI matches the customer_type_code field defined in FSD. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_225 | Verify Customer Type Name displayed in UI matches the customer_type_name field maintained in source systems. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_226 | Verify Risk Weight value is displayed correctly in customer type detail screen and matches source configuration. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_227 | Verify CDD Level is displayed correctly according to configured due diligence rules. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_228 | Verify Active Status is displayed correctly for customer types currently in use. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_229 | Verify CSV export functionality exports all customer type records successfully. | §11.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_230 | Verify Excel export functionality exports all customer type records successfully. | §11.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_231 | Verify Product Master records are displayed successfully after CBS synchronization and all configured products are visible in the grid. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_232 | Verify Product ID is displayed uniquely for every product maintained in the Product Master. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_233 | Verify Product Code is displayed correctly according to product configuration maintained in source systems. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_234 | Verify Product Name is displayed correctly and matches the configured product description. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_235 | Verify Product Category is displayed correctly according to configured business classification. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_236 | Verify Product Type is displayed correctly according to the product setup maintained in the source system. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_237 | Verify Entity Types applicable to the product are displayed correctly for AML and customer onboarding purposes. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_238 | Verify Cross Border indicator is displayed correctly for products involving international transactions. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_239 | Verify Trade Finance products are marked as Cross Border where applicable. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_240 | Verify Effective Date is displayed correctly and reflects the date from which the product became active. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_241 | Verify Risk Rating is displayed correctly in product detail view according to product risk configuration. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_242 | Verify goAML Product Type mapping is displayed correctly in product detail view for regulatory reporting purposes. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_243 | Verify search functionality retrieves the correct product record using Product Code or Product Name. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_244 | Verify View action opens complete product details including Product ID, Category, Risk Rating and goAML mapping. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_245 | Verify CSV and Excel export functionality exports all Product Master records accurately. | §11.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_246 | Verify Branch Master records are displayed successfully after CBS synchronization and all configured branches are visible in the grid. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_247 | Verify Branch ID is displayed uniquely for every branch maintained in the Branch Master. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_248 | Verify Branch Code is displayed correctly according to the branch configuration maintained in CBS. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_249 | Verify Branch Name is displayed correctly and matches the official branch name configured in source systems. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_250 | Verify City information is displayed correctly according to branch location details. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_251 | Verify State information is displayed correctly according to branch location details. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_252 | Verify Branch Type is displayed correctly according to configured branch classification. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_253 | Verify High Risk Zone indicator is displayed correctly for branches located in AML high-risk areas. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_254 | Verify Border Branch indicator is displayed correctly for branches operating near international borders. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_255 | Verify Active Status is displayed correctly for operational branches. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_256 | Verify BSR Code is displayed correctly according to branch registration information. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_257 | Verify IFSC Code is displayed correctly in branch detail view according to FSD configuration. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_258 | Verify SWIFT/BIC Code is displayed correctly in branch detail view for cross-border identification. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_259 | Verify search functionality retrieves the correct branch record using Branch ID, Code or Name. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_260 | Verify View action opens complete branch details including Branch ID, Type, Country Code, High Risk Area Flag, IFSC and SWIFT information. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_261 | Verify Channel Master records are displayed successfully after data synchronization and all configured channels are visible in the grid. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_262 | Verify Channel ID is displayed uniquely for every channel record maintained in the master. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_263 | Verify Channel Code is displayed correctly according to the configured channel identifier. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_264 | Verify Channel Name is displayed correctly according to the configured business channel name. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_265 | Verify Channel Type is displayed correctly according to the channel classification maintained in source systems. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_266 | Verify Status is displayed correctly and reflects the active/inactive state of the channel. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_267 | Verify Description field is displayed correctly and provides channel-specific AML/business context. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_268 | Verify Branch channel is classified as PHYSICAL and displayed correctly in the grid. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_269 | Verify Mobile Banking channel is classified as DIGITAL and displayed correctly. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_270 | Verify UPI channel is classified as DIGITAL and displayed correctly for AML monitoring purposes. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_271 | Verify Risk Score Weight is displayed correctly in the channel detail screen and matches configured AML scoring rules. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_272 | Verify Cross Border Indicator is displayed correctly in channel detail view according to channel capabilities. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_273 | Verify goAML Channel Type mapping is displayed correctly in the channel detail screen. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_274 | Verify search functionality retrieves the correct channel record using Channel Code or Channel Name. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_275 | Verify View action opens complete channel details including Channel Code, Type, Risk Weight, Cross Border Indicator and goAML mapping. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_276 | Verify Transaction Type Master records are displayed successfully after data synchronization and all configured transaction types are visible in the grid. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_277 | Verify Transaction Type ID is displayed uniquely for every transaction type record maintained in the master. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_278 | Verify Transaction Type Code is displayed correctly according to configured transaction definitions. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_279 | Verify Transaction Type Name is displayed correctly according to business transaction definitions. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_280 | Verify Transaction Direction is displayed correctly and identifies whether the transaction is Credit, Debit or Both. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_281 | Verify Cash Flag is displayed correctly for cash-based transaction types that are eligible for CTR reporting. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_282 | Verify Cross Border indicator is displayed correctly for international transaction types. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_283 | Verify AML Risk classification is displayed correctly according to AML risk assessment rules. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_284 | Verify CTR Applicable indicator is displayed correctly for cash transactions subject to regulatory CTR thresholds. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_285 | Verify Status is displayed correctly and reflects whether the transaction type is active for use. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_286 | Verify Description field is displayed correctly and provides AML/business context for the transaction type. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_287 | Verify Risk Weight is displayed correctly in the transaction type detail screen and matches AML scoring configuration. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_288 | Verify goAML Transaction Type mapping is displayed correctly in the detail screen for STR reporting requirements. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_289 | Verify search functionality retrieves the correct transaction type record using transaction code or name. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_290 | Verify View action opens complete transaction type details including direction, risk weight, cash indicator, cross-border flag and goAML mapping. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_291 | Verify Currency Master records are displayed successfully after synchronization and all configured currencies are visible in the grid. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_292 | Verify Currency Code (ISO 4217) is displayed correctly and uniquely for every currency record. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_293 | Verify Currency Name is displayed correctly according to the configured currency master data. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_294 | Verify Currency Symbol is displayed correctly for each configured currency. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_295 | Verify Country Code is displayed correctly against the corresponding currency. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_296 | Verify Status is displayed correctly and reflects whether the currency is active in the system. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_297 | Verify INR currency record is displayed correctly with all associated details. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_298 | Verify USD currency record is displayed correctly with all associated details. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_299 | Verify AED currency record is displayed correctly with all associated details. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_300 | Verify Search functionality retrieves the correct currency record using Currency Code. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_301 | Verify Search functionality retrieves the correct currency record using Currency Name. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_302 | Verify View action opens complete currency details including Currency Code, Name, Reporting Currency flag and AML attributes. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_303 | Verify Reporting Currency flag is displayed correctly in the currency detail view according to bank reporting configuration. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_304 | Verify High Risk Currency flag is displayed correctly in detail view for AML monitoring and risk scoring purposes. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_305 | Verify Currency Master data can be exported successfully through Excel and CSV options without data loss. | §11.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_306 | Verify FX Rate records are displayed successfully after synchronization and all configured exchange rates are visible in the grid. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_307 | Verify Rate ID is displayed uniquely for every FX rate record maintained in the master. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_308 | Verify Source Currency (From Currency) is displayed correctly according to configured exchange rate mapping. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_309 | Verify Target Currency (To Currency) is displayed correctly according to exchange rate configuration. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_310 | Verify Exchange Rate value is displayed correctly and matches the configured market exchange rate. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_311 | Verify Rate Date is displayed correctly for each exchange rate record. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_312 | Verify Rate Type is displayed correctly according to the configured exchange rate category. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_313 | Verify Effective From date and time are displayed correctly according to the validity period of the exchange rate. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_314 | Verify Effective To date and time are displayed correctly according to the validity period of the exchange rate. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_315 | Verify USD to INR exchange rate record is displayed correctly with all associated details. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_316 | Verify AED to INR exchange rate record is displayed correctly with all associated details. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_317 | Verify EUR to INR exchange rate record is displayed correctly with all associated details. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_318 | Verify Search functionality retrieves the correct FX rate record using Rate ID or Currency Code. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_319 | Verify View action opens complete FX rate details including currencies, exchange rate, effective date and source information. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_320 | Verify CSV and Excel export functionality exports all displayed FX rate records correctly without data mismatch. | §11.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_321 | Verify Industry Code Master records are displayed successfully after synchronization and all configured industry records are visible in the grid. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_322 | Verify Industry Master ID is displayed uniquely for every industry record maintained in the system. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_323 | Verify Code Type is displayed correctly according to the configured classification standard used by the organization. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_324 | Verify Industry Code is displayed correctly and matches the configured NIC/industry classification code. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_325 | Verify Industry Name is displayed correctly according to the configured industry classification. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_326 | Verify Industry Description is displayed correctly and provides business/AML context for the industry. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_327 | Verify Banking and Financial Intermediation industry record is displayed correctly with its associated code and description. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_328 | Verify Jewellery industry record is displayed correctly as a cash-intensive business sector used for AML monitoring. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_329 | Verify Restaurant and Mobile Food Services industry record is displayed correctly as per configured industry classification. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_330 | Verify Risk Rating field is displayed correctly in the industry detail screen according to AML risk scoring rules. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_331 | Verify High Risk Flag is displayed correctly for industries classified as high-risk sectors for AML purposes. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_332 | Verify FATF Sector classification is displayed correctly in the industry detail view according to regulatory mapping. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_333 | Verify Search functionality retrieves the correct industry record using Industry Code. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_334 | Verify Search functionality retrieves the correct industry record using Industry Name. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_335 | Verify View action opens complete industry details including Industry Code, Name, Risk Rating, High Risk Flag and FATF Sector classification. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_336 | Verify Reference Master records are displayed successfully after synchronization and all configured reference values are visible in the grid. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_337 | Verify Reference ID is displayed uniquely for every reference record maintained in the system. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_338 | Verify Category value is displayed correctly according to the configured reference type classification. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_339 | Verify Reference Code is displayed correctly according to the configured lookup code value. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_340 | Verify Description field is displayed correctly and provides accurate business meaning of the reference value. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_341 | Verify Text Value is displayed correctly according to configured business rules and thresholds. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_342 | Verify Countries field is displayed correctly and reflects country-specific or global applicability of the reference value. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_343 | Verify Status is displayed correctly and reflects whether the reference code is active and available for AML processing. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_344 | Verify Modified Date is displayed correctly and reflects the latest update timestamp of the reference record. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_345 | Verify CTR Threshold reference record is displayed correctly with AML reporting threshold information. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_346 | Verify Wildlife Keyword reference record is displayed correctly for AML wildlife trafficking monitoring scenarios. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_347 | Verify Dormancy Threshold reference record is displayed correctly for dormant account monitoring rules. | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_348 | Verify Search functionality retrieves the correct reference record using Reference Code. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_349 | Verify Search functionality retrieves the correct reference record using Category name. | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_350 | Verify View action opens complete reference details including Reference Type, Code, Name, Active Flag and Sort Order information maintained in the master. | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_351 | Verify Country Master page loads successfully | §4.5 | reference-data-registry.spec.ts | Automated |  |
| RDR_352 | Verify High Risk countries are displayed at top by default | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_353 | Verify search using Country Name | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_354 | Verify search using ISO Alpha-2 Code | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_355 | Verify Region filter functionality | §4.5 | reference-data-registry.spec.ts | Automated |  |
| RDR_356 | Verify Risk Level filter functionality | §4.5 | reference-data-registry.spec.ts | Automated |  |
| RDR_357 | Verify combined Search and Filter functionality | §4.5 | reference-data-registry.spec.ts | Automated |  |
| RDR_358 | Verify Country Name column sorting | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_359 | Verify Region column sorting | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_360 | Verify Risk Reason tags display correctly | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_361 | Verify View button functionality | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_362 | Verify Audit Trail information in View panel | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_363 | Verify Maker submits country updates successfully | §3.1 | reference-data-registry.spec.ts | Blocked | Maker/Checker role credentials and write-access workflow not defined in Excel Test Data |
| RDR_364 | Verify Checker approval workflow | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_365 | Verify CSV export functionality | §11.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_366 | Verify search functionality using Employee Name | §4.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_367 | Verify masked employee name display for PII protection | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_368 | Verify employee status display | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_369 | Verify Joining Date is displayed correctly | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_370 | Verify Department information display | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_371 | Verify Branch assignment display | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_372 | Verify Supervisor ID mapping | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_373 | Verify View button functionality | §4.3 | reference-data-registry.spec.ts | Automated |  |
| RDR_374 | Verify CSV export functionality | §11.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_375 | Verify Excel export functionality | §11.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_376 | Verify employee records are limited to maximum configured row count | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_377 | Verify column selector shows and hides columns on Customer Master grid | §4.4 | reference-data-registry.spec.ts | Automated |  |
| RDR_378 | Verify toast appears after refresh CBS action with latest sync status | §4.7 | reference-data-registry.spec.ts | Automated |  |
| RDR_379 | Verify sticky header remains visible while scrolling through grid rows | §4.2 | reference-data-registry.spec.ts | Automated |  |
| RDR_380 | Verify KPI cards display and match customer master dataset counts | §4.5 | reference-data-registry.spec.ts | Automated |  |
| RDR_381 | Verify maximum 50k rows label is displayed for the customer dataset limit | §3.1 | reference-data-registry.spec.ts | Automated |  |
| RDR_382 | Verify responsive behavior on smaller viewport without clipping filter and grid controls | §4.5 | reference-data-registry.spec.ts | Automated |  |
| RDR_383 | Verify refresh CBS completes with success toast and updated sync timestamp | §4.7 | reference-data-registry.spec.ts | Automated |  |

Total: 383 | Automated candidates: 382 | Blocked: 383
