import React from 'react'

const Home = () => {
  return (
    <>
      <div className="pl-14 flex-1 align flex items-end justify-around  text-justify ">
        <div className=" flex-1 h-94 flex flex-col text-wrap">
          <h2 className=" text-gray-300  uppercase tracking-wider text-2xl font-condenseda font-light">
            So, you want to travel to
          </h2>
          <h2 className="text-9xl uppercase tracking-widest pt-6 pb-6  font-bellefair text-white">
            Space
          </h2>
          <p className="w-110 text-1xl text-gray-400 ">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="h-96 pb-28 pl-40 flex items-center justify-center w-screen ">
          <button className="font-bellefair text-gray-600 text-3xl tracking-wider block self-end bg-white h-50 w-50 rounded-circulo">
            Explore
          </button>
        </div>
      </div>
    </>
  );
}

export default Home
