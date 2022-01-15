import React from "react";
import ForecastPerHour from "./ForecastPerHour";

import './TodaysForecast.styles.css';

export default function TodaysForecast({ today }) {
    if(today.astro === undefined) return <div></div>;
    return (
        <div className="hourly-forecast-container">
            {/* <p>{today.astro.sunrise}</p>
            <p>{today.astro.sunset}</p> */}
            {today.hour.map((hour, i) => {
                return <div key={i}>
                <ForecastPerHour forecast={hour} />
                </div>
            })} 
        </div> 
    );
}