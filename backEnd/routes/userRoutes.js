const express=require("express");


const { registerUser, loginUser, logout } = require("../controllers/userController");
const recordRoutes=express.Router();

recordRoutes.route("/register").post(registerUser)
recordRoutes.route("/login").post(loginUser)
recordRoutes.route("/logout").get(logout)


module.exports=recordRoutes;