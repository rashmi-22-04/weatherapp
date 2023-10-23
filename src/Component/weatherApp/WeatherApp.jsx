import React from 'react'
import './WeatherApp.css' 
import search_icon from '../Assest/search.png';
import snow from '../Assest/snow.png';
import wind_icon from '../Assest/wind.png';
import rain from '../Assest/rain.png';
import humidity_icon from '../Assest/humidity.png';
import drizzle from '../Assest/drizzle.png';
import cloud_icon from '../Assest/cloud.png';
import clear from '../Assest/clear.png';

const WeatherApp = () => {

  let api_key="ebcf4ae45b2ecb126af1812367782091";
  
  const serach=()=>{
   const element=document.getElementsByClassName("cityInput");
   if(element[0].value===""){
    return 0;
   }
  }
  

  return (
    <div className='container'>
      <div className="top-bar">
        <input type='text' className='cityInput' placeholder='search'/>
        <div className='search-icon' onClick={()=>{serach()}}>
          <img src={search_icon} alt=''/>
        </div>
      </div>
      <div className="weather-img">
         <img src={cloud_icon} alt=''/>
      </div>
      <div className="weather-temp">24°C</div>
      <div className="weather-location">London</div>
      <div className='data-container'>
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percentage">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percentage">18 km/hr</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp
