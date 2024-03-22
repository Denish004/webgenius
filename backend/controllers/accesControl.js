const mongoose =require('mongoose');
const Cardmodel =require('../models/accessModel');
// create a request


const createAccess=async (req,res)=>{
    const { id,name, img, location,area,star,tag,price,description}=req.body;
    try {
        const card=await Cardmodel.create({ id,name, img, location,area,star,tag,price,description})
        res.json(card).status(200)
    } catch (error) {
        res.status(400).json({error:error.mesage})
    }
    // res.json({mssg:"Post a New Card"})
}


module.exports = { createAccess  }