 const express = require('express');
 const userController = require('./../controllers/userController');
 const authController = require('./../controllers/authController');
  const router = express.Router();
   //app.use('/api/v1/users',registrationFormRouter);
   router.post('/signup',authController.signUp);
   router.post('/login',authController.logIn);
   router
   .route('/')
   .get(userController.getAllUsers)
   .post(userController.createUsers);
   router
   .route('/:id')
   .get(userController.getUser)
   .delete(userController.deleteUser)
   .patch(userController.updateUser);
    module.exports = router;
