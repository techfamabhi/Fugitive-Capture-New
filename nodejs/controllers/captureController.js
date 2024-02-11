const { cities } = require('./cityController');
const { vehicles } = require('./vehicleController');

// Function to simulate capture and determine if any cop successfully captures the fugitive
function simulateCapture(req, res) {
  const { copSelections } = req.body;
  
  // Simulate fugitive's location
  const randomCityIndex = Math.floor(Math.random() * cities.length);
  const fugitiveLocation = cities[randomCityIndex];
  
  // Check if any cop successfully captures the fugitive
  const capturedCop = checkCapture(copSelections, fugitiveLocation);
  
  if (capturedCop) {
    res.status(200).json({ message: `${capturedCop} successfully captured the fugitive in ${fugitiveLocation.name}.` });
  } else {
    res.status(404).json({ message: 'The fugitive escaped!' });
  }
}

// Function to determine if any cop successfully captures the fugitive
function checkCapture(copSelections, fugitiveLocation) {
  for (const cop of copSelections) {
    const vehicle = vehicles.find(v => v.type === cop.vehicle);
    const distance = cities.find(c => c.name === cop.city).distance;
    if (vehicle.range >= distance && cop.city === fugitiveLocation.name) {
      return cop.name; // Successfully captured
    }
  }
  return null; // Fugitive not captured
}

module.exports = { simulateCapture };
