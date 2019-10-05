import React from 'react';

const InputLocation = () => {
  return(
    <div className="location-field-wrapper">
      <form className="location-form">
        <input className="location-input" type="text" placeholder="Enter City or Zip"></input>
        <button className="location-submit">Submit</button>
      </form>
    </div>
  )
}

export default InputLocation;