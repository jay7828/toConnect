import { Outlet } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import { PiSquaresFourFill } from "react-icons/pi";
import { RiFileCodeFill } from "react-icons/ri";
import { RiAccountBoxFill } from "react-icons/ri";
import { RiInboxArchiveFill } from "react-icons/ri";
import userImg from "../assets/user.png";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function DashBoard() {
  const navigate = useNavigate();
  const { sidebar, isLoggedIn, user } = useContext(AppContext);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
  }, []);

  return (
    <div className="main-home-bg pt-10 min-h-[100vh]">
      <div className="gradient-1"></div>
      <div className="gradient-2"></div>
      <div className="gradient-3"></div>
      <div className="gradient-4"></div>

      <Navbar />

      {sidebar ? <Sidebar /> : null}

      <div className="text-white flex justify-between mx-auto my-10 dashboard-main">
        {/* options panel */}
        <div className="options-main ">
          <div className="mt-8">
            <button
              onClick={() => navigate("/dashboard")}
              className="flex mx-auto option-btn items-center gap-1 justify-start"
            >
              <PiSquaresFourFill />
              <h2 className="text-sm">Dashboard</h2>
            </button>

            <button
              onClick={() => navigate("profile")}
              className="mt-3 flex mx-auto option-btn items-center gap-1 justify-start"
            >
              <RiAccountBoxFill />
              <h2 className="text-sm">Account</h2>
            </button>

            <button
              onClick={() => {
                navigate(`addproject`);
              }}
              className="mt-3 flex mx-auto option-btn items-center gap-1 justify-start"
            >
              <RiFileCodeFill />
              <h2 className="text-sm">Add Projects</h2>
            </button>

            <button
              onClick={() => navigate("/dashboard/inbox")}
              className="flex mt-3 mx-auto option-btn items-center gap-1 justify-start"
            >
              <RiInboxArchiveFill />
              <h2 className="text-sm">Inbox</h2>
            </button>

          </div>

          {/* user info */}
          <div
            onClick={() => {
              navigate("/dashboard/profile");
            }}
            className="flex gap-3 justify-start mx-auto mb-4 w-[90%]"
          >
            {/* profile pic */}
            <div className="flex justify-center items-center rounded-full p-[1px] max-h-max max-w-[2.5rem] bg-[#e1e1e1] min-w-[35px] overflow-hidden">
              <img src={userImg} />
            </div>

            {/* user info */}
            <div className="mt-1">
              {/* username */}
              {user.name ? (
                <h2 className="text-xs font-bold">{user.name}</h2>
              ) : null}

              {/* proffesion */}
              {user.proffession ? (
                <h3 className="text-xs">{user.proffession}</h3>
              ) : null}
            </div>
          </div>
        </div>

        {/* dynamic panel */}
        <div className="dynamic-panel-main h-[500px] overflow-y-scroll">
          <Outlet />
        </div>
      </div>

      <div className="mt-40">
        <Footer />
      </div>
    </div>
  );
}

export default DashBoard;
