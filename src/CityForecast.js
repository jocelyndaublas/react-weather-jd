import React from "react";
import "./cityForecast.css";

export default function CityForecast() {
    return (
        <section>
            <div>
                <h1 id="current-city">Swallow Falls</h1>
                <ul>
                    <li className="temperatureInfo">
                        {" "}
                        <span id="current-temperature">27 </span>
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
                    <li className="temperatureInfo">
                        <strong>Feels like: </strong>
                        <span id="feels-like">25</span>
                    </li>
                    <li className="temperatureInfo" id="weather-description">
                        Cloudy with a chance of meatballs
                    </li>
                    <li className="temperatureInfo">
                        <strong>Humidity:</strong>
                        <span id="humidity">60</span>%
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