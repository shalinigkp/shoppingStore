const express=require("express");


const { registerUser, loginUser, logout, forgotPassword, resetPassword } = require("../controllers/userController");
const recordRoutes=express.Router();

recordRoutes.route("/register").post(registerUser)
recordRoutes.route("/login").post(loginUser)
recordRoutes.route("/password/forgot").post(forgotPassword)
recordRoutes.route("/password/reset/:token").put(resetPassword)
recordRoutes.route("/logout").get(logout)


module.exports=recordRoutes;