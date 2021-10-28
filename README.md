# Eat-the-World

App detailing the different foods of the world.

Where users can search and select or randomly generate any country, listing the country's national dishes.

Dishes can be added or removed from the users favorites, with each dish info page listing recipes for each dish and places nearby that the user can buy or eat the food.

Made mobile first, as a pwa.

To run the project :

- Make sure to run npm i in both the client and the server folder to install required dependencies.
- In the server folder, run node/nodemon index.js and the server will run on port 3001.
- In the client and the server folders, you will need to create a .env file to host the Google Maps API: REACT_APP_GOOGLE_MAPS_API_KEY=yourkey

  - no API key required for wikipedia

- Map at the beginnning is generated using react-leaflet.
- Map at the back is generated using Google Maps API.

- Hope you enjoy the app and eating the world, any feedback/PR is appreciated !
