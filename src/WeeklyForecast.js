import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./WeeklyForecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeeklyForecast(props){
    let [loaded,setLoaded]= useState(false);
    let [forecast, setForecast]= useState(null);
    
    useEffect(()=>{
        setLoaded(false);},
        [props.coordinates]);

    function handleResponse(response){
setForecast(response.data.daily);
setLoaded(true);    
}
    if (loaded){
        return(
            <div className="WeeklyForecast">
                <Container fluid="md">
                <Row>
          {forecast.map(function(dailyForecast, index){
              if (index <5){
                return(
                    <Col key={index}>
                            <ForecastDay data={dailyForecast}/>
                            </Col>
                                  );} else{ 
                                      return null;}
          })}
      </Row>
                </Container>
            </div>
        );
}else{
    let apiKey="c69faf9d2df6cf97f08634b08792a39d";
    let longitude=props.coordinates.lon;
    let latitude=props.coordinates.lat;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
}

}