import React, { Component } from 'react';
import moment from 'moment'
import InputLocation from "./Components/InputLocation"
import CurrentWeatherEmpty from "./Components/CurrentWeatherEmpty"
import CurrentWeather from './Components/CurrentWeather'
import Forecast from './Components/Forecast'
import UVIndex from './Components/UVIndex'
import Details from './Components/Details'

const API_KEY = process.env.REACT_APP_API_KEY

class App extends Component {
  state = {
    location: undefined,
    icon: "01d",
    alt: undefined,
    date: moment(new Date()).format("dddd MMMM D h:mmA"),
    temp: undefined,
    hi: 70,
    low: 70,
    humidity: 0,
    condition: undefined,
    uvColor: "green",
    uvLevel: "Low",
    day1: ["Sun","01d","70"],
    day2: ["Mon","01d","70"],
    day3: ["Tue","01d","70"],
    day4: ["Wed","01d","70"],
    day5: ["Thu","01d","70"],
    sunrise: "6AM",
    sunset: "6PM",
    pressure: 0,
    wind: 0,
    timezone: undefined,
    error: undefined,
    userLat: undefined,
    userLon: undefined,
  }

  //determine if it's day or night
  isDay = (time) => {
    let split = time.split(",")
    const wrapper = document.querySelector(".main-wrapper")
    const textColor = document.querySelectorAll(".text-color")

    if (split[0] === "12" && split[1] === "AM") {
      wrapper.classList.add("night-bg")
      wrapper.classList.remove("day-bg")
      textColor.forEach((el)=> {
        el.classList.add("text-night")
        el.classList.remove("text-day")
      })
      return "night"
    } else if ( (split[0] >= 6  && split[0] <= 11 && split[1] === "PM") || (split[0] <= 6 && split[1] === "AM") ) {
      wrapper.classList.add("night-bg")
      wrapper.classList.remove("day-bg")
      textColor.forEach((el)=> {
        el.classList.add("text-night")
        el.classList.remove("text-day")
      })
      return "night"
    }  else {
      wrapper.classList.add("day-bg")
      wrapper.classList.remove("night-bg")
      textColor.forEach((el)=> {
        el.classList.add("text-day")
        el.classList.remove("text-night")
      })
      return "day"
    }

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


  //getting consistent daytime forecast at 3PM each day in every city
  getForecast = (apiData) => {
    const list = apiData.list
    const filter = list.filter((el) => {
      return  (el.dt_txt.split(" "))[1] === "15:00:00" 
    })
    return filter
  }

  getWeather = async (event) => {
    try{
    event.preventDefault()    //prevents button from reloading page
    const city = event.target.elements.city.value
    const patternNum = new RegExp(/^\d{5}$/)
    const patternABC = new RegExp(/^[A-Za-z]+$/)
    const emptyWeather = document.querySelector(".current-weather-empty-wrapper")
    const currentWeather = document.querySelector(".current-weather-wrapper")
    
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
      const timeOfDay= (moment().utcOffset(this.getTimeZone(zipData.timezone)).format("h,A"))
      this.isDay(timeOfDay)
      const trueForecast = this.getForecast(zipForecast)

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
        day1: [moment(new Date(trueForecast[0].dt_txt)).format("ddd"), trueForecast[0].weather[0].icon, Math.floor(trueForecast[0].main.temp)],
        day2: [moment(new Date(trueForecast[1].dt_txt)).format("ddd"), trueForecast[1].weather[0].icon, Math.floor(trueForecast[1].main.temp)],
        day3: [moment(new Date(trueForecast[2].dt_txt)).format("ddd"), trueForecast[2].weather[0].icon, Math.floor(trueForecast[2].main.temp)],
        day4: [moment(new Date(trueForecast[3].dt_txt)).format("ddd"), trueForecast[3].weather[0].icon, Math.floor(trueForecast[3].main.temp)],
        day5: [moment(new Date(trueForecast[4].dt_txt)).format("ddd"), trueForecast[4].weather[0].icon, Math.floor(trueForecast[4].main.temp)],
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
      const timeOfDay = (moment().utcOffset(this.getTimeZone(weatherData.timezone)).format("h,A"))
      this.isDay(timeOfDay)
      const trueForecast = this.getForecast(forecastData)

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
        day1: [moment(new Date(trueForecast[0].dt_txt)).format("ddd"), trueForecast[0].weather[0].icon, Math.floor(trueForecast[0].main.temp)],
        day2: [moment(new Date(trueForecast[1].dt_txt)).format("ddd"), trueForecast[1].weather[0].icon, Math.floor(trueForecast[1].main.temp)],
        day3: [moment(new Date(trueForecast[2].dt_txt)).format("ddd"), trueForecast[2].weather[0].icon, Math.floor(trueForecast[2].main.temp)],
        day4: [moment(new Date(trueForecast[3].dt_txt)).format("ddd"), trueForecast[3].weather[0].icon, Math.floor(trueForecast[3].main.temp)],
        day5: [moment(new Date(trueForecast[4].dt_txt)).format("ddd"), trueForecast[4].weather[0].icon, Math.floor(trueForecast[4].main.temp)],
        sunrise:this.convertUTC(weatherData.sys.sunrise, this.getTimeZone(weatherData.timezone)),
        sunset:this.convertUTC(weatherData.sys.sunset, this.getTimeZone(weatherData.timezone)),
        pressure:weatherData.main.pressure,
        wind:weatherData.wind.speed,
        timezone:weatherData.timezone,
      })
    } else {
      alert("Please enter a valid City or ZipCode.")
    }

    emptyWeather.classList.add("hide")
    currentWeather.classList.remove("hide")
    }
    catch(err) {
      alert("Please enter in a correct city name or zip!")
    }
  }

  render() {
    return (
      <div className="App main-wrapper">
        <InputLocation getWeather={this.getWeather} />
        <CurrentWeatherEmpty />
        <CurrentWeather state={this.state}/>
        <Forecast state={this.state}/>
        <UVIndex state={this.state}/>
        <Details state={this.state}/>
      </div>
    );
  }
}

export default App;
