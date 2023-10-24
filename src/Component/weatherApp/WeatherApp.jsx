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
  
  const serach= async ()=>{
   const element=document.getElementsByClassName("cityInput");
   if(element[0].value===""){
    return 0;
   }

   let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
   let response =await fetch(url);
   let data= await response.json();
   const humidity=document.getElementsByClassName("humidity-percentage");
   const wind=document.getElementsByClassName("wind-rate");
   const temperature=document.getElementsByClassName("weather-temp");
   const location=document.getElementsByClassName("weather-location");

   humidity[0].innerHTML=data.main.humidity+" %";
   wind[0].innerHTML=data.wind.speed+" km/hr";
   temperature[0].innerHTML=data.main.temp+" °C";
   location[0].innerHTML=data.name;
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
      <div className="weather-temp"></div>
      <div className="weather-location"></div>
      <div className='data-container'>
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percentage"></div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate"></div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp
