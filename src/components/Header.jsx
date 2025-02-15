import React from 'react'
import Logo from "../assets/icon/logo.svg"

const Header = () => {
  return (
    <div className="font-condenseda tracking-wide font-normal uppercase relative flex flex-row items-center ">
      <img className="" src={Logo} alt="" />
      <hr className="bg-white text-zinc-950 flex-1 mx-4 h-px " />
      <div className="flex  w-3xl pt-4 pb-4 p-6  backdrop-blur-3xl justify-start pl-14 gap-10 text-xs">
        <a className="text-white flex gap-3" href="">
          <span>00</span> <span>Home</span>
        </a>
        <a className="text-white flex gap-3" href="">
          <span>01</span> <span>Destination</span>
        </a>
        <a className="text-white flex gap-3" href="">
          <span>02</span> <span>Crew</span>
        </a>
        <a className="text-white flex gap-3" href="">
          <span>03</span> <span>Tecnhology</span>
        </a>
      </div>
    </div>
  );
}

export default Header
