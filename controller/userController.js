const { v4: uuidv4 } = require("uuid");

const { USER_CONTROLLER } = require("../utils/constant");
const File = require("../models/file");
const logger = require("../logger/logger");
const { responder } = require("../utils/responder");

const fileUploader = async (req, res) => {
  try {
    if (!req.file) {
      return res.json({ error: USER_CONTROLLER.FILE_UPLOAD_ERROR_MSG });
    }
    // store to database
    const file = new File({
      filename: req.file.filename,
      uuid: uuidv4(),
      path: req.file.path,
      size: req.file.size,
    });

    await file.save();
  } catch (err) {
    logger.error(`error occured while adding data:${JSON.stringify(err.err)}`);
  }
  return res.send();
};

const userRegister = async (req, res) => {
  try {
    const userData = { ...(await userInfo(req)), password: req.body.password };
    const user = await registerService(userData);
    if (!user.message) {
      responder(200, "Registration successful for user", res, user);
    }
    responder(400, user.message, res);
  } catch (error) {
    logger.error(`Error in userRegisterController:${error}`);
    responder(400, error.message, res);
  }
};

module.exports = { fileUploader };
