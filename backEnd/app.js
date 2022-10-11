const express=require("express");
const app=express();
const errorMiddleware=require("./middleware/error")
app.use(express.json());
//route imports test

const user=require("./routes/userRoutes");
const product=require("./routes/productRoute");

app.use("/api1",product);
app.use("/api1",user);

// Middleware for error
app.use(errorMiddleware);
module.exports=app;