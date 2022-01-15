require('dotenv').config();

const path = require("path");
const express = require("express");
const axios = require('axios');

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.join(__dirname, '../client/build')));

// env variables
const PORT = process.env.PORT || 3001;
const KEY = process.env.KEY;

const BASE_URL = `http://api.weatherapi.com/v1/forecast.json?key=${KEY}`;

async function getCurrentWeather(url, city="&q=N5W", days="&days=3") {
  url = url + city + days;
  const config = {
    method: 'get',
    url: url
  }

  let res = await axios(config);

  let data = res.data;
  
  return data;
}

app.get("/api", async (req, res) => {
  try {
    const param = req.query.q ? req.query.q : 'N5W'; // getting the parameter
    const city = '&q=' + param; // adding the query syntax
    const data = await getCurrentWeather(BASE_URL, city);
    
    return res.status(200).send(data);
  } catch (err) {
    console.log('Input only accepts the following: city, US zip code, UK/Canada post code (ex. SW1)');
  }
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});