import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AppContext } from "../../context/AppContext";
import DashBoardOptionsPanel from "../DashBoardOptionsPanel";
import { PiSquaresFourFill } from "react-icons/pi";
import Message from "./Message";
import Loader from "../Loader";

function Inbox() {
  const {
    loading,
    setLoading,
    dashboardPanel,
    setDashboardPanle,
    isLoggedIn,
    user,
    sent,
    setSent,
  } = useContext(AppContext);
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  function handleDashPanel() {
    if (dashboardPanel) setDashboardPanle(false);
    else setDashboardPanle(true);
  }

  async function FetchSentMessages() {
    setLoading(true);

    const response = await fetch(
      "https://toconnect.onrender.com/api/collab_letter/sent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sender: `${user.email}`,
        }),
      }
    );

    if (response.ok) {
      const json = await response.json();
      if (json.success) {
        console.log(json.data);
        setMessages(json.data);
      } else {
        alert("Error occured!");
      }
    } else {
      console.error("Failed to fetch data:", response.statusText);
    }

    setLoading(false);
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
          receiver: `${user.email}`,
        }),
      }
    );

    if (response.ok) {
      const json = await response.json();
      if (json.success) {
        // console.log(json.data);
        setMessages(json.data);
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

    // console.log(user.email);

    if (!sent) FetchReceivedMessages();
    else FetchSentMessages();
  }, [sent]);

  return (
    <div className="min-h-[100%] relative text-white">
      <button
        onClick={() => handleDashPanel()}
        className="options-panel-btn flex justify-center items-center h-[2rem] w-[2rem]"
      >
        <PiSquaresFourFill />
      </button>

      <div>{dashboardPanel ? <DashBoardOptionsPanel /> : null}</div>

      <div className="w-[95%] inbox mx-auto relative text-white">
        <div className="flex justify-around w-[100%] rounded-[0.45938rem] relative border-[0.5px] border-[#aa14f04e] overflow-hidden">
          <button
            className={
              sent
                ? "flex flex-col w-[50%] gap-1 py-3 justify-center items-center overflow-hidden"
                : "flex flex-col w-[50%] gap-1 py-3 justify-center items-center bg-[#9522ca4c] overflow-hidden"
            }
            onClick={() => setSent(false)}
          >
            Recieved
            {/* {!sent ? (
              <div className="bg-white w-[30%] rounded-full h-[0.1rem] "></div>
            ) : null} */}
          </button>

          <div className=" w-[1px] bg-[#aa14f04e] "></div>

          <button
            className={
              sent
                ? "flex flex-col w-[50%] gap-1 py-3 justify-center items-center bg-[#9522ca4c] overflow-hidden"
                : "flex flex-col w-[50%] gap-1 py-3 justify-center items-center overflow-hidden"
            }
            onClick={() => setSent(true)}
          >
            sent
            {/* {sent ? (
              <div className="bg-white w-[30%] rounded-full h-[0.1rem] "></div>
            ) : null} */}
          </button>
        </div>

        {loading ? (
          <div className="w-[100%] min-h-[calc(540px-10rem)] py-[2rem] flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div className=" px-4 pt-4 rounded-[0.45938rem] relative border-[0.5px] border-[#aa14f04e] my-5">
            {messages.map((msg) => {
              return <Message msg={msg} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Inbox;
