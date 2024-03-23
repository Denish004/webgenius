const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body
 console.log("3")

  try {
    console.log("4")
    const user =  await User.login(email, password)
    console.log(user)
    console.log("5")
    // create a token
    const token = createToken(user._id)
    console.log("6")
    res.status(200).json({userType: user.userType,email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

// signup a user
const signupUser = async (req, res) => {

  
const {userType,email, password,} = req.body
console.log(email,password,userType);
// email="sanskarwakchaure7@gmail.com";
// password="Akole@1234";
console.log("signup b-1");
  try {
    const user = await User.signup(userType,email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({userType,email, token})
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

module.exports = { signupUser, loginUser }