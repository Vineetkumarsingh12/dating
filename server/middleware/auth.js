import jwt from "jsonwebtoken";


const isAuthenticated = async(req, res, next) => {
    try{

  const token = req.cookies["rocket-token"];
  console.log("*********",token);
  if (!token)
    return res.redirect("https://dating-nine-rose.vercel.app/login");

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  req._id = decodedData._id;
  req.gender=decodedData.gender;

  console.log("decodedData 3334434",decodedData);

  next();
    }catch(err){
        return res.status(500).json({success:false,message:"Something went wrong"});
    }
};






  

export { isAuthenticated };
