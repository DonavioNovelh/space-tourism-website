import React from 'react'
import Logo from "../assets/icon/logo.svg"

const Header = () => {
  return (
    <div className="font-condenseda font-thin uppercase relative flex flex-row items-center ">
      <img className="" src={Logo} alt="" />
      <hr className="bg-white text-zinc-950 flex-1 mx-4 h-px " />
      <div className="flex  w-2xl pt-4 pb-4 p-6 backdrop-blur-sm justify-start pl-9 gap-8">
        <a className="text-white flex gap-7" href="">
          <span>00</span> <span>Home</span>
        </a>
        <a className="text-white flex gap-7" href="">
          <span>01</span> <span>Destination</span>
        </a>
        <a className="text-white flex gap-7" href="">
          <span>02</span> <span>Crew</span>
        </a>
        <a className="text-white flex gap-7" href="">
          <span>03</span> <span>Tecnology</span>
        </a>
      </div>
    </div>
  );
}

export default Header
