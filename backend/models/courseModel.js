const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    
    course:{
        type: String,
        default:"DSA"
    } ,
    URL: {
      img1: {
        type: String,
        default:
          "",
      },
      img2: {
        type: String,
        default:
          "",
      },
      img3: {
        type: String,
        default:
          "",
      },
      
    },
   
  },
  { timestamps: true }
);

const courseModel = mongoose.model("courseModel", courseSchema);
module.exports=courseModel;