import React from "react";
import Navbar from "./Navbar";
import { PiSquaresFourFill } from "react-icons/pi";
import { RiFileCodeFill } from "react-icons/ri";
import { RiAccountBoxFill } from "react-icons/ri";
import { RiGroupFill } from "react-icons/ri";
import { RiMessage3Fill } from "react-icons/ri";
import { RiSettingsFill } from "react-icons/ri";
import user from "./assets/user.png";
import { useNavigate } from "react-router-dom";
import DashBoardHome from "./DashBoardHome";

const DashBoard = () => {
  const navigate = useNavigate();


  return (
    <div className="main-home-bg pt-10 min-h-[100vh]">
      <div className="gradient-1"></div>
      <div className="gradient-2"></div>
      <div className="gradient-3"></div>
      <div className="gradient-4"></div>

      <Navbar />

      <div className="text-white flex justify-between mx-auto my-10 dashboard-main">

        {/* options panel */}
        <div className="options-main ">
          <div className="mt-8">
            <button className="flex mx-auto option-btn items-center gap-1 justify-start">
              <PiSquaresFourFill />
              <h2 className="text-sm">Dashboard</h2>
            </button>

            <button className="mt-3 flex mx-auto option-btn items-center gap-1 justify-start">
              <RiAccountBoxFill />
              <h2 className="text-sm">Account</h2>
            </button>

            <button className="mt-3 flex mx-auto option-btn items-center gap-1 justify-start">
              <RiFileCodeFill />
              <h2 className="text-sm">Projects</h2>
            </button>

            <button className="flex mt-3 mx-auto option-btn items-center gap-1 justify-start">
              <RiGroupFill />
              <h2 className="text-sm">My team</h2>
            </button>

            <button className="flex mt-3 mx-auto option-btn items-center gap-1 justify-start">
              <RiMessage3Fill />
              <h2 className="text-sm">Community</h2>
            </button>

            <button className="flex mt-3 mx-auto option-btn items-center gap-1 justify-start">
              <RiSettingsFill />
              <h2 className="text-sm">Settings</h2>
            </button>
          </div>

          {/* user info */}
          <div
            onClick={() => {
              navigate("/profile");
            }}
            className="flex gap-3 justify-start mx-auto mb-4 w-[90%]"
          >
            {/* profile pic */}
            <div className="flex justify-center items-center rounded-full p-[1px] max-h-max max-w-max min-w-[35px]">
              <img src={user} height="50px" width="50px" />
            </div>

            {/* user info */}
            <div className="mt-1">
              {/* username */}
              <h2 className="text-sm font-bold">User's Full Name</h2>

              {/* proffesion */}
              <h3 className="text-xs">proffesion</h3>
            </div>
          </div>
        </div>

        {/* dynamic panel */}
        <div className="dynamic-panel-main min-h-[500px]">
          <DashBoardHome />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
