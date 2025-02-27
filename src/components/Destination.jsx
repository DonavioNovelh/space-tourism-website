import React, { useState } from "react";
import titan from "../assets/ifundo/destination/image-titan.png";
import mars from "../assets/ifundo/destination/image-mars.png";
import moon from "../assets/ifundo/destination/image-moon.png";
import europa from "../assets/ifundo/destination/image-europa.png";
import { motion, AnimatePresence } from "framer-motion";

const Destination = () => {
  const [pablo, setPablo] = useState(0);

  const planetas = [
    {
      title: "Moon",
      paragraph:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites",
      distanceValue: "384,400 km",
      year: "3 days",
      fotoContinente: moon,
    },
    {
      title: "Mars",
      paragraph:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!.",
      distanceValue: "225 mil. km",
      year: "9 months",
      fotoContinente: mars,
    },
    {
      title: "Europa",
      paragraph:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin",
      distanceValue: "628 mil. km",
      year: "3 years",
      fotoContinente: europa,
    },
    {
      title: "Titan",
      paragraph:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn",
      distanceValue: "1.6 bil. km",
      year: "7 years",
      fotoContinente: titan,
    },
  ];

  return (
    <div className="pai mt-5 text-white flex flex-col justify-between h-128 pl-40 pr-10 flex-1 gap-9">
      <p className="uppercase flex gap-4">
        <span className="text-xl font-condensada tracking-wider font-bold text-[rgb(127,134,126)]">
          01
        </span>
        <span className="tracking-widest text-xl">Pick your destination</span>
      </p>

      <div className="pai1 flex-1 h-96 w-full flex flex-row justify-evenly gap-6">
        {/* Imagem com animação */}
      
          <motion.img
            key={pablo}
            src={planetas[pablo].fotoContinente}
            alt=""
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.4, x: 0, }}
            className="self-start w-80 h-80 mt-6"
          />
    

        <div className="pai2 w-1/2 pt-2 flex flex-col m-6 mt-9">
          <div className="pailink flex gap-4 font-condensada text-1xl font-thin uppercase h-8">
            {["Moon", "Mars", "Europa", "Titan"].map((planet, index) => (
              <a
                key={index}
                href="#"
                className={`h-full border-b-2 transition-all ${
                  pablo === index ? "border-white" : "border-transparent"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setPablo(index);
                }}
              >
                {planet}
              </a>
            ))}
          </div>

          {/* Texto com animação */}
            <motion.div
              key={pablo}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-3 pt-3"
            >
              <p className="font-laga uppercase text-7xl">
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
                    Est. travel time
                  </p>
                  <p className="font-laga text-xl">{planetas[pablo].year}</p>
                </div>
              </div>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
