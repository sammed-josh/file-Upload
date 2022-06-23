const bcrypt = require("bcrypt");
const User = require("../models/user");

const userCheck = async (userName) => User.find({ userName });

const userFind = async (userName, email) =>
  User.find({ $or: [{ userName }, { email }] });

const userCreate = async (userData) => {
  const hashPassword = await bcrypt.hash(userData.password, 10);

  return User.create({
    ...userData,
    password: hashPassword,
  });
};

module.exports = { userCheck, userFind, userCreate };
