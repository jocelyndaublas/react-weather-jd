import React, { useState } from "react";

export default function WeatherTemp(props){
    const[unit, setUnit]= useState("celsius");
    function convertToFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function convertCelcius(event){
        event.preventDefault();
        setUnit("celsius");
    }
    if (unit=== "celsius"){
        return(
            <div>
                           <span >{Math.round(props.celsius)} </span>
                            <span>°C | <a href="/" onClick={convertToFahrenheit} >
                                    {" "}
                                    °F
                                </a>
                            </span>
                         </div>
        );
    } else {
        let fahrenheit =(props.celsius*9)/5+32;
        return (
            <div> <span >{Math.round(fahrenheit)} </span>
                            <span><a href="/" onClick={convertCelcius}>°C</a> |  {" "} °F
                            </span>
                         </div>
        );
    }
    
}

