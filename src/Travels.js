import React from "react";
import Travel from "./Travel";

const arr = [
{
 country: "USA",
 destination : "Destination: New York",
 distance: "Distance: 1650km",
 image : "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
 },
 {
country : "Brazil",
 destination : "Destination: Rio de Janiero",
 distance : "Distance: 1200km",
 image : "https://images.pexels.com/photos/1959068/pexels-photo-1959068.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
  country : "Australia",
   destination : "Melbourne",
   distance : "Distance: 2400km",
   image : "https://images.pexels.com/photos/1959068/pexels-photo-1959068.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    country : "Ireland",
     destination : "Derry",
     distance : "Distance: 800km",
     image : "https://images.pexels.com/photos/1959068/pexels-photo-1959068.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
]; 


const Travels = () => (
      <div>
          {arr.map(countryData => (
            <Travel {...countryData} />
          ))}
        </div>
)

export default Travels;