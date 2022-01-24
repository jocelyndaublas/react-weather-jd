import React, { useState } from "react";
import axios from "axios";
import CityForecast from "./CityForecast";
import WeeklyForecast from "./WeeklyForecast";


export default function SearchForm(props){
    const[weatherData, setWeatherData]= useState({ready:false});
    const[city, setCity]= useState(props.defaultCity);
  
    function getWeather(response) {
        setWeatherData({
            ready: true,
            coordinates:response.data.coord,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            name: response.data.name,
            date: new Date(response.data.dt*1000),
            humidity: response.data.main.humidity,
            description:response.data.weather[0].description,
            icon: response.data.weather[0].icon,
        });
      }
function search(){
    const apiKey ="c69faf9d2df6cf97f08634b08792a39d";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(getWeather);
}
function handleCity(event){
    setCity(event.target.value);
}
function handleSubmit(event) {
    event.preventDefault();
    search();
}
  
if(weatherData.ready){
    return(
    <div>
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="search city..." onChange={handleCity}></input>
            <input type="submit" value="search">
            </input>
        </form>
        < CityForecast data={weatherData} />
        < WeeklyForecast coordinates={weatherData.coordinates}/>
      </div>);
} else{
    search();
    return ("Loading...")
      }
}
  

  

 