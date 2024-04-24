import jwt from "jsonwebtoken";
import { ROCKET_TOKEN } from "../constants/config.js";
import { User } from "../models/user.js";

const isAuthenticated = async(req, res, next) => {
    try{

    
  const token = req.cookies[ROCKET_TOKEN];
  if (!token)
    return res.status(401).json({ success: false, message: "Unauthorized" });

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  req._id = decodedData._id;

  next();
    }catch(err){
        return res.status(500).json({success:false,message:"Something went wrong"});
    }
};






  

export { isAuthenticated };
