import React, { Component } from 'react';
import InputLocation from "./Components/InputLocation"
import CurrentWeather from './Components/CurrentWeather'
import Forecast from './Components/Forecast'

class App extends Component {
  render() {
    return (
      <div className="App main-wrapper">
        <InputLocation />
        <CurrentWeather />
        <Forecast />
      </div>
    );
  }
}

export default App;
