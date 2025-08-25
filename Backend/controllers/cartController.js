 // converted the token into in middel auth.js and then used it here to add , remove cart item

import userModel from '../models/userModel.js'

// add Items to user cart
const addToCart = async (req , res)=>{
   try{
    let userData = await userModel.find({_id:req.body.userId});
    let cartData = await userData/cartData;
    if(!cartData[req.body.itemId]){
        cartData[req.body.itemId = 1]
    }
    else{
        cartData[req.body.itemid] += 1 ;
    }
    await userModel.findByIdAndUpdate(req.body.userId , {cartData});
    req.json({success : true , message : "Add to cart"});
   }
   catch (error){
    console.log(error);
    res.json({success:false , messsage : "Error"})
   }
  
}

//remove  items from user Cart

const removeFromCart = async (req, res)=>{

}

//fetch user cart Data

const getCart = async (req , res)=>{

}

export {addToCart , removeFromCart , getCart};