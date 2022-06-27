const index = require("../utils/index");
const generateToken = require("../utils/auth");
const logger = require("../utils/logger");
const userHelper = require("../helper/userHelper");

const loginService = async (userName, password) => {
  try {
    let userInfo = await redisGet("userInfo");
    userInfo = JSON.parse(userInfo);
    if (userInfo.userName === userName) {
      if (password === userInfo.password) {
        const tokenValue = await generateToken(userInfo.userName);
        const loginData = {
          name: userInfo.name,
          userName: userInfo.userName,
          token: tokenValue,
        };
        return loginData;
      }
    } else {
      const foundUser = await userHelper.userCheck(userName);
      if (foundUser.length === 0) {
        throw new Error("User doesn't exist");
      }

      const passwordCheck = await index.passwordMatch(userName, password);
      if (!passwordCheck) {
        throw new Error("Password Don't Match");
      }
      const newToken = await generateToken(foundUser[0].userName);
      const userData = {
        name: foundUser[0].name,
        userName: foundUser[0].userName,
        token: newToken,
      };
      return userData;
    }
  } catch (error) {
    logger.error(`Error in loginService:${error}`);
    return new Error(error);
  }
};

const registerService = async (userData) => {
  try {
    // Checking if user exist in database
    const foundUser = await userHelper.userFind(
      userData.userName,
      userData.email
    );
    if (foundUser.length !== 0) {
      throw new Error(`User with userName ${userData.userName} already exist`);
    }
    // Creating new user in Database
    await userHelper.userCreate(userData);
    redisSet("userInfo", userData);
    return userData;
  } catch (error) {
    logger.error(`Error in registerService:${error}`);
    return new Error(error);
  }
};

module.exports = { registerService, loginService };
