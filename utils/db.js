const mongoose = require("mongoose");

const env = require("../config/env");
const logger = require("../logger/logger");

const connectDB = async () => {
  try {
    const con = await mongoose.connect(env.MONGO_CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info("connected", con);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = connectDB;
