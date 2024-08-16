
const express = require("express");
const router = express.Router();
const sql = require("../config/databaseconfig");
const bcrypt = require("bcrypt");
const authenticate = require("../middleware/authentication");

router.post("/", async (req, res) => {
    const [,token] = req.header("Authorization").split(" ")
    authenticate(token);
    res.send("Success");
  });


module.exports = router;