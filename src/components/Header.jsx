import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";


import Logo from '../assets/icon/logo.svg'
import Home from './Home';
import Destination from './Destination';
import Crew from './Crew';
import Technology from "./Technology";


let bghome ='bg';
const Header = () => {
  return (
    <div
      className={`h-full w-full bg-crewdesk bg-cover bg-center bg-fixed pt-8 pl-20 flex justify-between flex-col animate-moveBackground`}
    >
      <div className=" h-14 relative flex items-center justify-between">
        <img src={Logo} alt="" />
        <hr className="w-96 absolute left-40 z-20" />
        <div className="text-white w-7/12 h-full flex items-center justify-center gap-5 pr-11 backdrop-blur-3xl font-condensada text-lg">
          <Link
            to="/"
            className="flex gap-2 w-fit hover:border-b-2 h-full items-center"
          >
            <span className="font-semibold">00</span> <span>Home</span>
          </Link>

          <Link
            to="/destination"
            className="flex gap-2 w-fit hover:border-b-2 h-full items-center"
          >
            <span className="font-semibold">01</span> <span>Destination</span>
          </Link>

          <Link
            to="/crew"
            className="flex gap-2 w-fit hover:border-b-2 h-full items-center"
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
