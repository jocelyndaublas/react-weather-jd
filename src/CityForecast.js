import React from "react";
import "./cityForecast.css";

export default function CityForecast(props) {
    return (
        <section>
            <div>
                <h1 id="current-city">{props.data.city}</h1>
                <ul>
                    <li className="temperatureInfo">
                        {" "}
                        <span id="current-temperature">{props.data.temperature} </span>
                        <span>
                            <a id="celsius" className="unit" >
                                °C |
                            </a>
                            <a id="fahrenheit" className="unit" >
                                {" "}
                                °F
                            </a>
                        </span>
                    </li>
                    
                    <li className="temperatureInfo" id="weather-description">
                    {props.data.description}
                    </li>
                    <li className="temperatureInfo">
                        <strong>Humidity</strong>{props.data.humidity}:%
                    </li>
                    <li className="temperatureInfo">
                        <strong className="temperatureInfo" id="current-date">
                            Monday 18{" "}
                        </strong>{" "}
                        <span className="temperatureInfo" id="current-time">
                            10:11
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    );
}