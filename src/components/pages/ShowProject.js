import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import Loader from "./Loader";
import { useLocation, useNavigate } from "react-router-dom";
import { PiSquaresFourFill } from "react-icons/pi";
import DashBoardOptionsPanel from "./DashBoardOptionsPanel";
import { LiaEditSolid } from "react-icons/lia";
const BASE_URL = process.env.REACT_APP_BASE_URL;

const ShowProject = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);

  const {
    tempSearchRes,
    user,
    pId,
    setPId,
    fetchProjects,
    setSearchRes,
    searchRes,
    loading,
    setLoading,
    setTempSearchRes,
    dashboardPanel,
    setDashboardPanle,
    isLoggedIn,
  } = useContext(AppContext);

  function handleDashPanel() {
    if (dashboardPanel) setDashboardPanle(false);
    else setDashboardPanle(true);
  }

  async function getProject(){
    console.log("Fetching Projects...");
    setLoading(true);
    try {
      const res = await axios.get(
        `${BASE_URL}/api/project/fetch`
      );
      const data = res.data;
      setSearchRes(data.data);
      setTempSearchRes(data.data);
      setLoading(false);
    } catch (error) {
      console.log("Error occurred during fetch call!");
      console.error(error);
      setLoading(false);
    }

    const filteredData = searchRes.filter((res) => {
      if (res.projectID === pID) return res;
    });

    setTempSearchRes(filteredData);

    if (filteredData[0].email == user.email) setEdit(true);
    return;
  }
  
  useEffect(() => {
    const pID = location.pathname.split("/").at(-1);
    setPId(pID);

    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    if (!searchRes.length === 0) {
      const filteredData = searchRes.filter((res) => {
        if (res.projectID === pID) return res;
      });

      setTempSearchRes(filteredData);

      if (filteredData[0].email == user.email) setEdit(true);
    }
    else{
      getProject();
    }
    
  }, [location.pathname, location.search, searchRes, tempSearchRes]);

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
            <div className="flex bg-[#9522ca4c] justify-center p-4 items-center border-slate-700 border-[0.5px] rounded-xl mb-4 relative">
              <h1 className="text-2xl font-semibold uppercase">
                {tempSearchRes[0].projectTitle}
              </h1>
              <h4 className="text-xs text-gray-300 absolute right-2">
                # {tempSearchRes[0].projectID}
              </h4>
            </div>

            <div className="flex justify-between gap-2 p-4 bg-[#9522ca4c] items-center border-slate-700 border-[0.5px] rounded-xl mb-4">
              <div className="flex justify-start gap-2 items-center">
                <p>From : {tempSearchRes[0].username}</p>
                <p className="text-sm text-gray-300">
                  {tempSearchRes[0].email}
                </p>
              </div>

              <div>
                {edit ? (
                  <button
                    onClick={() =>
                      navigate(`/dashboard/project/update/${tempSearchRes[0].projectID}`)
                    }
                    className="text-base lg:text-xl mr-1"
                  >
                    <LiaEditSolid />
                  </button>
                ) : null}
              </div>
            </div>

            <div className="flex justify-between bg-[#9522ca4c] px-4 py-4 gap-2 items-start border-slate-700 border-[0.5px] rounded-xl mb-4 flex-col">
              <h1 className="text-xl font-semibold">Details :</h1>
              <p className="text-sm">{tempSearchRes[0].projectDesc}</p>
            </div>

            <div className="flex gap-10 mb-4 flex-wrap">
              <div className="flex flex-col gap-2 bg-[#9522ca4c] p-4 border-slate-700 border-[0.5px] rounded-xl h-max w-max">
                <h4 className="text-xs sm:text-base font-medium">
                  Tech Stack :
                </h4>

                <div className="flex gap-1">
                  {tempSearchRes[0].techStack.map((stack, idx) => {
                    return (
                      <p
                        className="text-xs lg:text-sm bg-[#9522ca4c] py-1 px-2 items-start border-slate-700 border-[0.5px] rounded-lg "
                        key={idx}
                      >
                        {stack}
                      </p>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-2 bg-[#9522ca4c] p-4 border-slate-700 border-[0.5px] rounded-xl h-max w-max">
                <h4 className="text-xs sm:text-base font-medium">
                  Skills Required :
                </h4>

                <div className="flex gap-1">
                  {tempSearchRes[0].skillsRequired.map((skill, idx) => {
                    return (
                      <p
                        className="text-xs lg:text-sm bg-[#9522ca4c] py-1 px-2 items-start border-slate-700 border-[0.5px] rounded-lg "
                        key={idx}
                      >
                        {skill}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center w-[100%]">
              {tempSearchRes[0].needCollaboration ? (
                <button
                  onClick={() => navigate(`/dashboard/collaboration/${pId}`)}
                  className=" bg-purple-800 border-purple-600 border-[0.5px] w-[5rem] lg:w-[7rem] h-[1.5rem] md:h-[1.9rem] m-1 rounded-lg font-semibold text-xs lg:text-sm flex justify-center items-center"
                >
                  Collab
                </button>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowProject;
