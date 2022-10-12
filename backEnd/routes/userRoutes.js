const express=require("express");


const { registerUser, loginUser } = require("../controllers/userController");
const recordRoutes=express.Router();

recordRoutes.route("/register").post(registerUser)
recordRoutes.route("/login").post(loginUser)


module.exports=recordRoutes;