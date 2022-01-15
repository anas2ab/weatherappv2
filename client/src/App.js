// client/src/App.js

import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import Location from "./components/Location";



function App() {
  const [cityName, setCityName] = useState('');
  const [location, setLocation] = useState([]);
  const [currentWeather, setCurrentWeather] = useState([]);
  const [forecastWeather, setForecastWeather] = useState([]);
  const [today, setToday] = useState([]);

  // setting the URL
  const url = cityName === '' ? 'http://localhost:3000/api' : 'http://localhost:3000/api?q=' + cityName;
  
  const fetchWeather = async () => {
    try {
      const res = await axios.get(url);
      
      const loc = res.data.location;
      const current = res.data.current;
      const forecast = res.data.forecast.forecastday;
      const today = res.data.forecast.forecastday[0];
      
      
      setLocation(loc);
      setCurrentWeather(current);
      setForecastWeather(forecast);
      setToday(today);

    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  const handleChange = (e) => {
    setCityName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  }


  return (
    <div className="App">
        <div className="search-box-container">
          <form onSubmit={handleSubmit}>
              <input
                  type="text"
                  placeholder="City"
                  onChange={handleChange}
                  value={cityName}
              />
              
          </form>
        </div>

        <Location location={location} />
        {currentWeather.condition ? <CurrentWeather current={currentWeather} today={today} forecast={forecastWeather} /> : <p>loading...</p>} 

    </div> 
  );
}

export default App;