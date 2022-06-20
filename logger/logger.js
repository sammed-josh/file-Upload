const path = require("path");
const winston = require("winston");

const { createLogger, transports } = require("winston");

const logger = createLogger({
  transports: [
    new transports.File({
      filename: path.join(__dirname, "info.log"),
      level: "info",
    }),
    new transports.File({
      filename: path.join(__dirname, "error.log"),
      level: "error",
    }),
    new transports.Console(),
  ],
  format: winston.format.combine(
    winston.format.label({
      label: "Label🏷️",
    }),
    winston.format.timestamp({
      format: "MMM-DD-YYYY HH:mm:ss",
    }),
    winston.format.printf(
      (info) =>
        `${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`
    )
  ),
});

module.exports = logger;
