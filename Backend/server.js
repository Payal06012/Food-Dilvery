import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodmodel from "./models/FoodModel.js";
import foodRouter from "./Routes/foodRoute.js";
import bodyParser from "body-parser";
import userRouter from "./Routes/userRoute.js";
import userModel from "./models/userModel.js";
import 'dotenv/config'    // enable to use env variabel
import cartRouter from "./Routes/cartRoute.js";
import orderRoute from "./Routes/orderRoutes.js";
import Order from "./models/orderModel.js";
import adminRouter from "./Routes/adminRoute.js";

//app config

const app = express();

const port = process.env.PORT || 4000;

//middleware

app.use(express.json())  // whenever we get request from frontend to backend it will[l be pass from this json
app.use(cors()) ; // using this we can acces backened from frontend 

//db connect 
connectDB();
// foodmodel();
userModel();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// api endpoint
app.use("/api/food" , foodRouter);

app.use("/images" , express.static('upload'));
app.use("/api/user" , userRouter);
app.use("/api/cart" , cartRouter);
app.use("/api/order", orderRoute);
app.use("/api/admin" , adminRouter);



app.get("/" , (req , res)=>{
res.send("API working");
})

app.listen(port, ()=>{
    console.log(`server is running at http://localhost:${port}}`)
})
 