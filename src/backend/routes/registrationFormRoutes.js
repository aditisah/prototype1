const express = require('express');
const registrationFormController = require('./../controllers/registrationFormController');
 const router = express.Router();
 //app.use('/api/v1/studentDetails',userRouter);
  router
  .route('/')
  .get(registrationFormController.getStudentDetails)
  .post(registrationFormController.enterDetails);
  // router
  // .get(getUser)
  // .delete(deleteUser)
  // .patch(updateUser);
   module.exports = router;
