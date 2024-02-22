import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { PiSquaresFourFill } from "react-icons/pi";
import DashBoardOptionsPanel from "../DashBoardOptionsPanel";

function CollabMessage() {
  const { collabMsg, setDashboardPanle, dashboardPanel } =
    useContext(AppContext);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    console.log(collabMsg);
    setDate(collabMsg.date.substring(0, 10));
    setTime(collabMsg.date.substring(11, 16));
  }, []);

  function handleDashPanel() {
    if (dashboardPanel) setDashboardPanle(false);
    else setDashboardPanle(true);
  }

  return (
    <div className="text-white">
      <button
        onClick={() => handleDashPanel()}
        className="options-panel-btn flex justify-center items-center h-[2rem] w-[2rem]"
      >
        <PiSquaresFourFill />
      </button>

      {dashboardPanel ? <DashBoardOptionsPanel /> : null}

      <div className=" font-semibold mx-auto relative z-10 flex flex-col gap-4">
        <div className="z-10 px-10">
          <div className="mt-6 mb-2">From : </div>
          <div className="w-[100%] min-h-[2rem text-white focus:bg-[#9522ca2f] placeholder-[#ad67ce6c] bg-[#9522ca4c] px-2 focus:outline-none border-[0.5px] border-slate-700 rounded-md flex items-center py-2 justify-between">
            <div>{collabMsg.sender}</div>
            <div className="text-xs text-gray-400">
              {"# " + collabMsg.letterID}
            </div>
          </div>

          <div className="mt-6 mb-2">Subject : </div>
          <div className="w-[100%] min-h-[2rem] text-white focus:bg-[#9522ca2f] placeholder-[#ad67ce6c] bg-[#9522ca4c] px-2 focus:outline-none border-[0.5px] border-slate-700 rounded-md flex items-center py-2">
            {collabMsg.subject}
          </div>

          <div className="mt-6 mb-2">Message : </div>
          <div className="py-4 w-[100%] min-h-[2rem] text-white focus:bg-[#9522ca2f] placeholder-[#ad67ce6c] bg-[#9522ca4c] px-2 focus:outline-none border-[0.5px] border-slate-700 rounded-md flex items-center">
            {collabMsg.body}
          </div>

          <div className="w-[100%] flex gap-3 mt-4 justify-between">
            <div className="w-[0px] h-[0px]"></div>
            <div className="flex gap-3 text-xs justify-center items-center mr-3 text-gray-400">
              <h3>{date}</h3>
              <h3>{time}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="project text-white my-4 py-4 px-6 rounded-md mx-auto w-[90%] flex flex-col border-purple-950 border-[0.5px] hover:cursor-pointer relative">
    //   <div className="w-[100%] flex justify-between">
    //     <div
    //       className="pb-1 w-[calc(100%-5rem)] text-sm sm:text-base md:text-lg font-semibold flex items-baseline gap-2"
    //       // onClick={() => {
    //       //   navigate(`project/${project.projectID}`);
    //       // }}
    //     >
    //       <span className="text-xs text-gray-300">FROM :</span>{collabMsg.sender}
    //     </div>
    //   </div>

    //   <div
    //     className="text-xs w-[100%] mt-2 lg:text-sm my-1"
    //     // onClick={() => {
    //     //   navigate(`project/${project.projectID}`);
    //     // }}
    //   >
    //     project.projectDesc
    //   </div>

    //   <div className="w-[97%] h-[0.1px] my-2 bg-[#691d98] mx-auto  "></div>

    //   <div className="flex justify-between items-center mt-2 ">
    //     <div
    //       className="bg-purple-800 w-[4rem] lg:w-[5rem] h-[1.5rem] md:h-[1.6rem] m-1 rounded-full font-semibold text-xs lg:text-sm flex justify-center items-center z-20 relative"
    //       // onClick={() => {
    //       //   navigate(`collaboration/${props.projectID}`);
    //       // }}
    //     >
    //       msg
    //     </div>
    //   </div>
    // </div>
  );
}

export default CollabMessage;
