import React from "react";
import TodaysForecast from "./TodaysForecast";
import ForecastWeather from "./ForecastWeather";

//styles 
import './CurrentWeather.styles.css';

export default function CurrentWeather({ current, today, forecast }) {
    return (
        <div>
            <div className="current-weather-container">
                <div className="main-info-container">
                    <h1>{Math.round(current.temp_c)}&deg;</h1>

                    
                </div>
                <div className="description">
                    {current.condition.text}
                </div>
            </div>
            <TodaysForecast today={today}/>
            <div className="forecast-container">
            {
            forecast.map((day, i) => {
                return <ForecastWeather key={i} forecast={day} />
                
            })
            }
            </div>
            <div className="day-stats-container">
                <div className="wind-container individual-boxes">
                    <p>wind:</p>
                    <h1>{Math.round(current.wind_mph)} mph</h1>
                </div>
                <div className="individual-boxes">
                    <p>feels like:</p>
                    <h1>{Math.round(current.feelslike_c)}&deg;</h1>
                </div>
                <div className="individual-boxes">
                    <p>precipitation:</p>
                    <h1>{current.precip_mm} mm</h1>
                </div>
                <div className="individual-boxes">
                    <p>humidity:</p>
                    <h1>{current.humidity}%</h1>
                </div>
                <div className="individual-boxes">
                    <p>uv:</p>
                    <h1>{current.uv}</h1>
                </div>
                <div className="individual-boxes">
                    <p>pressure:</p>
                    <h1>{current.pressure_mb} hPa</h1>
                </div>
                <div className="individual-boxes">
                    <p>wind_dir:</p>
                    <h1>{current.wind_dir}</h1>
                </div>
                <div className="individual-boxes">
                    <p>visibility:</p>
                    <h1>{current.vis_km} km</h1>
                </div>
            </div>
        </div>
    )
}