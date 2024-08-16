// import express from "express";
const express = require("express")
const app = express();


//#region App Setup
app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
//#endregion

//#region Middlewares
app.use(express.json())
//#endregion

//#region Define routing
const user = require("./src/routes/user");
app.use("/user", user);

const auth = require("./src/routes/auth");
app.use("/auth", auth);

const tickets = require("./src/routes/tickets");
app.use("/tickets", tickets);
//#endregion
