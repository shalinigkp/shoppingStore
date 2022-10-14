const ErrorHandler = require("../utils/errorhandeler");
const catchAsyncErrors=require("../middleware/catchAsyncErrors");
const User=require("../models/userModel");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
//Register a User
exports.registerUser=catchAsyncErrors(async(req,res,next)=>{
    console.log('registerUser')
const {name,email,password} = req.body;
const user= await User.create({
    name,
    email,
    password,
    avatar:{
        public_id:"this is a sample id",
        url:"profilePicUrl",
    },
});

sendToken(user,201,res);
});

//login user

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  // checking if user has given password and email both

  if (!email || !password) {
    return next(new ErrorHandler("please enter email & password", 400));
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("invalid email or password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("invalid user or password", 401));
  }
  sendToken(user,200,res);
});

//logout user
exports.logout = catchAsyncErrors(async(req,res,next)=>{
  res.cookie("token",null,{
    expires:new Date(Date.now()),
    httpOnly:true,
  })
  res.status(200).json({
    success:true,
    message:"logged out"
  });
});

//forgot password

exports.forgotPassword = catchAsyncErrors(async(req,res,next)=>{
const user= await User.findOne({email:req.body.email});
if(!user){
  next(new ErrorHandler("user not found",404));
}
//get resetPasswordToken

const resetToken = user.getResetPasswordToken();
await user.save({validateBeforeSave:false});
const resetPasswordUrl=`${req.protocol}://${req.get(
  "host"
  )}/api/password/reset/${resetToken}`;

  const message = `your password reset token is :- \n\n ${resetPasswordUrl} \n\nif you have not requested this email then, please ignore it.`;

  try {
    await sendEmail({
     email:user.email,
     subject:`Ecommerce password recovery`,
     message,
    })
    res.status(200).json({
      success:true,
      message:`email sent to ${user.email} successfully`,
    })
  } catch (error) {
    user.resetPasswordToken=undefined;
    user.resetPasswordExpire=undefined;
    await user.save({validateBeforeSave:false});
    return next(new ErrorHandler(error.message,500));
  }
});
