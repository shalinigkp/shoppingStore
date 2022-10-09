const express=require("express");
const app=express();
const errorMiddleware=require("./middleware/error")
app.use(express.json());
//route imports test


app.use("/api1",require("./routes/productRoute"));

// Middleware for error
app.use(errorMiddleware);
module.exports=app;