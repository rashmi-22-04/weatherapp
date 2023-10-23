import React from 'react'
import './WeatherApp.css' 
import search_icon from '../Assest/search.png';
import snow from '../Assest/snow.png';
import wind from '../Assest/wind.png';
import rain from '../Assest/rain.png';
import humidity from '../Assest/humidity.png';
import drizzle from '../Assest/drizzle.png';
import cloud_icon from '../Assest/cloud.png';
import clear from '../Assest/clear.png';

const WeatherApp = () => {
  return (
    <div className='container'>
      <div className="top-bar">
        <input type='text' className='cityInput' placeholder='search'/>
        <div className='search-icon'>
          <img src={search_icon} alt=''/>
        </div>
      </div>
      <div className="weather-img">
         <img src={cloud_icon} alt=''/>
      </div>
    </div>
  )
}

export default WeatherApp
