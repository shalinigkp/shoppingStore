const express=require("express");


const {
     registerUser, 
     loginUser,
      logout, 
      forgotPassword, 
      resetPassword, 
      getUserDetails, 
      updatePassword,
       updateProfile 
    }= require("../controllers/userController");
const recordRoutes=express.Router();
const { isAuthenticatedUser,authorizeRoles } = require("../middleware/auth");

recordRoutes.route("/register").post(registerUser)
recordRoutes.route("/login").post(loginUser)
recordRoutes.route("/password/forgot").post(forgotPassword)
recordRoutes.route("/password/reset/:token").put(resetPassword)
recordRoutes.route("/logout").get(logout)
recordRoutes.route("/me").get(isAuthenticatedUser,getUserDetails)
recordRoutes.route("/password/update").put(isAuthenticatedUser,updatePassword)
recordRoutes.route("/me/update").put(isAuthenticatedUser,updateProfile)
module.exports=recordRoutes;