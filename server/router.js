const router = new require('express').Router();
const { getFoodImage, getFoodInfo, getRestaurants } = require('./controller');

router.post('/image', getFoodImage);
router.post('/info', getFoodInfo);
router.post('/restaurants', getRestaurants);

module.exports = router;