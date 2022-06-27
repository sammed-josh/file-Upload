const Redis = require("redis");

const redisClient = Redis.createClient();
redisClient.connect();

redisClient.on("connect", () => {
  console.log("Redis connection successful for env");
});

const redisGet = async (key) => await redisClient.get(key);

const redisSet = (key, val) => {
  if (typeof val === "object") {
    val = JSON.stringify(val);
  }
  redisClient.SET(key, val);
};

module.exports = { redisGet, redisSet };