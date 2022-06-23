const express = require("express");
const { PORT } = require("./config/env");
const connectDB = require("./utils/db");

const app = express();

const logger = require("./logger/logger");

app.use("/files", require("./routes/userFile"));
app.use("/user",require("./routes/userLogin"))

connectDB().catch((error) => {
  logger.error(error);
});

app.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}`);
});
