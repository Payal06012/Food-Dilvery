import mongoose from "mongoose";

 export const connectDB = async () =>{
//     await mongoose.connect('mongodb+srv://payalpatel3727:Universe123Payal@cluster0.oeth6uw.mongodb.net/Food-Delivery')
//     .then(()=>{
// console.log("Database Connected");
//     });

    await mongoose.connect('mongodb://localhost:27017/Food-Delivery')
    .then(()=>{
console.log("Database Connected");
    });

}