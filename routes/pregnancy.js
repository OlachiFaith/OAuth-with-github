const { authenticate } = require('../middleware/auth');
const { userPregnancy } = require('../utils/pregnancy');

const router = require('express').Router();

router.post('/preggy',authenticate,  userPregnancy);


module.exports = router 