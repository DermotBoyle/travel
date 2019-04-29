import React from "react";

const Travel = (props) => {
  const {image, destination, country, distance} = props;
  return (
    <figure>
      <img src={image} alt={destination} />
      <figcaption>
          <h1>{country}</h1>
        <h2>{destination}</h2>
        <h2>{distance}</h2>  
      </figcaption>
    </figure>
  )
};

export default Travel;