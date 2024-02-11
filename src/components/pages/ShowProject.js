import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import Loader from "./Loader";
import { useLocation } from "react-router-dom";

const ShowProject = () => {
  const location = useLocation();

  const { pId , fetchProjects, searchRes, loading, tempSearchRes, setTempSearchRes } = useContext(AppContext);

  useEffect(() => {
    const pID = location.pathname.split("/").at(-1);

    if (searchRes.length === 0) fetchProjects();

    const filteredData = searchRes.filter((res) => {
      if (res.projectID === pID) return res;
    });

    setTempSearchRes(filteredData);
    // console.log(filteredData);
    // console.log(tempSearchRes);
  }, [location.pathname, location.search]);

  return (
    <div className="main-home-bg min-h-[100vh] text-white relative">
      <div className="gradient-1"></div>
      <div className="gradient-2"></div>
      <div className="gradient-3"></div>
      <div className="gradient-4"></div>

      {loading ? (
        <div className="w-[100%] h-[100vh] relative flex justify-center items-center z-10">
          <Loader />
        </div>
      ) : 
      <div className="w-[80%] h-[100vh] flex flex-col z-10 relative mx-auto my-10 p-4 border-slate-700 border-[0.5px] rounded-xl ">
        <div className="flex justify-between p-4 items-center border-slate-700 border-[0.5px] rounded-xl mb-4">
          <h1 className="text-2xl font-semibold uppercase">
            {tempSearchRes[0].projectTitle}
          </h1>
          <h4 className="text-sm text-gray-400">
            # {tempSearchRes[0].projectID}
          </h4>
        </div>

        <div className="flex justify-between p-4 items-center border-slate-700 border-[0.5px] rounded-xl mb-4">
          <p className="text-sm">{tempSearchRes[0].projectDesc}</p>
          {tempSearchRes[0].needCollaboration?
            (<div className="bg-purple-800 border-purple-400 border-[0.5px] w-[4rem] lg:w-[5rem] h-[1.5rem] md:h-[1.9rem] m-1 rounded-lg font-semibold text-xs lg:text-sm flex justify-center items-center">
            Collab
          </div>):(<div className="bg-purple-800 border-slate-400 border-[0.5px] w-[4rem] lg:w-[5rem] h-[1.5rem] md:h-[1.9rem] m-1 rounded-lg font-semibold text-xs lg:text-sm flex justify-center items-center">
          Collab
        </div>)
          }
        </div>

        <div className="flex justify-between p-4 items-center border-slate-700 border-[0.5px] rounded-xl mb-4">
          <div className="flex flex-col">
            <h4 className="text-xs sm:text-base font-medium">Tech Stack :</h4>

            {tempSearchRes[0].techStack.map((stack, idx) => {
              return (
                <p className="text-xs lg:text-sm" key={idx}>
                  {stack}
                </p>
              );
            })}
          </div>

          <div className="flex flex-col">
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

        <div className="flex justify-between p-4 items-center border-slate-700 border-[0.5px] rounded-xl mb-4">
          <p>{tempSearchRes[0].email}</p>
        </div>
      </div>
      }
    </div>
  );
};

export default ShowProject;
