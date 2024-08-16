
const express = require("express");
const router = express.Router();
const sql = require("../config/databaseconfig");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
    const { name, email, password } = req.body;

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    const isSafePassword = RegExp(passwordRegex).test(password);

    if (!isSafePassword) return res.send("Password should contain combination of 8 Capital, small letters and numbers");


    const existingUsers = await sql`select * from users where email ilike ${email}`;
    if (existingUsers.count != 0) return res.send("User already exists");

    const hashedPassword = await bcrypt.hash(password, 10);

    await sql`
    insert into users
    (name, email, password)
    values
    (${name}, ${email}, ${hashedPassword})
    returning name, email, password
    `
    res.send("Success");
});


module.exports = router;