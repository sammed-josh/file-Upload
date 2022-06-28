const express = require("express");
const { PORT } = require("./config/env");
const connectDB = require("./utils/db");

const app = express();

const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);


const logger = require("./logger/logger");

app.use("/files", require("./routes/userFile"));
app.use("/user",require("./routes/userLogin"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

connectDB().catch((error) => {
  logger.error(error);
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

app.listen(PORT, () => {
  logger.info(`Listening on port ${PORT}`);
});
