let vehicles = [
  { id: '1', kind: 'EV Bike', range: 60, count: 2 },
  { id: '2', kind: 'EV Car', range: 100, count: 1 },
  { id: '3', kind: 'EV SUV', range: 120, count: 1 }
];

const getVehicles = () => vehicles;

const getVehicleById = (id) => vehicles.find(vehicle => vehicle.id === id);

const addVehicle = ({ kind, range, count }) => {
  const id = (vehicles.length + 1).toString(); // Generate id based on the current length of vehicles array
  vehicles.push({ id, kind, range, count });
};

const updateVehicle = (id, kind, range, count) => {
  // Check if the vehicle with the given ID exists
  const vehicleIndex = vehicles.findIndex(vehicle => vehicle.id === id);
  if (vehicleIndex === -1) {
    return false; // Vehicle not found
  }

  // Update the fields if provided
  if (kind !== undefined) {
    vehicles[vehicleIndex].kind = kind;
  }
  if (range !== undefined) {
    vehicles[vehicleIndex].range = range;
  }
  if (count !== undefined) {
    vehicles[vehicleIndex].count = count;
  }
  
  return true; // Vehicle updated successfully
};

const deleteVehicleById = (id) => {
  const initialLength = vehicles.length;
  vehicles = vehicles.filter(vehicle => vehicle.id !== id);
  return initialLength !== vehicles.length;
};

module.exports = { getVehicles, getVehicleById, addVehicle, updateVehicle, deleteVehicleById };

const getVehiclesController = (req, res) => {
  const vehicles = getVehicles();
  res.json(vehicles);
};

const getVehicleByIdController = (req, res) => {
  const { id } = req.params;
  const vehicle = getVehicleById(id);
  if (vehicle) {
    res.json(vehicle);
  } else {
    res.status(404).json({ error: 'Vehicle not found' });
  }
};

const addVehicleController = (req, res) => {
  const { kind, range, count } = req.body;
  if (!kind || !range || !count) {
    return res.status(400).json({ error: 'Please provide kind, range, and count' });
  }
  addVehicle({ kind, range, count });
  res.status(201).json({ message: 'Vehicle added successfully' });
};

const updateVehicleController = (req, res) => {
  const { id } = req.params;
  const { kind, range, count } = req.body;

  // Check if any of the fields are missing
  if (!kind && range === undefined && count === undefined) {
    return res.status(400).json({ error: 'Please provide at least one field to update' });
  }

  // Update the vehicle
  const updated = updateVehicle(id, kind, range, count);
  if (updated) {
    res.json({ message: 'Vehicle updated successfully' });
  } else {
    res.status(404).json({ error: 'Vehicle not found' });
  }
};

const deleteVehicleController = (req, res) => {
  const { id } = req.params;
  const deleted = deleteVehicleById(id);
  if (deleted) {
    res.json({ message: 'Vehicle deleted successfully' });
  } else {
    res.status(404).json({ error: 'Vehicle not found' });
  }
};

module.exports = { getVehiclesController, getVehicleByIdController, addVehicleController, updateVehicleController, deleteVehicleController };
