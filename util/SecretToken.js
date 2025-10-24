require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  const privateKey = process.env.PRIVATE_KEY;
  return jwt.sign({ id }, privateKey, {
    expiresIn: 3 * 24 * 60 * 60,
    algorithm: "RS256",
  });
};
