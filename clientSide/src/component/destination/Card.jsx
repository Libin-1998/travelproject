import React from "react";
import { Link } from "react-router-dom";
import "./Destination.css";

export default function Card({destinations}) {
    console.log(destinations);
  return (
    <div class="cards">
      <div class="img">
        <img
          src={`/images/${destinations.image}`}
          alt=""
          height={"200px"}
          width={"100%"}
        />
      </div>
      <div class="card-title">{destinations.place}</div>
      <div class="card-subtitle">{destinations.title}</div>
      {/* <div class="card-footer">{destinations.country}</div> */}

      <Link to={"/trip"}>
        <button className="countryname">{destinations.country} </button>
      </Link>
    </div>
  );
}
