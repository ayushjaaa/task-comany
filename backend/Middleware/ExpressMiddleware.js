import { body } from "express-validator";
export const ComapnyVeidation = [
  body("CompanyName")
  .trim() 
  .notEmpty()
  .withMessage("CompanyName is required")
  .bail()
  .isLength({ min: 3, max: 15 })
  .withMessage("CompanyName must be between 3 and 15 characters"),
  body("location")
    .notEmpty()
    .withMessage("location can be empty")
    .matches(/^[a-zA-Z]+$/)
    .withMessage("Location must contain only letters")
    .isString()
    .withMessage("location should be a string")
    .isLength({ min: 3, max: 15 })
    .withMessage(
      "he CompanyName shoule be more then 3 and less then 15 charater"
    ),
  body("foundedOn")
    .isISO8601()
    .withMessage("Date should be velid foramt")
    .custom((value) => {
      if (new Date(value) > new Date()) {
        throw new Error("Founded date cannot be in the future");
      }
      return true;
    }),
  body("city").isString().withMessage("city must be String"),
  body("logo").isString().withMessage("logo must be a string"),
  body("description")
    .notEmpty()
    .withMessage("description cant be empty")
    .isString()
    .withMessage("description must be a String")
    .isLength({ min: 12, max: 200 })
    .withMessage("description must more then 12 charcter and less them 200"),
];

export const RewiesVelidation = [
  body("ReviewerName")
    .notEmpty()
    .withMessage("ReviewerName cant be empty")
    .isString()
    .withMessage("ReviewerName should be a string")
    .isLength({ min: 4, max: 20 })
    .withMessage(
      "ReviewerName shouold be more then 3 and less then 12 charter"
    ),
  body("subject")
    .notEmpty()
    .withMessage("subject cant be empty")
    .isString()
    .withMessage("subject should be a string")
    .isLength({ min: 4, max: 20 })
    .withMessage("subject shouold be more then 3 and less then 12 charter"),
  body("reviewtext")
    .notEmpty()
    .withMessage("reviewtext cant be empty")
    .isString()
    .withMessage("reviewtext should be a string")
    .isLength({ min: 4, max: 200 })
    .withMessage("reviewtext shouold be more then 3 and less then 12 charter"),
  body("ratings")
    .notEmpty()
    .withMessage("ratings cant be empty")
    .isNumeric()
    .withMessage("ratings should be a string")
   
];
