import React from "react";
import "./cityForecast.css";
import FormattedDate from "./FormtattedDate";
import WeatherTemp from "./WeatherTemp";

export default function CityForecast(props) {
    return (
        <section>
            <div>
                <h1 id="current-city">{props.data.name}</h1>
                <ul>
                    <li className="temperatureInfo">
                        <WeatherTemp celsius={props.data.temperature}/> </li>
                    <li className="temperatureInfo" >
                    {props.data.description}
                    </li>
                    <li className="temperatureInfo" >
                    {Math.round(props.data.wind)}KM per hour
                    </li>
                    <li className="temperatureInfo">
                        <strong>Humidity</strong>{props.data.humidity}:%
                    </li>
                    <li className="temperatureInfo" >
                   <img src={props.data.iconUrl} alt="descriptive weather icon"></img> 
                    </li>
                    <li className="temperatureInfo">
                        <strong className="temperatureInfo" >
                        <FormattedDate date={props.data.date}/>
                        </strong>
                    </li>
                </ul>
            </div>
        </section>
    );
}