import React from 'react';

const InputLocation = (props) => {
  return(
    <div className="location-field-wrapper">
      <form className="location-form" onSubmit={props.getWeather}>
        <input className="location-input" name="city" type="text" placeholder="Enter City or Zip"></input>
        <button className="location-submit">Submit</button>
      </form>
    </div>
  )
}

export default InputLocation;