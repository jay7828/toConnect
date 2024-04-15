import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AppContext } from "../context/AppContext";
import DashBoardOptionsPanel from "./DashBoardOptionsPanel";
import { PiSquaresFourFill } from "react-icons/pi";
const BASE_URL = process.env.REACT_APP_BASE_URL;

function Collaboration() {
  const {
    user,
    dashboardPanel,
    setDashboardPanle,
    fetchProjects,
    searchRes,
    pId,
    setPId,
    isLoggedIn,
    loading,
  } = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    sender: "",
    subject: "",
    body: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const filteredData = searchRes.filter((res) => {
      if (res.projectID === pId) return res;
    });

    var today = new Date();

    console.log(
      JSON.stringify({
        letterID: formData.letterID,
        sender: user.email,
        receiver: filteredData[0].email,
        subject: formData.subject,
        body: formData.body,
        date: today,
        pid: pId,
        ptitle: filteredData[0].projectTitle,
      })
    );

    const response = await fetch(`${BASE_URL}/api/collab_letter/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pid: pId,
        ptitle: filteredData[0].projectTitle,
        letterID: formData.letterID,
        sender: user.email,
        receiver: filteredData[0].email,
        subject: formData.subject,
        body: formData.body,
        date: today,
      }),
    });

    console.log(response);

    if (response.ok) {
      const json = await response.json();
      console.log(json);
      if (json.success) {
        navigate("/dashboard/inbox");
        toast.success("Message Send Successfully!");
      } else {
        alert("Error occured!");
      }
    } else {
      console.error("Failed to fetch data:", response.statusText);
    }
  };

  function handleDashPanel() {
    if (dashboardPanel) setDashboardPanle(false);
    else setDashboardPanle(true);
  }

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    const pid = location.pathname.split("/").at(-1);
    setPId(pid);
    if (searchRes.length === 0) {
      fetchProjects();
    }
  }, []);

  return (
    <div className="min-h-[100%] text-white">
      <button
        onClick={() => handleDashPanel()}
        className="options-panel-btn flex justify-center items-center h-[2rem] w-[2rem]"
      >
        <PiSquaresFourFill />
      </button>

      {dashboardPanel ? <DashBoardOptionsPanel /> : null}

      {loading ? (
        <div className="w-[100%] h-[calc(100%-8rem)] py-[2rem] flex justify-center items-center">
          {/* <Loader /> */}
        </div>
      ) : (
        <form className="font-semibold mx-auto relative z-10 flex flex-col gap-4">
          <div className="mt-5 pl-10 font-bold uppercase text-sm md:text-base lg:text-lg">
            Collaboration Message
          </div>

          <div className="z-10 px-10">
            <p className="text-sm  pb-1">Letter ID</p>
            <input
              className="w-[100%] h-[2rem] text-white focus:bg-[#9522ca2f] bg-[#9522ca4c] px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-md placeholder-[#ad67ce6c]"
              type="number"
              name="letterID"
              placeholder="Enter your Letter ID"
              value={formData.letterID}
              onChange={changeHandler}
              required
            ></input>
          </div>

          <div className="z-10 px-10">
            <p className="text-sm  pb-1">Collaboration Subject</p>
            <textarea
              className="w-[100%] py-1 text-white focus:bg-[#9522ca2f] bg-[#9522ca4c] px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-md placeholder-[#ad67ce6c] "
              name="subject"
              placeholder="Enter Collaboration Message Subject"
              value={formData.subject}
              onChange={changeHandler}
              required
              rows={1}
            ></textarea>
          </div>

          <div className="z-10 px-10">
            <p className="text-sm  pb-1">Collaboration Message</p>
            <textarea
              className="w-[100%] py-1 text-white focus:bg-[#9522ca2f] bg-[#9522ca4c] px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-md placeholder-[#ad67ce6c]"
              name="body"
              placeholder="Enter Collaboration Message"
              value={formData.body}
              onChange={changeHandler}
              required
              rows={5}
            ></textarea>
          </div>

          <div className="flex justify-center items-center">
            <button
              className="mb-5 my-2 rounded-md border bg-[#9522ca] focus:bg-[#9522ca2f] border-[#8f16c7ac] p-1 w-[15%] hover:bg-[#8f16c7cf]"
              onClick={submitHandler}
            >
              Send
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Collaboration;
