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
    icon: "01n",
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

    // If user inputs a zip
    if (patternNum.test(city)) {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${city},us&APPID=${API_KEY}&units=imperial`)
      const api_zip_forecast = await fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${city},US&APPID=${API_KEY}&units=imperial`)
      const zipData = await api_call.json()
      const zipForecast = await api_zip_forecast.json()
      const uvIndex = await fetch(`http://api.openweathermap.org/data/2.5/uvi?appid=${API_KEY}&lat=${zipData.coord.lat}&lon=${zipData.coord.lon}`)
      const uvData = await uvIndex.json()
      this.getTimeZone(zipData.timezone)
      console.log(zipForecast)

      this.setState({
        location: zipData.name,
        icon: zipData.weather[0].icon,
        alt: zipData.weather[0].description,
        date: moment().utcOffset(this.getTimeZone(zipData.timezone)).format("dddd MMMM D h:mmA"),
        temp: Math.floor(zipData.main.temp),
        hi: Math.floor(zipData.main.temp_max),
        low: Math.floor(zipData.main.temp_min),
        humidity: Math.floor(zipData.main.humidity),
        condition: (zipData.weather[0].description)[0].toUpperCase() + (zipData.weather[0].description).slice(1),
        uvColor: this.getUV(uvData.value)[0],
        uvLevel: this.getUV(uvData.value)[1],
        day1: [moment(new Date(zipForecast.list[4].dt_txt)).format("ddd"), zipForecast.list[4].weather[0].icon, Math.floor(zipForecast.list[4].main.temp)],
        day2: [moment(new Date(zipForecast.list[12].dt_txt)).format("ddd"), zipForecast.list[12].weather[0].icon, Math.floor(zipForecast.list[12].main.temp)],
        day3: [moment(new Date(zipForecast.list[20].dt_txt)).format("ddd"), zipForecast.list[20].weather[0].icon, Math.floor(zipForecast.list[20].main.temp)],
        day4: [moment(new Date(zipForecast.list[28].dt_txt)).format("ddd"), zipForecast.list[28].weather[0].icon, Math.floor(zipForecast.list[28].main.temp)],
        day5: [moment(new Date(zipForecast.list[36].dt_txt)).format("ddd"), zipForecast.list[36].weather[0].icon, Math.floor(zipForecast.list[36].main.temp)],
        sunrise:this.convertUTC(zipData.sys.sunrise, this.getTimeZone(zipData.timezone)),
        sunset:this.convertUTC(zipData.sys.sunset, this.getTimeZone(zipData.timezone)),
        pressure:zipData.main.pressure,
        wind:zipData.wind.speed,
        timezone:zipData.timezone,
      })
    } else if (patternABC.test(city)) {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`)
      const api_forecast = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}&units=imperial`)
      const weatherData = await api_call.json()
      const forecastData = await api_forecast.json()
      const uvIndex = await fetch(`http://api.openweathermap.org/data/2.5/uvi?appid=${API_KEY}&lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}`)
      const uvData = await uvIndex.json()
      console.log(weatherData)
      console.log(forecastData)
      console.log(uvData)

      this.setState ({
        location: weatherData.name,
        icon: weatherData.weather[0].icon,
        alt: weatherData.weather[0].description,
        date: moment().utcOffset(this.getTimeZone(weatherData.timezone)).format("dddd MMMM D h:mmA"),
        temp: Math.floor(weatherData.main.temp),
        hi: Math.floor(weatherData.main.temp_max),
        low: Math.floor(weatherData.main.temp_min),
        humidity: Math.floor(weatherData.main.humidity),
        condition: (weatherData.weather[0].description)[0].toUpperCase() + (weatherData.weather[0].description).slice(1),
        uvColor: this.getUV(uvData.value)[0],
        uvLevel: this.getUV(uvData.value)[1],
        day1: [moment(new Date(forecastData.list[4].dt_txt)).format("ddd"), forecastData.list[4].weather[0].icon, Math.floor(forecastData.list[4].main.temp)],
        day2: [moment(new Date(forecastData.list[12].dt_txt)).format("ddd"), forecastData.list[12].weather[0].icon, Math.floor(forecastData.list[12].main.temp)],
        day3: [moment(new Date(forecastData.list[20].dt_txt)).format("ddd"), forecastData.list[20].weather[0].icon, Math.floor(forecastData.list[20].main.temp)],
        day4: [moment(new Date(forecastData.list[28].dt_txt)).format("ddd"), forecastData.list[28].weather[0].icon, Math.floor(forecastData.list[28].main.temp)],
        day5: [moment(new Date(forecastData.list[36].dt_txt)).format("ddd"), forecastData.list[36].weather[0].icon, Math.floor(forecastData.list[36].main.temp)],
        sunrise:this.convertUTC(weatherData.sys.sunrise, this.getTimeZone(weatherData.timezone)),
        sunset:this.convertUTC(weatherData.sys.sunset, this.getTimeZone(weatherData.timezone)),
        pressure:weatherData.main.pressure,
        wind:weatherData.wind.speed,
        timezone:weatherData.timezone,
      })
    } else {
      alert("Please enter a valid City or ZipCode.")
    }
  }

  render() {
    return (
      <div className="App main-wrapper">
        <InputLocation getWeather={this.getWeather} />
        <CurrentWeather state={this.state}/>
        <Forecast state={this.state}/>
        <UVIndex state={this.state}/>
        <Details state={this.state}/>
      </div>
    );
  }
}

export default App;
