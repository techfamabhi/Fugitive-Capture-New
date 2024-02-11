# Node.js Project README

# Project Title: 
Simple Express Server


# Brief Description:
The Simple Express Server project is a basic Node.js application that sets up an Express server with middleware for parsing request bodies, enabling CORS, and auto-restarting the server during development using Nodemon.
# Features Implemented:

1 - Cops Selection: Users can select different cops, each represented by a unique ID, name, and options to select a city and a vehicle.
2 - City and Vehicle Selection: Each cop can select only one city and one vehicle. The available options for cities and vehicles are fetched from the server.
3 - Game Logic: The application includes game logic to simulate the capture of a fugitive. If a cop selects the correct city and vehicle where the fugitive is located, they successfully capture the fugitive.
4 - Form Validation: Form validation ensures that users must select both a city and a vehicle for each cop before submitting the form.
5 - Capture Status: After submitting the form, the application displays the capture status, indicating whether the fugitive was successfully captured or not.

# Getting Started with Nodejs
first step install 

1- create one folder
2 - install = npm install 



# In the project you can run using 

### `node app.js`

using this command we can run node js project



# features

1- User Dynamically Add and Select new City and New Vehicle  : Users can dynamically select cities and vehicles for each officer from dropdown menus.
2 - Exclusive Selection: Each law enforcement officer (cop) can select only one city and only one vehicle. Additionally, every cop must select a different city or vehicle, ensuring diversity in choices among officers. This exclusivity prevents duplication of selections and encourages strategic planning among players.

3 - Validation: Validation ensures that users must select both a city and a vehicle for each officer before submitting their choices.

4 - Randomized Fugitive Simulation: The game simulates a fugitive's location and vehicle, adding an element of randomness to the gameplay.

5 - Capture Status Check: After submitting choices, the game checks if any officer successfully captures the fugitive based on their selected city and vehicle.

6 - Alerts: Alerts notify users of incomplete selections or the success/failure of capturing the fugitive.

# Dependencies:

body-parser: Middleware for parsing incoming request bodies in a middleware before handlers.
cors: Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express applications.
express: Fast, unopinionated, minimalist web framework for Node.js.
nodemon: Utility that monitors for changes in your source code and automatically restarts the server.
Installation:

# To install the project dependencies, run the following command:

1 - npm install body-parser cors express nodemon

2 - node app.js   --  using this command we can run node js project

This command will install all the dependencies listed in the package.json file: body-parser, cors, express, and nodemon.




License:
This project is licensed under the MIT License.

