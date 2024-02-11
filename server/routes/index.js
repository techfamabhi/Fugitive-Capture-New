const express = require('express');
const router = express.Router();
const cityRoutes = require('./cityRoutes');
const vehicleRoutes = require('./vehicleRoutes');

router.use('/cities', cityRoutes);
router.use('/vehicles', vehicleRoutes);

module.exports = router;
