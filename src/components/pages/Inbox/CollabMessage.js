import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { PiSquaresFourFill } from "react-icons/pi";
import DashBoardOptionsPanel from "../DashBoardOptionsPanel";
import { useLocation } from "react-router-dom";

function CollabMessage() {
  const {
    collabMsg,
    setDashboardPanle,
    dashboardPanel,
    sent,
    loading,
    setLoading,
    setCollabMsg,
  } = useContext(AppContext);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const location = useLocation();

  async function fetchMessage() {
    setLoading(true);
    // console.log(location.pathname.split("/").at(-1));
    const url = `https://toconnect.onrender.com/api/collab_letter/fetch/${location.pathname.split("/").at(-1)}`;
    // console.log(url);

    const response = await fetch(url ,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // receiver: "sanskargour321@gmail.com",
        }),
      }
    );

    if (response.ok) {
      const json = await response.json();
      if (json.success) {
        console.log(json.data[0]);
        setCollabMsg(json.data[0]);
        setDate(json.data[0].date.substring(0, 10));
        setTime(json.data[0].date.substring(11, 16));
      } else {
        alert("Error occured!");
      }
    } else {
      console.error("Failed to fetch data:", response.statusText);
    }

    setLoading(false);
  }

  useEffect(() => {
    // console.log(collabMsg);
    if (collabMsg === undefined) fetchMessage();
    else {
      setDate(collabMsg.date.substring(0, 10));
      setTime(collabMsg.date.substring(11, 16));
    }
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

      {loading ? null : (
        <div className=" font-semibold mx-auto relative z-10 flex flex-col gap-4">
          <div className="z-10 px-10">
            <div className="mt-6 mb-2">{!sent ? "From : " : "To : "}</div>
            <div className="w-[100%] min-h-[2rem text-white focus:bg-[#9522ca2f] placeholder-[#ad67ce6c] bg-[#9522ca4c] px-2 focus:outline-none border-[0.5px] border-slate-700 rounded-md flex items-center py-2 justify-between">
              {!sent ? collabMsg.sender : collabMsg.receiver}
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
      )}
    </div>
  );
}

export default CollabMessage;
