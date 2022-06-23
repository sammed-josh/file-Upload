const router = require("express").Router();

const { userRegister, userLogin } = require("../controller/userController");

const regexUserValidation = require("../middleware/userValidationRegex");

router.post("/login", userLogin);

router.post("/register",  userRegister);

module.exports = router;
