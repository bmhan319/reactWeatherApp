import React, { Component } from 'react';
import InputLocation from "./Components/InputLocation"
import CurrentWeather from './Components/CurrentWeather'
import Forecast from './Components/Forecast'
import UVIndex from './Components/UVIndex'
import Details from './Components/Details'

class App extends Component {
  render() {
    return (
      <div className="App main-wrapper">
        <InputLocation />
        <CurrentWeather />
        <Forecast />
        <UVIndex />
        <Details />
      </div>
    );
  }
}

export default App;
