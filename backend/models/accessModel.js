const mongoose = require('mongoose')

const userschema = new Schema(
    {
      message:{ type: String,
        required: true,
     },
    permission:{
    type:Boolean,
    default:false}
    },
    { timestamps: true }
  );
  
  const Usermodel = mongoose.model("access", userschema);
  module.exports=Usermodel;