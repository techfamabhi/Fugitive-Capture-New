const express = require('express');
const router = express.Router();
const { getVehiclesController, getVehicleByIdController, addVehicleController, updateVehicleController, deleteVehicleController } = require('../controllers/vehicleController');

router.get('/', getVehiclesController);
router.get('/:id', getVehicleByIdController);
router.post('/', addVehicleController);
router.put('/:id', updateVehicleController);
router.delete('/:id', deleteVehicleController);

module.exports = router;
