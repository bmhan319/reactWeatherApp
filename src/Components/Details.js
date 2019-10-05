import React from 'react'

const Details = () => {
  return(
     <div className="details-wrapper">
        <p className="daily-title">Details</p>
        <div className="details-container">
          <div className="details-row">
            <div className="details-icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48">
                <path fill="#FFEB3B" d="M24,27c-6.077,0-11,4.923-11,11h22C35,31.923,30.076,27,24,27z"/>
                <path fill="#1976D2" d="M3 38H45V42H3z"/>
                <path fill="#2196F3" d="M26 13L26 18 22 18 22 13 18 13 24 6 30 13z"/>
              </svg>
            </div>
            <div className="details-title-container">
              <p className="details-title">Sunrise: </p>
              <p className="details-data">6:00AM</p>
            </div>
          </div>
          <div className="details-row">
            <div className="details-icon-container">
              <svg className="sunset-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48">
                <path fill="#FF9800" d="M24,27c-6.077,0-11,4.923-11,11h22C35,31.923,30.076,27,24,27z"/>
                <path fill="#1976D2" d="M3 38H45V42H3z"/>
                <path fill="#2196F3" d="M26 11L26 6 22 6 22 11 18 11 24 18 30 11z"/>
              </svg>
            </div>
            <div className="details-title-container">
              <p className="details-title">Sunset: </p>
              <p className="details-data">6:00PM</p>
            </div>
          </div>
          <div className="details-row">
            <div className="details-icon-container">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                <path fill="#fff" d="M20,21.527V4.006C20,1.793,18.205,0,16,0c-2.209,0-4,1.787-4,4.006v17.521
                  c-1.228,1.099-2,2.696-2,4.473c0,3.312,2.687,6,6,6c3.312,0,6-2.688,6-6C22,24.223,21.229,22.626,20,21.527z M16,30
                  c-2.209,0-4-1.791-4-4c0-1.48,0.805-2.773,2-3.465V4.005C14,2.897,14.896,2,16,2c1.111,0,2,0.897,2,2.005v18.53
                  c1.195,0.691,2,1.984,2,3.465C20,28.209,18.209,30,16,30z"/>
                <path fill="red" d="M16.986,23.166C16.996,23.115,17,23.062,17,23.009v-4.018C17,18.443,16.557,18,16,18
                  c-0.553,0-1,0.451-1,0.991v4.018c0,0.054,0.004,0.106,0.013,0.157C13.841,23.574,13,24.689,13,26c0,1.657,1.343,3,3,3s3-1.343,3-3
                  C19,24.689,18.159,23.574,16.986,23.166z"/>
              </svg>
            </div>
            <div className="details-title-container">
              <p className="details-title">Pressure: </p>
              <p className="details-data">900 hPa</p>
            </div>
          </div>
          <div className="details-row">
            <div className="details-icon-container">
              <svg fill="#fff" width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M30,14 C30,11.790861 28.2046438,10 26,10 C23.790861,10 22,11.7894101 22,14 L23,14 C23,12.3431458 24.3465171,11 26,11 C27.6568542,11 29,12.3465171 29,14 C29,15.6568542 27.6568766,17 25.9920699,17 L3,17 L3,18 L26.0015293,18 C28.2098237,18 30,16.2046438 30,14 L30,14 Z M21,13 C21,11.3431458 19.6534829,10 18,10 C16.3431458,10 15,11.3420576 15,12.991394 L15,13 L16,13 C16,11.8954305 16.8877296,11 18,11 C19.1045695,11 20,11.8877296 20,13 C20,14.1045695 19.1029399,15 17.9941413,15 L6,15 L6,16 L18.0005775,16 C19.6571128,16 21,14.6534829 21,13 L21,13 Z M25,21 C25,22.1045695 24.1122704,23 23,23 L23,23 C21.8954305,23 21,22.1052949 21,21.0057373 L21,21 L22,21 C22,21.5522847 22.4438648,22 23,22 L23,22 C23.5522847,22 24,21.5561352 24,21 L24,21 C24,20.4477153 23.5510798,20 22.992516,20 L9,20 L9,19 L23.0059397,19 C24.1072288,19 25,19.8877296 25,21 L25,21 L25,21 Z" id="wind"/>
              </svg>
            </div>
            <div className="details-title-container wind-title-container">
            <p className="details-title">WindSpeed: </p>
            <p className="details-data">23 mph</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Details