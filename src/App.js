import React, { Component } from 'react';
import InputLocation from "./Components/InputLocation"
import CurrentWeather from './Components/CurrentWeather'
import Forecast from './Components/Forecast'
import UVIndex from './Components/UVIndex'

class App extends Component {
  render() {
    return (
      <div className="App main-wrapper">
        <InputLocation />
        <CurrentWeather />
        <Forecast />
        <UVIndex />
      </div>
    );
  }
}

export default App;
