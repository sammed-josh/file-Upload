const dotenv = require("dotenv");
const path = require("path");

const pathName = path.resolve(__dirname, `${process.env.NODE_ENV?.trim()}.env`);

dotenv.config({
  path: pathName,
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV || "development",
  MONGO_CONNECTION_URL: process.env.MONGO_CONNECTION_URL,
  SIZE: process.env.SIZE,
  PORT: process.env.PORT || 3010,
};
