
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import "./Weather.css";
import {
  
  fetchWeather,
  
  selectWeather,
} from "./WeatherSlice";



export const Weather = () => {
  const dispatch = useDispatch();
  let weather = useSelector(selectWeather);
  

  useEffect(() => {
    if (weather === undefined ) {
        dispatch(fetchWeather(weather));
    }
   
   }, [dispatch,weather]);


  let name = ""
  let temperature = "--";
  let description = "--------";
  let icon = `http://openweathermap.org/img/wn/03d@2x.png`;

  if (weather !== undefined) {
        name = weather.name
      temperature = weather.main.temp;
      description = weather.weather[0].description;
      icon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    }

    
    

  return (
    <div className="Weather">
      <img src={icon} alt="Shows a weather icon" />

      <div>
      
        <h1>{name}</h1>
        <h2>{temperature}</h2>
        <h3>{description}</h3>
      </div>
    </div>
  );
};





  