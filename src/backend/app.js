const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
//const studentSchema = require('./models/registrationFormModel');
const userRouter = require('./routes/userRoutes');
const registrationFormRouter = require('./routes/registrationFormRoutes');
const adRouter = require('./routes/adRoutes');
//dotenv.config({path: './config.env'});

dotenv.config({path: './config.env'});

const app = express();
//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD);
mongoose.connect(DB,{
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(con=>{
  //console.log(con.connections);
  console.log("connected to database....");
});

// const testDetails = new studentSchema({
//   college: "aa",
//   name: "adi",
//   batch: "first",
//   branch: "mech"
// })
// testDetails.save().then(doc=>{
//   console.log(doc);
// })
//   .catch(err=>{
//     console.log(err);
//   })

// app.get('/studentDetails',(req,res)=>{
//   res.status(200).send("details are shown...");
// })
// app.post('/studentDetails',(req,res)=>{
//   console.log(req.body);
//   res.send("Thanks!!! you have submitted details...")
// })
//routes
app.use('/api/v1/users',userRouter);
 app.use('/api/v1/registration',registrationFormRouter);
app.use('/api/v1/ads',adRouter);
module.exports = app;
