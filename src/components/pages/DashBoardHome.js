import React, { useContext, useEffect, useState } from "react";
import temp_img from "../assets/temp_img.png";
import { AppContext } from "../context/AppContext";
import { PiSquaresFourFill } from "react-icons/pi";
import { RiFileCodeFill } from "react-icons/ri";
import { RiAccountBoxFill } from "react-icons/ri";
import { RiGroupFill } from "react-icons/ri";
import { RiMessage3Fill } from "react-icons/ri";
import { RiSettingsFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import Loader from "./Loader";
import Projects from "./Projects";

function DashBoardHome() {
  const { dashboardPanel, setDashboardPanle, loading, setLoading } =
    useContext(AppContext);
  const [searchRes, setSearchRes] = useState([]);
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
  };

  function handleDashPanel() {
    if (dashboardPanel) setDashboardPanle(false);
    else setDashboardPanle(true);
  }

  async function searchHandler() {
    setLoading(true);
    try {
      // console.log(searchData.searchProjects);
      await fetchProjects();
      if (searchRes.length > 0) {
        const filteredData = searchRes.filter((res) =>
          res.projectTitle.includes(searchData.searchProjects)
        );
        setSearchRes(filteredData);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error occurred during search:", error);
      setLoading(false);
    }
  }

  async function fetchProjects() {
    try {
      const res = await axios.get(
        "https://toconnect.onrender.com/api/project/fetch"
      );
      const data = res.data;
      setSearchRes(data.data);
      setLoading(false);
    } catch (error) {
      console.log("Error occurred during fetch call!");
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="my-10 flex relative gap-2 flex-col md:flex-row w-[95%] mx-auto">
      <button
        onClick={() => handleDashPanel()}
        className="options-panel-btn flex justify-center items-center h-[2rem] w-[2rem]"
      >
        <PiSquaresFourFill />
      </button>

      {dashboardPanel ? (
        <div className="dashboard-options-panel">
          <div className="mt-8">
            <button className="flex mx-auto option-btn items-center gap-1 justify-start">
              <PiSquaresFourFill />
              <h2 className="text-sm">Dashboard</h2>
            </button>

            <button className="mt-3 flex mx-auto option-btn items-center gap-1 justify-start">
              <RiAccountBoxFill />
              <h2 className="text-sm">Account</h2>
            </button>

            <button className="mt-3 flex mx-auto option-btn items-center gap-1 justify-start">
              <RiFileCodeFill />
              <h2 className="text-sm">Projects</h2>
            </button>

            <button className="flex mt-3 mx-auto option-btn items-center gap-1 justify-start">
              <RiGroupFill />
              <h2 className="text-sm">Teams</h2>
            </button>

            <button className="flex mt-3 mx-auto option-btn items-center gap-1 justify-start">
              <RiMessage3Fill />
              <h2 className="text-sm">Community</h2>
            </button>

            <button className="flex mt-3 mx-auto option-btn items-center gap-1 justify-start">
              <RiSettingsFill />
              <h2 className="text-sm">Setting</h2>
            </button>
          </div>
        </div>
      ) : null}

      <div className="rounded-lg p-2 dash-main-parts">
        <div className="font-semibold ml-3 min-w-[230px] mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl mb-1">
          {/* heading */}
          Welcome Username !
        </div>
        <form className="flex justify-center items-center mx-auto">
          {/* search */}
          <input
            className="w-[82%] focus:outline-none h-[2rem] text-white bg-black opacity-65 rounded-l-md my-2 px-2"
            placeholder="Search Projects"
            name="searchProjects"
            value={searchData.value}
            onChange={changeHandler}
          />
          <span
            onClick={searchHandler}
            className="bg-black text-white text-lg z-10 flex justify-center items-center opacity-65 h-[2rem] w-[2rem] cursor-pointer rounded-r-md"
          >
            <CiSearch />
          </span>
        </form>

        {loading ? (
          <div className="w-[100%] h-[calc(100%-8rem)] py-[2rem] flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div>
            <Projects projects={searchRes} />
          </div>
        )}
      </div>

      <div className="my-10 dash-main-parts rounded-lg">
        <div className="flex gap-2 mx-3 mb-5 mt-5 md:mt-4 sm:mt-3 ">
          {/* section 1 */}
          <div>
            <img src={temp_img} className="rounded-3xl img-1" />
          </div>

          <div className="flex-col mt-1 min-w-[110px] ">
            <h1 className="text-md md:text-lg lg:text-xl font-semibold">
              Add a Project
            </h1>
            <h6 className="text-sm lg:text-base">
              Start Adding PRojects (description )
            </h6>
          </div>
        </div>

        <div className="flex gap-2 mx-3 mb-5 mt-5 md:mt-4 sm:mt-3 ">
          {/* section 1 */}
          <div>
            <img src={temp_img} className="rounded-3xl img-1" />
          </div>

          <div className="flex-col min-w-[110px] ">
            <h1 className="text-md md:text-lg lg:text-xl font-semibold">
              Add a Project
            </h1>
            <h6 className="text-sm lg:text-base">
              Start Adding PRojects (description )
            </h6>
          </div>
        </div>

        <div className="flex gap-2 mx-3 mb-5 mt-5 md:mt-4 sm:mt-3 ">
          {/* section 1 */}
          <div>
            <img src={temp_img} className="rounded-3xl img-1" />
          </div>

          <div className="flex-col min-w-[110px] ">
            <h1 className="text-md md:text-lg lg:text-xl font-semibold">
              Add a Project
            </h1>
            <h6 className="text-sm lg:text-base">
              Start Adding PRojects (description )
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoardHome;
