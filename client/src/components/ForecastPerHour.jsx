import React from "react";

import './ForecastPerHour.styles.css';

export default function ForecastPerHour({ forecast }) {
    const time = forecast.time.split('').slice(11);
    
    // gettin gthe current hour in 24 hour format
    const now = new Date().toLocaleTimeString('en-US', {hour12: false}).slice(0, 2);
    
    // removing the leading 0s
    const editedTime = time[0] === '0' && time[1] !== '0' ? time.slice(1) : time;
     
    // getting the first 2 numbers of the time to change the now hour to 'Now'
    const now2 = editedTime.slice(0, 2).join('');

    return (
        <div className="forecast">
            <p>{ now2 === now ? "Now" : editedTime}</p>
            <img src={forecast.condition.icon} alt="weather icon"/>
            <p>{Math.round(forecast.temp_c)}&deg;</p>
        </div>
    )
}