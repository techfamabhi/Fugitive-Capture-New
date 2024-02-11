
const express = require('express');
const router = express.Router();
const { simulateCapture } = require('../controllers/captureController');

router.post('/capture', simulateCapture);

module.exports = router;
