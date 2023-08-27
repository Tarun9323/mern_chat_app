const express = require('express');
const router = express.Router();
const {userAuth} = require('../controllers/userController')

router.route('/').post(userAuth);

module.exports = router;