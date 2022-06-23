const { body } = require("express-validator");

const userValidation = [
  body("name").isString().notEmpty(),
  body("gender").notEmpty().isIn(["male", "female", "other"]),
  body("dob").isDate({ format: "DD-MM-YYYY" }).notEmpty(),
  body("userName").isString().notEmpty(),
  body("email").isEmail().notEmpty(),
  body("password").isStrongPassword().isLength({ min: 8 }),
  body("confirmPassword")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        return false;
      }
      return true;
    })
    .withMessage("password dont match"),
];

module.exports = userValidation;
