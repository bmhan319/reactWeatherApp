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

  //convert API timezone(in milliseconds) to hours to find offset from GMT
  getTimeZone = (tz) => {
    let timezone = tz / 3600
    return timezone
  }

  //converting API UV Index number to colors and levels
  getUV = (uv) => {
    if (uv >= 0 && uv < 3) {
      return ["green","Low"]
    } else if (uv >= 3 && uv < 6 )  {
      return ["yellow","Moderate"]
    } else if (uv >= 6 && uv < 8 )  {
      return ["orange","High"]
    } else if (uv >= 8 && uv < 11 )  {
      return ["red","Very High"]
    } else if (uv >= 11)  {
      return ["violet","Extreme"]
    }
  }

  //converting UTC time into local time for selected city
  //utcTime is UTC time from API
  //offset is number generated from getTimeZone()
  convertUTC = (utcTime,offset) => {
    let localTime = moment(new Date(utcTime * 1000)).utcOffset(offset).format("h:mm A")
    return localTime
  }

  getWeather = async (event) => {
    event.preventDefault()    //prevents button from reloading page
    const city = event.target.elements.city.value
    const patternNum = new RegExp(/^\d{5}$/)
    const patternABC = new RegExp(/^[A-Za-z]+$/)
    
    //reset the input value
    document.querySelector(".location-input").value = ""

    if (patternNum.test(city)) {
      console.log("zip")
    } else if (patternABC.test(city)) {
      console.log("city")
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
