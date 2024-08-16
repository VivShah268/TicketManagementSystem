
const express = require("express");
const router = express.Router();
const sql = require("../config/databaseconfig");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const jwtSecret = "Vivek-Test"

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const existingUsers = await sql`select * from users where email ilike ${email}`;
    if (existingUsers.count == 0) return res.send("User doesn't exists");

    const [user] = existingUsers;    
    const isCorrectPassword = await bcrypt.compare(password,user.password);
    if (!isCorrectPassword)  return res.send("Credentials doesn't match");
    
    const token = jwt.sign({ userId: user.id }, jwtSecret, {expiresIn: '1h'});
    
    res.send({token});
});


module.exports = router;