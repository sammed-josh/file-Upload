const jsonwebtoken = require("jsonwebtoken");

const generateToken = (userName) => {
  const token = jsonwebtoken.sign(
    { userName },
    process.env.ACCESS_TOKEN,

    {
      expiresIn: "2h",
    }
  );
  return token;
};

module.exports = generateToken;
