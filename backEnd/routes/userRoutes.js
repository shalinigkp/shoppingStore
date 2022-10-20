const express=require("express");


const {
     registerUser, 
     loginUser,
      logout, 
      forgotPassword, 
      resetPassword, 
      getUserDetails, 
      updatePassword,
       updateProfile, 
       getAllUser,
       getSingleUser,
       updateUserRole,
       deleteUser
    }= require("../controllers/userController");
const recordRoutes=express.Router();
const { isAuthenticatedUser,authorizeRoles } = require("../middleware/auth");

recordRoutes.route("/register").post(registerUser);
recordRoutes.route("/login").post(loginUser);
recordRoutes.route("/password/forgot").post(forgotPassword);
recordRoutes.route("/password/reset/:token").put(resetPassword);
recordRoutes.route("/logout").get(logout);
recordRoutes.route("/me").get(isAuthenticatedUser,getUserDetails);
recordRoutes.route("/password/update").put(isAuthenticatedUser,updatePassword);
recordRoutes.route("/me/update").put(isAuthenticatedUser,updateProfile);
recordRoutes.route("/admin/users").get(isAuthenticatedUser,authorizeRoles("admin"),getAllUser);

recordRoutes.route("/admin/user/:id")
.get(isAuthenticatedUser,authorizeRoles("admin"),getSingleUser)
.put(isAuthenticatedUser,authorizeRoles("admin"),updateUserRole)
.delete((isAuthenticatedUser,authorizeRoles("admin"),deleteUser));
module.exports=recordRoutes;