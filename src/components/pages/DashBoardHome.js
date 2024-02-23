import React, { useContext, useEffect, useState } from "react";
import DashBoardOptionsPanel from "./DashBoardOptionsPanel";
import { AppContext } from "../context/AppContext";
import { PiSquaresFourFill } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import Loader from "./Loader";
import Project from "./Project";

function DashBoardHome() {
  const {
    user,
    dashboardPanel,
    setDashboardPanle,
    loading,
    setLoading,
    tempSearchRes,
    setTempSearchRes,
    fetchProjects,
    searchRes,
  } = useContext(AppContext);
  const [searchData, setSearchData] = useState({
    searchProjects: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    // console.log(value);
    setSearchData((prevSearchData) => {
      return {
        ...prevSearchData,
        [name]: value,
      };
    });

    console.log(searchData);

    setLoading(true);

    try {
      // console.log(searchData.searchProjects);
      // await fetchProjects();
      setTempSearchRes(searchRes);
      console.log(tempSearchRes);
      if (tempSearchRes.length > 0) {
        const filteredData = tempSearchRes.filter((res) => {
          const resTitle = res.projectTitle.toLowerCase;
          const pTitle = searchData.searchProjects.toLowerCase;
          console.log(resTitle);
          console.log(pTitle);
          resTitle.includes(pTitle);
        });
        setTempSearchRes(filteredData);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error occurred during search:", error);
      setLoading(false);
    }
  };

  function handleDashPanel() {
    if (dashboardPanel) setDashboardPanle(false);
    else setDashboardPanle(true);
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="flex relative gap-2 flex-col md:flex-row w-[100%] mx-auto min-h-[500px]">
      <button
        onClick={() => handleDashPanel()}
        className="options-panel-btn flex justify-center items-center h-[2rem] w-[2rem]"
      >
        <PiSquaresFourFill />
      </button>

      {dashboardPanel ? <DashBoardOptionsPanel /> : null}

      <div className="rounded-lg my-10 dash-main-parts">
        <div className="font-semibold mb-3 ml-5 sm:ml-10 min-w-[230px] text-lg sm:text-xl md:text-2xl lg:text-3xl">
          {/* heading */}
          Welcome {user.name} !
        </div>

        <form className="flex justify-center items-center mx-auto">
          {/* search */}
          <input
            className="w-[83%] focus:outline-none h-[2rem] text-white bg-black opacity-65 rounded-l-md my-2 px-2"
            placeholder="Search Projects"
            name="searchProjects"
            value={searchData.value}
            onChange={changeHandler}
          />

          <span className="bg-black text-white text-lg flex justify-center items-center opacity-65 h-[2rem] w-[2rem] cursor-pointer rounded-r-md">
            <CiSearch />
          </span>
        </form>

        {loading ? (
          <div className="w-[100%] h-[calc(100%-8rem)] py-[2rem] flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2">
            {tempSearchRes?.map((project) => {
              return <Project project={project} key={project._id} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default DashBoardHome;
