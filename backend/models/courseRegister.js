const mongoose = require('mongoose');


const courseRegisterSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true
  },
  DBMS: {
    type: Boolean,
    required: false,
    default:false
  },
  OS: {
    type: Boolean,
    required: false,
    default:false
  },
  DAA: {
    type: Boolean,
    required: false,
    default:false
  },
  TOC: {
    type: Boolean,
    required: false,
    default:false
  },
  DIA: {
    type: Boolean,
    required: false
  },
  OSC: {
    type: Boolean,
    required: false
  }
 

  // religion: {
  //   type: String,
  //   required: true
  // },
  // category: {
  //   type: String,
  //   required: true
  // }
});


const courseRegister = mongoose.model('courseRegister', courseRegisterSchema);

module.exports = courseRegister;