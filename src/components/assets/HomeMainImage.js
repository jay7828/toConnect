import React from "react";
import homeMain from './homeMain.png';
import './HomeMainImage.css';
import base from './base.png'
import ovel from './ovel.png'

const HomeMainImage = () => {
  return (
    <div className="relative">
      <img src={homeMain} className="home-main" width='100%' />
      <img src={base} className="base w-[28rem] h-[15rem]" />
      <img src={ovel} className="ovel w-[35rem] h-[15rem]" />
      <div className="absolute text-white top-[21rem] left-[8.5rem] text-3xl font-bold font-orbi">The Project Hub
      <div className="bg-white w-[200px] mx-auto img-text mt-2 h-[2px]"></div>
      </div>
    </div>
  );
};


export default HomeMainImage;