import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import Loader from "./Loader";
import { useLocation, useNavigate } from "react-router-dom";
import { PiSquaresFourFill } from "react-icons/pi";
import DashBoardOptionsPanel from "./DashBoardOptionsPanel";

const ShowProject = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    pId,
    setPId,
    fetchProjects,
    searchRes,
    loading,
    tempSearchRes,
    setTempSearchRes,
    dashboardPanel,
    setDashboardPanle,
    isLoggedIn,
  } = useContext(AppContext);

  function handleDashPanel() {
    if (dashboardPanel) setDashboardPanle(false);
    else setDashboardPanle(true);
  }

  useEffect(() => {
    const pID = location.pathname.split("/").at(-1);
    setPId(pID);

    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    if (searchRes.length === 0) fetchProjects();

    const filteredData = searchRes.filter((res) => {
      if (res.projectID === pID) return res;
    });

    setTempSearchRes(filteredData);
  }, [location.pathname, location.search]);

  return (
    <div className="min-h-[100%] text-white relative">
      <button
        onClick={() => handleDashPanel()}
        className="options-panel-btn flex justify-center items-center h-[2rem] w-[2rem] relative"
      >
        <PiSquaresFourFill />
      </button>

      {dashboardPanel ? <DashBoardOptionsPanel /> : null}

      <div className="relative z[-1] dynamic-padding">
      {loading ? (
        <div className="w-[100%] h-[100%] relative flex justify-center items-center z-10">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-col z-10 relative mx-auto p-4 rounded-xl">
          <div className="flex bg-[#9522ca4c] justify-between p-4 items-center border-slate-700 border-[0.5px] rounded-xl mb-4">
            <h1 className="text-2xl font-semibold uppercase">
              {tempSearchRes[0].projectTitle}
            </h1>
            <h4 className="text-sm text-gray-400">
              # {tempSearchRes[0].projectID}
            </h4>
          </div>

          <div className="flex justify-between bg-[#9522ca4c] p-4 items-center border-slate-700 border-[0.5px] rounded-xl mb-4">
            <p className="text-sm w-[85%]">{tempSearchRes[0].projectDesc}</p>
            {tempSearchRes[0].needCollaboration ? (
              <button
                onClick={() => navigate(`/dashboard/collaboration/${pId}`)}
                className=" bg-purple-800 border-purple-600 border-[0.5px] w-[4rem] lg:w-[5rem] h-[1.5rem] md:h-[1.9rem] m-1 rounded-lg font-semibold text-xs lg:text-sm flex justify-center items-center"
              >
                Collab
              </button>
            ) : (
              null
            )}
          </div>

          <div className="flex justify-between bg-[#9522ca4c] p-4 items-center border-slate-700 border-[0.5px] rounded-xl mb-4">
            <div className="flex flex-col w-[10rem]">
              <h4 className="text-xs sm:text-base font-medium">Tech Stack :</h4>

              {tempSearchRes[0].techStack.map((stack, idx) => {
                return (
                  <p className="text-xs lg:text-sm" key={idx}>
                    {stack}
                  </p>
                );
              })}
            </div>

            <div className="flex flex-col w-[10rem] ">
              <h4 className="text-xs sm:text-base font-medium">
                Skills Required :
              </h4>

              {tempSearchRes[0].skillsRequired.map((skill, idx) => {
                return (
                  <p className="text-xs lg:text-sm" key={idx}>
                    {skill}
                  </p>
                );
              })}
            </div>
          </div>

          <div className="flex justify-between p-4 bg-[#9522ca4c] items-center border-slate-700 border-[0.5px] rounded-xl mb-4">
            <p>{tempSearchRes[0].email}</p>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default ShowProject;
