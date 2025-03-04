import React, { useState } from "react";
import comander from "../assets/ifundo/crew/image-douglas-hurley.png";
import missionspecialist from "../assets/ifundo/crew/image-mark-shuttleworth.png";
import pilotglover from "../assets/ifundo/crew/image-victor-glover.png";
import fly from "../assets/ifundo/crew/image-anousheh-ansari.png";
import { motion } from "framer-motion";

const Crew = () => {
  const [pablo, setPablo] = useState(0);

  const crew = [
    {
      role: "Commander",
      name: "Douglas Hurley",
      paragraph:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      fotoContinente: comander,
    },
    {
      role: "Mission Specialist",
      name: "Mark Shuttleworth",
      paragraph:
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      fotoContinente: missionspecialist,
    },
    {
      role: "Pilot",
      name: "Victor Glover",
      paragraph:
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      fotoContinente: pilotglover,
    },
    {
      role: "Flight Engineer",
      name: "Anousheh Ansari",
      paragraph:
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      fotoContinente: fly,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="pai mt-5 text-white flex flex-col h-128 pl-40 pr-10 flex-1 gap-9 overflow-hidden"
    >
      <p className="uppercase flex gap-4 self-start">
        <span className="text-xl font-condensada tracking-wider font-bold text-[rgb(127,134,126)]">
          02
        </span>
        <span className="text-xl">meet your crew</span>
      </p>

      <div className="pai1 flex flex-row self-center h-boms gap-20">
        <motion.div
          key={pablo}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="pai2 flex flex-col justify-center gap-3"
        >
          <h1 className="text-2xl font-condensada tracking-wider font-thin text-[rgb(127,134,126)] uppercase">
            {crew[pablo].role}
          </h1>
          <h2 className="font-laga uppercase text-4xl">{crew[pablo].name}</h2>
          <p className="text-gray-400 font-condensada">
            {crew[pablo].paragraph}
          </p>
          <div className="flex pt-[02%] gap-3 justify-center fixed bottom-[10%]">
            {crew.map(( __, index) => (
              <span
                key={index}
                onClick={() => setPablo(index)}
                className={`border rounded-full w-[10px] h-[10px] cursor-pointer ${
                  pablo === index ? "bg-white" : ""
                }`}
              ></span>
            ))}
          </div>
        </motion.div>
        <motion.img
          key={crew[pablo].fotoContinente}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="pr-72 h-[350px] self-center pb-16"
          src={crew[pablo].fotoContinente}
          alt={crew[pablo].name}
        />
      </div>
    </motion.div>
  );
};

export default Crew;
