import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";


import Logo from '../assets/icon/logo.svg'
import Home from './Home';
import Destination from './Destination';
import Crew from './Crew';
import Technology from "./Technology";



const Header = () => {
 const [back, setBack] = useState(
   () => "lg:bg-homedesktop sm:bg-hometablet bg-homephone"
 );
  return (
    <div
      className={`h-full w-full bg-cover ${back} bg-center bg-fixed pt-8 pl-20 flex justify-between flex-col animate-moveBackground overflow-hidden`}
    >
      <div className=" h-14 relative flex items-center justify-between">
        <img src={Logo} alt="" />
        <hr className="w-96 absolute left-40 z-20 sm:hidden " />
        <div className="text-white w-7/12 h-full flex items-center justify-center gap-5 pr-11 font-condensada text-lg sm:sm:w-[80%] sm:justify-between bg-slate-500 backdrop-blur-[200px]">
          <Link
            to="/"
            className="flex gap-2 w-fit hover:border-b-2 h-full items-center"
            onClick={() => {
              setBack(() => "lg:bg-homedesktop sm:bg-hometablet bg-homephone");
            }}
          >
            <span className="font-semibold">00</span> <span>Home</span>
          </Link>

          <Link
            to="/destination"
            className="flex  gap-2 w-fit hover:border-b-2 border-[rgba(255,255,255,0.23)] h-full items-center"
            onClick={() => {
              setBack(
                () => "lg:bg-martedesktop sm:bg-martetablet bg-martephone"
              );
            }}
          >
            <span className="font-semibold">01</span> <span>Destination</span>
          </Link>

          <Link
            to="/crew"
            className="flex gap-2 w-fit hover:border-b-2 h-full items-center"
            onClick={() => {
              setBack(() => "lg:bg-crewdesk sm:bg-crewtablet bg-crewphone");
            }}
          >
            <span className="font-semibold">02</span> <span>Crew</span>
          </Link>

          <Link
            to="/technology"
            className="flex gap-2 w-fit hover:border-b-2 h-full items-center"
          >
            <span className="font-semibold">03</span> <span>Technology</span>
          </Link>
        </div>
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="tec" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default Header
