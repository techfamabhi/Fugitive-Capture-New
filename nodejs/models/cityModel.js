
let cities = [
  { id:'1',name: 'Yapkashnagar', distance: 60 },
  { id:'2',name: 'Lihaspur', distance: 50 },
  { id:'3',name: 'Narmis City', distance: 40 },
  { id:'4',name: 'Shekharvati', distance: 30 },
  { id:'5',name: 'Nuravgram', distance: 20 }
];

const getCities = () => cities;

const getCityById = (id) => cities.find(city => city.id === id);

const addCity = ({ name, distance }) => {
const id = (cities.length + 1).toString(); // Generate id based on the current length of cities array
cities.push({ id, name, distance });
};

const updateCityDistance = (id, name, distance) => {
const city = getCityById(id);
if (city) {
  if (name !== undefined) {
    city.name = name;
  }
  if (distance !== undefined) {
    city.distance = distance;
  }
  return true;
}
return false;
};

const deleteCityById = (id) => {
const initialLength = cities.length;
cities = cities.filter(city => city.id !== id);
return initialLength !== cities.length;
};

module.exports = { getCities, getCityById, addCity, updateCityDistance, deleteCityById };
