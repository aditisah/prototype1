studentDetail = require('./../models/registrationFormModel');
//const registrationFormRouter = require('./routes/registrationFormRoutes');
// getStudentDetails(){

// }
//app.use('/api/v1/studentDetails',registrationFormRouter);
exports.getStudentDetails = async (req,res)=>{
 const studentDetails = await studentDetail.find();
//  res.status(200).json({
//    //status: 'success',
//   details: studentDetails

//  })
res.json(studentDetails);
}
exports.enterDetails = async (req,res)=>{
  try {
  // newStudentDetail = new studentDetail({
  //   college: "as",
  //   name: "adi"
  // })
  //newStudentDetail.save();
   const newStudentDetail =  await studentDetail.create(req.body);
   //console.log(req.body.json);
   res.status(200).json({
     status: 'success',
     data:{
    //  college: newStudentDetail.college,
    //  name: newStudentDetail.name,
    //  batch: newStudentDetail.batch,
    //  branch: newStudentDetail.branch
    newData: newStudentDetail
     }
   });
  }
  catch(err){
    //console.log("duplicate data");
   res.status(400).json({
     status: 'fail',
     message: 'Invalid data...'

   })
  }
}

