import React from "react";
import "./cityForecast.css";
import FormattedDate from "./FormtattedDate";

export default function CityForecast(props) {
    return (
        <section>
            <div>
                <h1 id="current-city">{props.name}</h1>
                <ul>
                    <li className="temperatureInfo">
                        {" "}
                        <span id="current-temperature">{props.temperature} </span>
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
                    {props.description}
                    </li>
                    <li className="temperatureInfo">
                        <strong>Humidity</strong>{props.humidity}:%
                    </li>
                    <li className="temperatureInfo">
                        <strong className="temperatureInfo" >
                        <FormattedDate date={props.date}/>
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