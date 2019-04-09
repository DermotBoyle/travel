import React from "react";

const Travels = props => (
  <figure>
    <img src={props.image} alt={props.destination} />
    <figcaption>
      <h1>{props.country}</h1>
      <h2>{props.destination}</h2>
      <h2>{props.distance}</h2>  
    </figcaption>
  </figure>
);

export default Travels;