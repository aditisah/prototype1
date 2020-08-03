 const User = require('./../models/userModel');
 const jwt = require('jsonwebtoken');
 const appError = require('./../utils/appError');
 const signToken = id=>{
   return jwt.sign({id:id},process.env.JWT_SECRET,{expiresIn: process.env.JWT_EXPIRES_IN});
 }
 //const catchAsync = require('./../')
 exports.signUp = async (req,res,next)=>{
   try{
   const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm
   });
   const token = signToken(newUser._id)

   res.status(201).json({
     status: 'success',
     token,
     data:{
       user: newUser
     }
   });
 }
 catch(err){
  console.log(err);
 res.status(400).json({
   status: 'fail',
   message: 'Invalid data...'

 })
}
//  name: req.body.name,
//      email: req.body.email,
//      password: req.body.password,
//      passwordConfirm: req.body.passwordConfirm
 }
 exports.logIn = async (req,res,next)=>{
   const {email,password} = req.body;
   if (!email || !password){
     return next(new appError('Please provide email and password!',400));
   }
   //check if user exists or paasword is correct
   const user = await User.findOne({email}).select('+password');
 if(!user || !(await user.correctPassword(password,user.password))){
     return next(new appError('Incorrect email or password',401))
   }
   //If everything ok send token to client
   const token = signToken(user._id);
   res.status(200).json({
     status: 'success',
     token
   });
 }
