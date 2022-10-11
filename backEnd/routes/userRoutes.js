const express=require("express");


const { registerUser } = require("../controllers/userController");
const recordRoutes=express.Router();

recordRoutes.route("/register").post(registerUser)



module.exports=recordRoutes;