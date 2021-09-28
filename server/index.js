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