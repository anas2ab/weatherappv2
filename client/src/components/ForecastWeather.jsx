import React from "react";

// styles
import './ForecastWeather.styles.css';

export default function ForecastWeather({ forecast }) {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const day = weekday[new Date(forecast.date).getDay()];
    return (
        <div className="three-day-forecast-container">
            <div>
            <p>{day}</p>
            <img src={forecast.day.condition.icon} alt="weather icon"/>
            <div className="high-low">
            <p>L: {Math.round(forecast.day.mintemp_c)}&deg;&nbsp;</p>
            <p>H: {Math.round(forecast.day.maxtemp_c)}&deg;</p>
            </div>
            </div>
            
             
        </div>


    )
}