require('dotenv').config()
const cors = require('cors')
const multer = require('multer');
const fs = require('fs');

const express = require('express')
const mongoose = require('mongoose')
// const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')
const studentRoutes=require('./routes/student')
const courseRegisterRoutes = require('./routes/courseRegisterRoutes')
const courseRegister = require('./models/courseRegister')
const courseModel = require('./models/courseModel');
const bodyParser= require('body-parser')

// express app
const app = express()
app.use(bodyParser.json());

// middleware
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
    
        const course = req.body.course; // Assuming course is sent from the client
        const courseFolderPath = `./uploads/${course}`;
        // Create course folder if it doesn't exist
        if (!fs.existsSync(courseFolderPath)) {
            fs.mkdirSync(courseFolderPath);
        }
        cb(null, courseFolderPath);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "--" + file.originalname);
    }
});

const upload = multer({ storage: fileStorageEngine });


app.post('/multiple', upload.array('files', 5), (req, res) => {
    // console.log('Request body:', req);
    console.log(req.body.course);
    // console.log(req.files);
    res.send("Multiple files uploaded");
});

// app.get('/submit', async (req, res) => {
//     const { course } = req.query;
//     console.log("submit " + course)
//     try {
//         const URL = await courseModel.findOne({ course });
//         // console.log(URL)
//         res.status(200).json(URL);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// });

app.post('/submit', async (req,res)=>{
    // console.log("patch")
    // const course = req.params;

    console.log(req.body);
     const course = req.body[0];
    const img1= req.body[1];
    console.log(img1);
    const img2= req.body[2];
    const img3= req.body[3];
   
    console.log("b-1");
    const URL=await courseModel.create({
        course,
       URL:{ img1,
        img2,
        img3,
       }
    })
    console.log("b-2");
    if(!URL){
        return res.status(404).json({error:"No such Cards exists"})
       
    }
    res.json({hello:"hello"}).status(200);
})

// routes
/app.use('/api/student', studentRoutes)
app.use('/api/user', userRoutes)
app.use('/api/courseRegister', courseRegisterRoutes)


// connect to db
mongoose.connect("mongodb+srv://cochack1:WebGenius123@cluster0.lqbklgm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Authentication")
  .then(() => {
    // listen for requests
    app.listen(8080, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })