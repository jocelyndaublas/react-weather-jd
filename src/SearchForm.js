import React, { useState } from "react";
import axios from "axios";
import CityForecast from "./CityForecast";


export default function searchForm(props) {
    const[weatherData, setWeatherData]= useState({ready:false});
    const[city, setCity]= useState(props.defaultCity);
  
    function getWeather(response) {
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            iconUrl:  `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            description:response.data.weather[0].description,
        });
      }

    function handleSubmit(event) {
        event.preventDefault();
        
    }
    function handleCity(event){
        setCity(event.target.value);
    }
function search(){
    const apiKey ="ca5da085c3334fa2974d520a9a4b8c12"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(getWeather);
}
  
if(weatherData.ready){
    return(
    <div>
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="search city..." onChnage={handleCity}></input>
        </form>
        <form>
            <input type="submit" value="search">
            </input>
        </form>
        < CityForecast data={weatherData} />
      </div>);
} else{
    search();
        return "Loading...";
      }
      
}
  

  

 