import React, { useState } from 'react'
import tita from '../assets/ifundo/destination/image-titan.png'
import mars from '../assets/ifundo/destination/image-mars.png'
import moon from "../assets/ifundo/destination/image-moon.png";
import aab from "../assets/ifundo/destination/image-europa.png";



const Destination = () => {
  const [planetas, setPlanetas] = useState(()=> {
    return [
      {
        title: "Europa",
        paragraph:
          "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "Avg. distance",
        distanceValue: "628 mil. km",
        yearstitle: "t. travel time",
        year: "3 years",
      },
      {
        title: "Mars",
        paragraph:
          "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "Avg. distance",
        distanceValue: "225 mil. km",
        yearstitle: "Est. travel time",
        year: "9 months",
      },
    ];
  })
  return (
    <div className="text-white flex justify-between h-2/3 pl-40 pr-40 text-justify">
      {console.log(planetas)}
        <p><span>01</span>Pick your Destination</p>
    </div>
  );
}

export default Destination
