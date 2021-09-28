const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const router = require('./router');
const PORT = 3002;
require('dotenv').config();

//cors
app.use(cors());

//parser
app.use(express.json());

//router
app.use(router);

//listen
app.listen(PORT, (err) => {
  if (err) return console.log(err);
  console.log('Server is bloody running!');
});

// const url  = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&types=restaurant&radius=${distance}&keyword=${selectedCuisine}, &key=${API_KEY}`;
//         const radius = '&radius=200';
//         const type = '&keyword=restaurant';
//         const key = `&key=${}`;
//         const location = `location=${41.38},${2.16}`;
//         const query = 
//         const restaurantSearchUrl = url + location + radius + type + key;
// const selectedCuisine = "kasha";
//             const restaurantSearchUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=41.38,2.16&types=restaurant&radius=1000&keyword=${selectedCuisine},&key=AIzaSyAbpBqhALOEsOigk-onT4ELt8FGvbM8zZQ`
//         axios.get(restaurantSearchUrl)
//         .then((res) => console.log(res.data.results))