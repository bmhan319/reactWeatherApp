import React from 'react'
import Sunny from '../sunny.png'

const Forecast = () => {
  return(
    <div className="forecast-wrapper">
        <p className="forecast-title">5-Day Forecast</p>
        <div className="forecast-container">
          <div className="forecast-col forecast-col1">
            <div className="forecast-day">Mon</div>
            <div className="forecast-icon">
              <img src={Sunny} alt="icon"/>
            </div>
            <div className="forecast-temp">20&#176;</div>
          </div>
          <div className="forecast-col forecast-col2">
            <div className="forecast-day">Tue</div>
            <div className="forecast-icon">
              <img src={Sunny} alt="icon"/>
            </div>
            <div className="forecast-temp">20&#176;</div>
          </div>
          <div className="forecast-col forecast-col3">
            <div className="forecast-day">Wed</div>
            <div className="forecast-icon">
              <img src={Sunny} alt="icon"/>
            </div>
            <div className="forecast-temp">20&#176;</div>
          </div>
          <div className="forecast-col forecast-col4">
            <div className="forecast-day">Thu</div>
            <div className="forecast-icon">
              <img src={Sunny} alt="icon"/>
            </div>
            <div className="forecast-temp">20&#176;</div>
          </div>
          <div className="forecast-col forecast-col5">
            <div className="forecast-day">Fri</div>
            <div className="forecast-icon">
              <img src={Sunny} alt="icon"/>
            </div>
            <div className="forecast-temp">20&#176;</div>
          </div>
        </div>
      </div>
  )
}

export default Forecast