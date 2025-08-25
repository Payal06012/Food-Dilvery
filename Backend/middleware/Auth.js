// //for decoding token generatedd during registration to add cart Data
// // this middleware take the token and covert into user id taht can be used to add and delete from cart

// import jwt from "jsonwebtoken";


// const authMiddleware = async (req , res , next)=>{

//     const {token} = req.headers ;
//     if(!token){
//         return res.json({success :false , message : "Not Aithorized login again"} )  
//      }

//      try {
//         const token_decode = jwt.verify(token , process.env.JWT_SECRET)
//         req.bogy.userId = token_decode ;
//         next();
//      }
//      catch(error){
//         console.log(error);
//         res.lson({success : false , message : "Error"})


//      }
// }

// export default authMiddleware ;


import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  try {
    // Extract token (if using headers.token or headers.authorization)
    const token = req.headers.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ success: false, message: "Not Authorized, login again" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach userId from payload to request
    req.userId = decoded.id;   // assuming you signed token as { id: user._id }

    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};

export default authMiddleware;

