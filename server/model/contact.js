import mongoose, { Schema, model } from "mongoose";


const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email:{
      type:String,
      required:true,
    },

    
  message:{
    type:String,
    required:true
  } 
  },
  {
    timestamps: true,
  }
);

export const Contact = mongoose.models.Contact || model("Contact", schema);
