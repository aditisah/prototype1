const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
  college:{
    type: String,
     required: [true, 'college is required..'],
    index: true
  },
  name:{
    type: String,
     required: [true, 'name field is required..']

  },
  batch:{
    type: String,
    required: [true, 'batch field is required..']

  },
  branch:{
    type: String,
    required: [true, 'branch field is required..']

  }
});
const StudentDetails = mongoose.model('StudentDetails',studentSchema);
module.exports = StudentDetails;
