import React, { Component } from 'react';
import moment from 'moment';
import kelvinToCelsius from 'kelvin-to-celsius'
import './card.css';
function Card({ item, i }) {
  let weather = item.weather[0].main;
  console.log(weather);
  let icon = "fas fa-sun fa-5x";
  if (weather === "Clear") {
    icon = "fas fa-sun fa-5x"
  }
  else if (weather === "Clouds") {
    icon = "fas fa-cloud fa-5x"
  }
  else if (weather === "Rain") {
    icon = "fas fa-cloud-showers-heavy fa-5x"
  }
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">

          <h4 className="card-title">{moment.unix(item.dt).format("dddd")}</h4>

          <h6 className="card-subtitle mb-2 text-muted">{moment.unix(item.dt).format("MMM,DD LT")}</h6>
          <p className="icon"><i className={icon}></i></p>
          <h5 className="card-title">{kelvinToCelsius(item.main.temp)}°C</h5>
          <p className="card-title">{item.weather[0].description}</p>
        </div>
      </div>
      {console.log(weather)}
    </>
  );
}

export default Card;