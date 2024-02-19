import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AppContext } from "../context/AppContext";
import DashBoardOptionsPanel from "./DashBoardOptionsPanel";
import { PiSquaresFourFill } from "react-icons/pi";
import Message from "./Message";

function Inbox(){
  const { dashboardPanel, setDashboardPanle, isLoggedIn } = useContext(AppContext);
  const [inbox , setInbox] = useState(true);
  const [receivedMsg , setReceivedMsg] = useState([]);
  const navigate = useNavigate();

  function handleDashPanel() {
    if (dashboardPanel) setDashboardPanle(false);
    else setDashboardPanle(true);
  }

  async function FetchReceivedMessages(){
    const response = await fetch(
      "https://toconnect.onrender.com/api/collab_letter/fetch",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          receiver: "js758089@gmail.com",
      }),
    })

    if (response.ok) {
      const json = await response.json();
      if (json.success) {
        console.log(json);
        setReceivedMsg(json.data);
        // console.log(received);
      } else {
        alert("Error occured!");
      }
    } else {
      console.error("Failed to fetch data:", response.statusText);
    }

  }

  useEffect(()=>{
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    FetchReceivedMessages();
  },[]);

  return(
    <div className="min-h-[100%] relative text-white">
      <button
        onClick={() => handleDashPanel()}
        className="options-panel-btn flex justify-center items-center h-[2rem] w-[2rem]"
      >
        <PiSquaresFourFill />
      </button>

      {dashboardPanel ? <DashBoardOptionsPanel /> : null}

      <div className="flex justify-around py-4 w-[100%] relative border-b-[0.5px] border-b-slate-700">
        <button onClick={()=>setInbox(true)}>Recieved</button>
        <button onClick={()=>setInbox(false)}>Sent</button>
      </div>

      <div>
        {
          inbox?
          (<div className=" p-5">
            <Message msg={receivedMsg[0]} />
          </div>):
          (<div  className="h-[450px] p-5">
            sent
          </div>)
        }
      </div>
    </div>
  )
}

export default Inbox;