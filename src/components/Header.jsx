import React from 'react'

import Logo from '../assets/icon/logo.svg'
import Home from './Home';
import Destination from './Destination';

let bghome ='bg';
const Header = () => {
  return (
    <div className={`h-full w-full bg-martedesktop bg-cover bg-center bg-fixed pt-8 pl-20 flex justify-between flex-col`}>
      <div className=" h-14 relative flex items-center justify-between">
        <img src={Logo} alt="" />
        <hr className="w-96 absolute left-40 z-20" />

        <div className="text-white w-7/12 h-full flex items-center justify-center gap-5  pr-11 backdrop-blur-3xl font-condensada text-lg ">
          <a
            href="  "
            className=" flex gap-2 w-fit  hover:border-b-2 h-full items-center"
          >
            <span className="font-semibold">00</span> <span>Home</span>{" "}
          </a>
          <a
            href=""
            className="flex gap-2 w-fit  hover:border-b-2 h-full items-center"
          >
            <span className="font-semibold ">01</span> <span>Destination</span>
          </a>
          <a
            href=""
            className="flex gap-2 w-fit  hover:border-b-2 h-full items-center"
          >
            <span className="font-semibold">02</span> <span>Destination</span>
          </a>
          <a
            href=""
            className="flex gap-2 w-fit hover:border-b-2 h-full items-center"
          >
            <span className="font-semibold">03</span> <span>Technology</span>
          </a>
        </div>
      </div>
   
      <Destination/>
    </div>
  );
}

export default Header
