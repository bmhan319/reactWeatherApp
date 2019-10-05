import React, { Component } from 'react';
import moment from 'moment'
import InputLocation from "./Components/InputLocation"
import CurrentWeather from './Components/CurrentWeather'
import Forecast from './Components/Forecast'
import UVIndex from './Components/UVIndex'
import Details from './Components/Details'

const API_KEY = process.env.REACT_APP_API_KEY

class App extends Component {
  state = {
    location: undefined,
    icon: undefined,
    alt: undefined,
    date: moment(new Date()).format("dddd MMMM D h:mmA"),
    temp: undefined,
    hi: undefined,
    low: undefined,
    humidity: undefined,
    condition: undefined,
    uvColor: undefined,
    uvLevel:undefined,
    day1: [],
    day2: [],
    day3: [],
    day4: [],
    day5: [],
    sunrise: undefined,
    sunset: undefined,
    pressure: undefined,
    wind: undefined,
    timezone: undefined,
    error: undefined,
    userLat: undefined,
    userLon: undefined,
  }

  getWeather = async (event) => {
    event.preventDefault() 
    const city = event.target.elements.city.value
    const patternNum = new RegExp(/[0-9]/)
    const patternABC = new RegExp(/[abc]/)
    
    document.querySelector(".location-input").value = ""

    if (patternNum.test(city) && (city.length === 5)) {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${city},us&APPID=${API_KEY}&units=imperial`)
      const api_zip_forecast = await fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${city},US&APPID=${API_KEY}&units=imperial`)
      let zipData = await api_call.json()
      let zipForecast = await api_zip_forecast.json()
      console.log(zipData)
      console.log(zipForecast)
    } else if (patternABC.test(city)) {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`)
      const api_forecast = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}&units=imperial`)
      const weatherData = await api_call.json()
      const forecastData = await api_forecast.json()
      console.log(weatherData)
      console.log(forecastData)
    } else {
      console.log("Please enter a valid City or ZipCode.")
    }
  }

  render() {
    return (
      <div className="App main-wrapper">
        <InputLocation getWeather={this.getWeather} />
        <CurrentWeather />
        <Forecast />
        <UVIndex />
        <Details />
      </div>
    );
  }
}

export default App;
