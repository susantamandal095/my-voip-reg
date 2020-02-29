const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');

router.post('/registerr', ctrlUser.registerr);

module.exports = router;



