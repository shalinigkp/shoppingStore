const ErrorHandler = require("../utils/errorhandeler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt =require("jsonwebtoken");
const User=require("../models/userModel");

exports.isAuthenticatedUser = catchAsyncErrors(async(req,res,next)=>{
const {token} = req.cookies;
console.log("isAuthenticatedUser")
if(!token){

    return next(new ErrorHandler("please login to access this resource",401))
}
const decodedData = jwt.verify(token,process.env.JWT_SECRET);
//req.user=await User.findById(decodedData.id);
const user=await User.findById(decodedData.id);
//console.log(user)
req.user=user;
next();
});

exports.authorizeRoles = (...roles) => {
  console.log(roles)
  return (req, res, next) => {
    console.log(roles,req.user.role)
    if (!roles.includes(req.user.role)) {
   return next(
    new ErrorHandler(
        `Role:${req.user.role} is not allow to access this resource`,403
      )
   ) 
    }
    next();
  };
};