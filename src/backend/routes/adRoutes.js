const express =require('express');
const adController = require('./../controllers/adsController');
const router = express.Router();
router.route('/').get(adController.getAds);
router.route('/').post(adController.postAds);
module.exports = router;
