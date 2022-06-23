const router = require("express").Router();

const { userRegister, userLogin } = require("../controller/userController");

const loginValidation = require("../middleware/loginValidation");


router.post("/login", userLogin);

router.post("/register",loginValidation, userRegister);

module.exports = router;
