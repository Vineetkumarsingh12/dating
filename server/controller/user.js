import { User } from "../model/user.js";
import {personality as Question} from "../model/personality.js"
import {confession} from "../model/confess.js";




// update personality

export const updatePersonality = async(req,res) => {
    try{
        const data=req.body;
        const {_id,...restData}=data;
        restData.mark=true;

       
    
        const updatedPersonality=await Question.findByIdAndUpdate(_id,restData,{new:true});
      
      if(!updatedPersonality) return res.status(400).json({success:false,message:"Personality not found"});
        
        return res.status(200).json({success:true,
            data:updatedPersonality,
            message:"Personality updated successfully"});
    }  catch(err){
        return res.status(500).json({success:false,message:"Something went wrong"});
    }
   
}


// personality by id

export const personality=async(req,res)=>{
    try{
   
        const {id}=req.params;
        console.log("id",id);
        const personality=await Question.findById(id);
        console.log("backend",personality);
        if(!personality) return res.status(400).json({success:false,message:"Personality not found"});
       
        return res.status(200).json({success:true,data:personality});
    }
    catch(err){
        return res.status(500).json({success:false,message:"Something went wrong"});
    }
}



export const allUser=async(req,res)=>{
    try{
        const user=await User.find().populate('personality').select('-password');

        return res.status(200).json({success:true,data:user});
    }catch(err){
        return res.status(500).json({success:false,message:"Something went wrong"});
    }
}



//all confession

export const allConfession=async(req,res)=>{
    try{
        const confessionData=await confession.find();
        return res.status(200).json({success:true,data:confessionData});
    }catch(err){
        return res.status(500).json({success:false,message:"Something went wrong"});
    }
}


//own confession 
 export const ownConfession=async(req,res)=>{
        try{
          
            const confessionData=await confession.find({confessBy:req._id});
            return res.status(200).json({success:true,data:confessionData});
        }catch(err){
            return res.status(500).json({success:false,message:"Something went wrong"});
        }
    }


    // confess to 

    export const confessTo=async(req,res)=>{
        try{
            const {description,confessTo}=req.body;
           
            // check if confessTo is valid user
         const user=await User.findById(confessTo);
            if(!user) return res.status(400).json({success:false,message:"User not found"});


            // check if confessTo is same as confessBy
            if(req._id===confessTo) return res.status(400).json({success:false,message:"You can't confess to yourself"});

            // check if confessTo is already confessed
            const confess=await confession.findOne({confessTo,confessBy:req._id});

            if(confess) return res.status(400).json({success:false,message:"You have already confessed to this user"});

            // create confession
            const confessData=await confession.create({description,confessBy:req._id,confessTo});

            //   check if confessTo is already confessed
            const confess2=await confession.findOne({confessTo:req._id,confessBy:confessTo});

            if(confess2){
                //send mail to all  user.
            }

            return res.status(200).json({success:true,data:confessData});
        }catch(err){
            return res.status(500).json({success:false,message:"Something went wrong"});
        }
    }


    // get user of similar personality






