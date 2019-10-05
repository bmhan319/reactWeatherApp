import React from 'react';
import Sunny from "../sunny.png"

const CurrentWeather = () => {
  return(
    <div className="current-weather-wrapper">
      <div className="current-location-container">
        <p className="current-location">Redmond</p>
      </div>
      <div className="date-container">
        <p className="date">Mar 19, 1978</p>
      </div>
      <div className="weather-container">
          <div className="weather-row1">
            <img className="weather-icon" src={Sunny} />
            <span className="weather-temperature">40</span>
          </div>
          <div className="weather-row2">
            <span className="high-low">10&#176;/50&#176; </span>
            <span className="feels">Humidity: 16%</span>
          </div>
          <div className="weather-row3">
            <span className="condition">Sunny</span>
          </div>
        </div>
    </div>
  )
}

export default CurrentWeather;