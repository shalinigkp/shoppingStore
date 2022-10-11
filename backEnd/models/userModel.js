const mongoose=require("mongoose");
const validator=require("validator");

const userSchema=new mongoose.Schema({

    name:{
        type:String,
        required:[true,"please enter your name"],
        maxLength:[30,"name can not exceed 30 characters"],
        minLength:[4,"name should have more than 4 characters"],
    },
    email:{
        type:String,
        required:[true,"please enter your email"],
        unique:true,
        validate:[validator.isEmail,"please enter a valid email"],

    },
    password:{
        type:String,
        required:[true,"please enter your password"],
        minLength:[8,"password should be greater than 8 characters"],
        select:false,
    },
    avatar:{
        public_id:{
            type:String,
            required:true,
        },
        url:{
            type:String,
            required:true,
        },
    },
    role:{
        type:String,
        default:"user",
    },
   // createdAt:{
     //   type:Date,
     //   default:Date.now,
   // },
    resetPasswordToken:String,
    resetPasswordExpire:Date,

});

module.exports= mongoose.model("User",userSchema)