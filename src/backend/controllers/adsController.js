 ads = require('./../models/adModel');
exports.getAds = async (req,res)=>{
  ad = await ads.find();
  res.json(ad);
}
exports.postAds = (req,res)=>{
  const newAd =  ads.create(req.body);
  res.status(200).json({
    status: 'success',
    data: {
      newData: newAd
    }
  })
}

