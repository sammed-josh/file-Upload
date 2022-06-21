const dotenv = require("dotenv");
const path = require("path");

const pathName = path.resolve(__dirname, `${process.env.NODE_ENV?.trim()}.env`);

dotenv.config({
  path: pathName,
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV || "development",
  MONGO_CONNECTION_URL: process.env.MONGO_CONNECTION_URL || "mongodb://127.0.0.1:27017",
  SIZE: process.env.SIZE || 1000000 * 100,
  PORT: process.env.PORT || 3010,
};
