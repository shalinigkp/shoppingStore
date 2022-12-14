const express=require("express");
const app=express();
const errorMiddleware=require("./middleware/error");
const cookieParser=require("cookie-parser");
const cors=require('cors');
app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use(cookieParser());
//route imports test

const user=require("./routes/userRoutes");
const product=require("./routes/productRoute");
const order=require("./routes/orderRoute");

app.use("/api1",product);
app.use("/api1",user);
app.use("/api1",order);

// Middleware for error
app.use(errorMiddleware);
module.exports=app;