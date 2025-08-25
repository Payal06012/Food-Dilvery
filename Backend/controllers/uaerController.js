import userModel from "../models/userModel.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";
import validator from "validator";

// login user

const loginUser = async(req , res)=>{

    const {email , password} = req.body ;
    try{
        const user = await userModel.findOne({email})

        if(!user){
        return res.json({success : false , mrssage : "user does not exist"});
        }

        const isMatch = await bcrypt.compare(password , user.password);

        if(!isMatch){
            return res.json({success :false , message : "Invalid credentilals"})
        }

        const token = createToken(user._id);
        res.json({success : true , token});

    }
    catch(error){
        console.log(error);
        res.json({success : false , message : "Error"});

    }

}

// GENERATING TOKEN

const createToken = (id) =>{
    return jwt.sign({id} , process.env.JWT_SECRET)
}

//register User

const registerUser = async (req , res )=>{

const { name , email , password} = req.body;
try{

    // check;ing if user already exist

    const exists = await userModel.findOne({email});

    if(exists){
        return res.json({success : false , message : "user alreadyi exist"})
    }

//     //validating email format and strong password;

    if(!validator.isEmail(email)){
       return res.json({success : false , message : "Please enter a valid email"}) 
    }

    //check password length is greayer then 8 digit or not
if(password.length < 8){
    return res.json({success : false , message : "Please enter a Strong password"})
}

// // hashing user password using bcrypt to encrypt password

const salt = await bcrypt.genSalt(10)   // we can set this range from 5 to 15 it encrypt it strongly as the number increases 
                                        // if we use 15 it take long time 
const hashPassword = await bcrypt.hash(password , salt);

const newUser = new userModel({
    name : name ,
    email : email ,
    password : hashPassword
   
})

// saving user to database

const user = await newUser.save();

const token = createToken(user._id);
       res.json({success : true , token})      //sending object



}


catch(error){
console.log(error);
res.json(({success: false , message : "Error" }))
}
}

export {loginUser , registerUser};