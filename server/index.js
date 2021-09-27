const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router');
const PORT = 3002;

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

// const url  = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'
//         const radius = '&radius=2000';
//         const type = '&keyword=restaurant';
//         const key = `&key=${}`;
//         // const location = `location=${41.38},${2.16}`;
//         const query = 
//         const restaurantSearchUrl = url + location + radius + type + key;
//         axios.get(restaurantSearchUrl)
//         .then((res) => console.log(res.data.results))