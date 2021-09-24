const router = new require('express').Router();
const { getFoodImage, getFoodInfo } = require('./controller');

router.post('/image', getFoodImage);
router.post('/info', getFoodInfo);

module.exports = router;