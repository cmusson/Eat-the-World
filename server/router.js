const router = new require('express').Router();
const { getFoodImage, getFoodInfo } = require('./controller');

router.get('/image', getFoodImage);
router.get('/info', getFoodInfo)

module.exports = router;