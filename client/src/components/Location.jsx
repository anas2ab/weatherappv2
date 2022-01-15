import React from "react";

// styles
import './Location.styles.css';

export default function Location({ location }) {
    return (
        <div className="location-container">
            <p>{location.name},&nbsp;</p>
            <p>{location.country}</p>
        </div>
    )
}