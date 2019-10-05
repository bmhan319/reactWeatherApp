import React from 'react';

const CurrentWeather = (props) => {
  return(
    <div className="current-weather-wrapper hide">
      <div className="current-location-container">
        <p className="current-location">{props.state.location}</p>
      </div>
      <div className="date-container">
        <p className="date text-color">{props.state.date}</p>
      </div>
      <div className="weather-container">
          <div className="weather-row1">
            <img className="weather-icon" src={`https://openweathermap.org/img/wn/${props.state.icon}@2x.png`} alt={props.state.alt} />
            <span className="weather-temperature">{props.state.temp}</span>
          </div>
          <div className="weather-row2">
            <span className="high-low text-color">{props.state.hi}&#176;/{props.state.low}&#176; </span>
            <span className="feels text-color">Humidity: {props.state.humidity}%</span>
          </div>
          <div className="weather-row3">
            <span className="condition">{props.state.condition}</span>
          </div>
        </div>
    </div>
  )
}

export default CurrentWeather;