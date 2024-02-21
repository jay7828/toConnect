import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AppContext } from "../../context/AppContext";
import DashBoardOptionsPanel from "../DashBoardOptionsPanel";
import { PiSquaresFourFill } from "react-icons/pi";
import Message from "./Message";
import Loader from "../Loader";

function Inbox() {
  const { loading , setLoading , dashboardPanel, setDashboardPanle, isLoggedIn } =
    useContext(AppContext);
  const [inbox, setInbox] = useState(true);
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  function handleDashPanel() {
    if (dashboardPanel) setDashboardPanle(false);
    else setDashboardPanle(true);
  }

  async function FetchReceivedMessages() {
    setLoading(true);

    const response = await fetch(

      "https://toconnect.onrender.com/api/collab_letter/fetch",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          receiver: "sanskargour321@gmail.com",
        }),
      }
    );

    if (response.ok) {
      const json = await response.json();
      if (json.success) {
        // console.log(json);
        setMessages(json.data);
        // console.log(received);
      } else {
        alert("Error occured!");
      }
    } else {
      console.error("Failed to fetch data:", response.statusText);
    }

    setLoading(false);

  }

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    FetchReceivedMessages();
  }, []);

  return (
    <div className="min-h-[100%] relative text-white">
      {loading ? (
        <div className="w-[100%] h-[calc(100%-8rem)] py-[2rem] flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div>
          <button
            onClick={() => handleDashPanel()}
            className="options-panel-btn flex justify-center items-center h-[2rem] w-[2rem]"
          >
            <PiSquaresFourFill />
          </button>
          <div>{dashboardPanel ? <DashBoardOptionsPanel /> : null}</div>
          <div className="flex justify-around py-4 w-[100%] relative border-b-[0.5px] border-b-slate-700">
            <button onClick={() => setInbox(true)}>Recieved</button>
            <button onClick={() => setInbox(false)}>Sent</button>
          </div>
          <div>
            {inbox ? (
              <div className=" p-5">
                {
                  messages.map((msg)=>{
                    return (<Message msg={msg} />)
                  })
                }
                
              </div>
            ) : (
              <div className="h-[450px] p-5">sent</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Inbox;
