import express from 'express';
import { addFood, listFood, removeFood } from '../controllers/foodCpntroller.js';
import multer from 'multer';  // used to create image storage system

const foodRouter = express.Router();    //used to create get , post and all

//image stoardge system

const storage = multer.diskStorage({
    destination : "upload", // provide the mname of folder where we want
    filename : (req , file , callBack)=>{
        return callBack(null , `${Date.now}${file.originalname}`)

    }
});

//uploading a file  MIDDLEWAER TO UPLOAD IMAGE IN A FOLDER

const upload = multer({storage : storage});

foodRouter.post("/add" , upload.single("image") , addFood)

// foodRouter.post("/add" , addFood)

foodRouter.get("/list" , listFood);
foodRouter.post("/remove" , removeFood)



export default  foodRouter ;