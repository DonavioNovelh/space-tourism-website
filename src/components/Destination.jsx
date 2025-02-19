import React, { useState } from 'react'
import titan from '../assets/ifundo/destination/image-titan.png'
import mars from '../assets/ifundo/destination/image-mars.png'
import moon from "../assets/ifundo/destination/image-moon.png";
import europa from "../assets/ifundo/destination/image-europa.png";


const Destination = () => {
  
  const [pablo, setPablo] = useState(() => 0);

  
  const [planetas, setPlanetas] = useState(()=> {
    return [
      {
        title: "Moon",
        paragraph:
          "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "Avg. distance",
        distanceValue: "384,400 km",
        yearstitle: "Est. travel time",
        year: "3 days",
        fotoContinente: moon,
      },

      {
        title: "Mars",
        paragraph:
          "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "Avg. distance",
        distanceValue: "225 mil. km",
        yearstitle: "Est. travel time",
        year: "9 months",
        fotoContinente: mars,
      },

      {
        title: "Europa",
        paragraph:
          "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "Avg. distance",
        distanceValue: "628 mil. km",
        yearstitle: "t. travel time",
        year: "3 years",
        fotoContinente: europa,
      },

      {
        title: "Titan",
        paragraph:
          "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "Avg. distance",
        distanceValue: "1.6 bil. km",
        yearstitle: "Est. travel time",
        year: "7 years",
        fotoContinente: titan
      },
    ];
  })
 

  return (
    <div className="pai mt-5 text-white flex  flex-col justify-between h-128 pl-40 pr-10 text flex-1 gap-9">
      <p className="uppercase flex gap-4">
        <span className="text-xl font-condensada tracking-wider font-bold text-[rgb(127,134,126)]">
          01
        </span>
        {console.log(pablo)}
        <span className="tracking-widest text-xl">Pick your destinatiom</span>
      </p>
      <div className="pai1 flex-1 h-96 w-full flex flex-row justify-evenly  gap-6">
        <img src={planetas[pablo].fotoContinente} alt="" className="self-start w-80 h-80 mt-6" />
        <div className="pai2  w-1/2 pt-2 flex flex-col  m-6 mt-9">
          <div className="pailink flex gap-4 font-condensada text-1xl font-thin uppercase h-8">
            <a
              href="#"
              className="h-full hover:border-b-2  hover:border-opacity-40  border-white tracking-wider"
              onClick={(e) => {
                e.stopPropagation();
                console.log("Pablito");
                setPablo(() => 0);
              }}
            >
              Moon
            </a>
            <a
              href="#"
              className="h-full hover:border-b-2  hover:border-opacity-40  border-white tracking-wider "
              onClick={(e) => {
                e.stopPropagation();
                console.log("Pablito");
                setPablo(() => 1);
              }}
            >
              Mars
            </a>
            <a
              href="#"
              className="h-full hover:border-b-2  hover:border-opacity-40  border-white tracking-wider"
              onClick={(e) => {
                e.stopPropagation();
                console.log("Pablito");
                setPablo(() => 2);
              }}
            >
              Europa
            </a>
            <a
              href="#"
              className="h-full hover:border-b-2  hover:border-opacity-40  border-white tracking-wider"
              onClick={(e) => {
                e.stopPropagation();
                console.log("Pablito");
                setPablo(() => 3);
              }}
            >
              Titan
            </a>
          </div>
          <div className="flex flex-col gap-3 pt-3">
            <p className="font-laga uppercase  text-7xl">
              {planetas[pablo].title}
            </p>
            <p className="text-gray-400 font-condensada w-4/6">
              {planetas[pablo].paragraph}
            </p>
            <hr className="w-4/6" />
            <div className="flex flex-row gap-16 uppercase">
              <div>
                <p className="text-[12px] text-[rgba(127,134,126,0.79)]">
                  AVG. Distance
                </p>
                <p className="font-laga text-xl">
                  {planetas[pablo].distanceValue}
                </p>
              </div>

              <div>
                <p className="text-[12px] text-[rgba(127,134,126,0.79)]">
                  est. travel time
                </p>
                <p className="font-laga text-xl">{planetas[pablo].distance}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination


