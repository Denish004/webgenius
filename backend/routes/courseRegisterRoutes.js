const express=require('express')
const router= express.Router()
const courseRegister= require("../models/courseRegister")

// router.get('/',(req,res)=>{
    
// })

router.post('/',async (req,res)=>{
    const {name, DBMS, DAA, DIA, OS, TOC, OSC}=req.body;
    console.log(name,name, DBMS, DAA, DIA, OS, TOC, OSC);
try {
    const response = courseRegister.create({
        name, DBMS, DAA, DIA, OS, TOC, OSC
    })
} catch (error) {
    console.log(error)
}
   

})

module.exports=router