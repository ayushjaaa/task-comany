# Company Form Validation Rules

This document explains the **validation rules** for each field in the **Company Form**, along with **example values** that will pass validation.

| Field Name    | Type     | Validation Rules                                                                 | Example Value                     |
|---------------|---------|---------------------------------------------------------------------------------|----------------------------------|
| CompanyName   | Text    | - Required<br>- Must be 3-15 characters<br>- Only letters, numbers & spaces allowed | "TechLabs"                        |
| Location      | Text    | - Required<br>- Must be 3-15 characters<br>- Only letters allowed                | "SanFrancisco"                    |
| FoundedOn     | Date    | - Required<br>- Must be a valid date (ISO format)<br>- Cannot be in the future   | "2015-12-01"                      |
| City          | Text    | - Required<br>- Minimum 2 characters                                            | "SF"                              |
| Description   | Text    | - Required<br>- Minimum 12, Maximum 200 characters                               | "A leading technology company."   |
| Logo          | Text    | - Optional<br>- Must be a valid string (URL recommended)                         | "https://via.placeholder.com/150"|
| Accept Terms  | Checkbox| - Required<br>- Must be checked                                                 | true (checked)                    |

---


json
## Review Form Validation Rules

This document explains the **validation rules** for each field in the **Review Form**, along with **example values** that will pass validation.





| Field Name    | Type     | Validation Rules                                                                 | Example Value                     |
|---------------|---------|---------------------------------------------------------------------------------|----------------------------------|
| ComanyId      | ObjectId | - Optional<br>- Must be a valid MongoDB ObjectId if provided                 |"64f1b5e2abc12345abcdef01" |
| ReviewerName  | Text    | - Required<br>- Must be 4-20 characters<br>- Only letters and spaces allowed     | "John Doe" |
| Subject       | Text    | - Required<br>- Must be 4-20 characters<br>- Only letters and spaces allowed     | "Great Service"|
| ReviewText    | Text    | - Required<br>- Must be 4-200 characters                                         | "The service was excellent!"  |
| Ratings       | Number  | - Required<br>- Must be numeric<br>- Min 1, Max 5                                 | 4 |

---





## 1.Example JSON Payload  Company Form Validation Rules
```json
{
  "CompanyName": "TechLabs",
  "Location": "SanFrancisco",
  "FoundedOn": "2015-12-01",
  "City": "SF",
  "Description": "A leading technology company.",
  "Logo": "https://via.placeholder.com/150",
  "AcceptTerms": true
}
json```

## 2.Example JSON Payload Review Form Validation Rules

```json
{
  "ComanyId": ["64f1b5e2abc12345abcdef01"],
  "ReviewerName": "John Doe",
  "Subject": "Great Service",
  "ReviewText": "The service was excellent and I am very satisfied!",
  "Ratings": 5
}



