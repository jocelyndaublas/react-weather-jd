import React from "react";
import "./cityForecast.css";
import FormattedDate from "./FormtattedDate";

export default function CityForecast(props) {
    return (
        <section>
            <div>
                <h1 id="current-city">{props.data.name}</h1>
                <ul>
                    <li className="temperatureInfo">
                        {" "}
                        <span id="current-temperature">{Math.round(props.data.temperature)} </span>
                        <span>
                            <a href="/"id="celsius" className="unit" >
                                °C |
                            </a>
                            <a href="/" id="fahrenheit" className="unit" >
                                {" "}
                                °F
                            </a>
                        </span>
                    </li>
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
                   <img src={props.data.iconUrl}></img> 
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