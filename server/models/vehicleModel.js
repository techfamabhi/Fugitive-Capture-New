

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
  const vehicle = getVehicleById(id);
  if (vehicle) {
    if (kind !== undefined) {
      vehicle.kind = kind;
    }
    if (range !== undefined) {
      vehicle.range = range;
    }
    if (count !== undefined) {
      vehicle.count = count;
    }
    return true;
  }
  return false;
};




const deleteVehicleById = (id) => {
  const initialLength = vehicles.length;
  vehicles = vehicles.filter(vehicle => vehicle.id !== id);
  return initialLength !== vehicles.length;
};

module.exports = { getVehicles, getVehicleById, addVehicle, updateVehicle, deleteVehicleById };
