const logger = require("../utils/logger");
const userHelper = require("../helper/userHelper");

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
    return userData;
  } catch (error) {
    logger.error(`Error in registerService:${error}`);
    return new Error(error);
  }
};

module.exports = {registerService}