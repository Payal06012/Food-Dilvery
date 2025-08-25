import foodmodel from "../models/FoodModel.js";
import fs from "fs";

//add food item

const addFood = async(req , res)=>{   //to storege product data in database

    let image_FileName = `${req.file.filename}` ;

    const food = new foodmodel({
        name : req.body.name ,
        description : req.body.description , 
        price : req.body.price,
        image : image_FileName ,
        category : req.body.category
    })
    try{
        await food.save();
        res.json({success : true , message : "Food Added"})
    }
    catch(error){
        console.log(error);
        res.json({success : false , message : "Error" })
    }


}


//all food list

const listFood = async(req, res)=>{
try{
    const foods = await foodmodel.find({});
    res.json({success : true , data : foods})
}
catch(error){
    console.log(error);
    res.json({success : false , message : "Error"})
}
}


//Remove food Item

const removeFood = async (req , res)=>{
    try{
        const food = await foodmodel.findById(req.body._id);
        fs.unlink(`upload/${food.image}` , ()=>{});

        await foodmodel.findByIdAndDelete(req.body._id);
        res.json({success :true , message : "Food Removed"})
    }
    catch(error){
        console.log(error);
        res.json({success : false , message : "Error"})
    }
}




export {addFood , listFood , removeFood};