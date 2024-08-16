const jwt = require("jsonwebtoken");
const jwtSecret = "Vivek-Test"


function authenticate(token, callback) {
    jwt.verify(token, jwtSecret);
  }

module.exports = authenticate;