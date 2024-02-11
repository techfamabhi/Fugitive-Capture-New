
const { getCities, getCityById, addCity, updateCityDistance, deleteCityById } = require('../models/cityModel');

const getAllCities = (req, res) => {
    const cities = getCities();
    res.json(cities);
};

const getCity = (req, res) => {     
    const { id } = req.params;
    const city = getCityById(id);
    if (city) {
        res.json(city);
    } else {
        res.status(404).json({ error: 'City not found' });
    }
};

const createCity = (req, res) => {
    const { name, distance } = req.body;
    if (!name || !distance) {
        return res.status(400).json({ error: 'Name and distance are required' });
    }

    addCity({ name, distance });
    res.status(201).json({ message: 'City added successfully' });
};

const updateCity = (req, res) => {
    const { id } = req.params;
    const { name, distance } = req.body;
    const updated = updateCityDistance(id, name, distance);
    if (updated) {
        res.json({ message: 'City distance updated successfully' });
    } else {
        res.status(404).json({ error: 'City not found' });
    }
};

const deleteCity = (req, res) => {
    const { id } = req.params;
    const deleted = deleteCityById(id);
    if (deleted) {
        res.json({ message: 'City deleted successfully' });
    } else {
        res.status(404).json({ error: 'City not found' });
    }
};

module.exports = { getAllCities, getCity, createCity, updateCity, deleteCity };
