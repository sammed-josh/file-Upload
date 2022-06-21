const express = require("express");
const { PORT } = require("./config/env");
const connectDB = require("./utils/db");

const app = express();

const logger = require("./logger/logger");

app.use("/api/files", require("./routes/userRoutes"));

connectDB().catch((error) => {
  logger.error(error);
});

app.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}`);
});
