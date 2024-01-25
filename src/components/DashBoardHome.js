import React, { useContext } from "react";
import temp_img from "./assets/temp_img.png";
import { AppContext } from "./context/AppContext";
import { PiSquaresFourFill } from "react-icons/pi";
import { RiFileCodeFill } from "react-icons/ri";
import { RiAccountBoxFill } from "react-icons/ri";
import { RiGroupFill } from "react-icons/ri";
import { RiMessage3Fill } from "react-icons/ri";
import { RiSettingsFill } from "react-icons/ri";

function DashBoardHome() {
  const { dashboardPanel, setDashboardPanle } = useContext(AppContext);

  function handleDashPanel() {
    if (dashboardPanel) setDashboardPanle(false);
    else setDashboardPanle(true);
  }

  return (
    <div className="my-10 pt-1 w-[85%] mx-auto">
      <button
        onClick={() => handleDashPanel()}
        className="options-panel-btn flex justify-center items-center h-[2rem] w-[2rem]"
      >
        <PiSquaresFourFill />
      </button>

      {dashboardPanel ? (
        <div className="dashboard-options-panel">
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
        </div>
      ) : null}

      <div className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl min-w-[180px]">
        {/* heading */}
        Welcome Username !
      </div>

      <div>{/* search */}</div>

      <div className="my-10 w-[100%] rounded-lg">
        <div className="flex w-[100%] mb-12">
          {/* section 1 */}
          <div>
            <img src={temp_img} className="rounded-3xl img-1" />
          </div>

          <div className="flex-col mx-5 mb-5 lg:mt-5 md:mt-4 sm:mt-3  min-w-[110px]">
            <h1 className="text-md md:text-lg lg:text-xl font-semibold">
              Add a Project
            </h1>
            <h6 className="text-sm lg:text-base">
              Start Adding PRojects (description )
            </h6>
          </div>
        </div>

        <div className="flex justify-between w-[100%] mb-12">
          {/* section 2 */}
          <div className="flex-col m-5  min-w-[110px]">
            <h1 className="text-md md:text-lg lg:text-xl font-semibold">
              Add a Project
            </h1>
            <h6>Start Adding PRojects (description )</h6>
          </div>

          <div>
            <img src={temp_img} className="img-1 rounded-3xl" />
          </div>
        </div>

        <div className="flex w-[100%] mb-12">
          {/* section 3 */}
          <div>
            <img src={temp_img} className="img-1 rounded-3xl" />
          </div>

          <div className="flex-col m-5 min-w-[110px]">
            <h1 className="text-md md:text-lg lg:text-xl font-semibold">
              Add a Project
            </h1>
            <h6>Start Adding PRojects (description )</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardHome;
