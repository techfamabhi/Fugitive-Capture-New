// app.js

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes'); // Import the index.js route
const cors = require('cors'); // Import the cors middleware

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors()); 
app.use(bodyParser.json());
app.use('/', routes); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
