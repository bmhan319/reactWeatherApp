import React, { Component } from 'react';
import InputLocation from "./Components/InputLocation"
import CurrentWeather from './Components/CurrentWeather'

class App extends Component {
  render() {
    return (
      <div className="App main-wrapper">
        <InputLocation />
        <CurrentWeather />
      </div>
    );
  }
}

export default App;
