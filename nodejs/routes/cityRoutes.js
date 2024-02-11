
const express = require('express');
const router = express.Router();
const { getAllCities, getCity, createCity, updateCity, deleteCity } = require('../controllers/cityController');

router.get('/', getAllCities);
router.get('/:id', getCity);
router.post('/', createCity);
router.put('/:id', updateCity);
router.delete('/:id', deleteCity);

module.exports = router;
