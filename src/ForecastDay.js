import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props){
 function maxTemp(){
     let temperature = Math.round(props.data.temp.max);
     return `${temperature}°`
 }
 function minTemp(){
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`
}
function day(){
    let date = new Date(props.data.dt*1000);
    let day= date.getDay();
let days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
return days[day];
}


    return(
     <div>
         <div><span>{day()}</span></div>
    <div><WeatherIcon code={props.data.weather[0].icon} size={36} /></div>
    <div><span className="max-temp">{maxTemp()}</span><span className="min-temp">{minTemp()}</span></div>
     </div>
    
 );
}