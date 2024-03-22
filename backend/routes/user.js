const express = require('express')

// controller functions
const { loginUser, signupUser } = require('../controllers/userController')
//  const { accessUser } = require('../controllers/accessController')
const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)

// access route
// router.post('/access', accessUser)


module.exports = router