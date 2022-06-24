const bcrypt = require("bcrypt");
const User = require("../models/user");

const passwordMatch = async (userName, password) => {
  const foundUser = await User.find({ userName });
  const submittedPass = password;
  const storedPass = foundUser[0].password;
  const flag = await bcrypt.compare(submittedPass, storedPass);
  return flag;
};

const userInfo = async (req) => {
  const userData = {
    name: req.body.name,
    gender: req.body.gender,
    dob: req.body.dob,
    userName: req.body.userName,
    email: req.body.email,
  };
  return userData;
};

module.exports = { passwordMatch, userInfo };
