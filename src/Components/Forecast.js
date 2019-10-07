import React from 'react'

const Forecast = (props) => {
  return(
    <div className="forecast-wrapper">
        <p className="forecast-title text-color">5-Day Forecast</p>
        <div className="forecast-container">
          <div className="forecast-col forecast-col1">
            <div className="forecast-day">{props.state.day1[0]}</div>
            <div className="forecast-icon">
              <img src={`https://openweathermap.org/img/wn/${props.state.day1[1]}.png`} alt="icon"/>
            </div>
            <div className="forecast-temp">{props.state.day1[2]}&#176;</div>
          </div>
          <div className="forecast-col forecast-col2">
            <div className="forecast-day">{props.state.day2[0]}</div>
            <div className="forecast-icon">
              <img src={`https://openweathermap.org/img/wn/${props.state.day2[1]}.png`} alt="icon"/>
            </div>
            <div className="forecast-temp">{props.state.day2[2]}&#176;</div>
          </div>
          <div className="forecast-col forecast-col3">
            <div className="forecast-day">{props.state.day3[0]}</div>
            <div className="forecast-icon">
              <img src={`https://openweathermap.org/img/wn/${props.state.day3[1]}.png`} alt="icon"/>
            </div>
            <div className="forecast-temp">{props.state.day3[2]}&#176;</div>
          </div>
          <div className="forecast-col forecast-col4">
            <div className="forecast-day">{props.state.day4[0]}</div>
            <div className="forecast-icon">
              <img src={`https://openweathermap.org/img/wn/${props.state.day4[1]}.png`} alt="icon"/>
            </div>
            <div className="forecast-temp">{props.state.day4[2]}&#176;</div>
          </div>
          <div className="forecast-col forecast-col5">
            <div className="forecast-day">{props.state.day5[0]}</div>
            <div className="forecast-icon">
              <img src={`https://openweathermap.org/img/wn/${props.state.day5[1]}.png`} alt="icon"/>
            </div>
            <div className="forecast-temp">{props.state.day5[2]}&#176;</div>
          </div>
        </div>
      </div>
  )
}

export default Forecast