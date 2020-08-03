const mongoose = require('mongoose');
const adSchema = new mongoose.Schema({
  component:{
    type: String
  },
  title:{
    type: String
  },
  instruction:{
 type: String
  },
  result:{
    type: String
     }
});
const ads = mongoose.model('Ads',adSchema);
 module.exports = ads;
