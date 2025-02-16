import React from "react";
import Logo from "../assets/icon/logo.svg";
import Home from "./Home";


const Header = () => {
  return (
    <>
      <div className="font-condenseda tracking-wide font-normal uppercase  flex flex-row items-center ">
        <img className="" src={Logo} alt="" />
        <hr className="bg-white text-white  mx-4 h-px relative top-px -mr-6 w-xl z-10 opacity-15 " />

        <div className=" flex  w-3xl   h-10 backdrop-blur-3xl justify-start pl-14 gap-10 text-xs ">
          <a
            className="text-white w-fit flex gap-3 hover:border-white hover:border-b h-full items-center "
            href=""
          >
            <span className="font-bold">00</span> <span className="font-condenseda ">Home</span>
          </a>
          <a
            className="text-white w-fit flex gap-3 hover:border-white hover:border-b items-center"
            href=""
          >
            <span className="font-bold">01</span>{" "}
            <span className="font-condenseda ">Destination</span>
          </a>
          <a
            className="text-white w-fit flex gap-3 hover:border-white hover:border-b items-center"
            href=""
          >
            <span className="font-bold">02</span> <span className="font-condenseda text-sm ">Crew</span>
          </a>
          <a
            className="text-white w-fit flex gap-3 hover:border-white hover:border-b items-center"
            href=""
          >
            <span className="font-bold">03</span>{" "}
            <span className="font-condenseda "> Tecnhology</span>
          </a>
        </div>
      </div>
      <Home />
    </>
  );
};

export default Header;
