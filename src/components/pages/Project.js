import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LiaEditSolid } from "react-icons/lia";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AppContext } from "../context/AppContext";

function Project({project}) {
  const navigate = useNavigate();
  const [collab, setCollab] = useState(false);
  const [edit, setEdit] = useState(false);
  const { user } = useContext(AppContext);

  useEffect(() => {
    if (project.needCollaboration) setCollab(true);
    if (project.email == user.email) setEdit(true);
    // console.log(project);
  }, []);

  return (
    <div className="project text-white my-4 py-4 px-6 rounded-md mx-auto w-[90%] flex flex-col border-purple-950 border-[0.5px] relative">
      <div className="w-[100%] flex justify-between">
        <div className="pb-1 w-[calc(100%-5rem)] uppercase text-sm sm:text-base md:text-lg font-semibold flex items-center">
          {project.projectTitle}
        </div>

        <button className="flex justify-center items-center w-[1.5rem]">
          <BsThreeDotsVertical />
        </button>
      </div>

      <div
        className="text-xs w-[100%] mt-2 lg:text-sm my-1"
      >
        {project.projectDesc}
      </div>

      <div className="w-[97%] h-[0.1px] my-2 bg-[#691d98] mx-auto"></div>

      <div className="flex justify-between items-center mt-2 ">
        <div className="flex justify-start items-center ">
          {collab ? (
            <div
              className="bg-purple-800 w-[4rem] lg:w-[5rem] h-[1.5rem] md:h-[1.6rem] m-1 rounded-full font-semibold text-xs lg:text-sm flex justify-center items-center z-20 relative hover:cursor-pointer"
              onClick={() => {
                navigate(`collaboration/${project.projectID}`);
              }}
            >
              Collab
            </div>
          ) : (
            <div className="bg-gray-400 w-[4rem] lg:w-[5rem] h-[1.5rem] md:h-[1.6rem] m-1 rounded-full font-semibold text-xs lg:text-sm flex justify-center items-center z-20 relative hover:cursor-default">
              Collab
            </div>
          )}

          <div
            className="bg-purple-800 w-[4rem] lg:w-[5rem] h-[1.5rem] md:h-[1.6rem] m-1 rounded-full font-semibold text-xs lg:text-sm flex justify-center items-center z-20 relative hover:cursor-pointer"
            onClick={() => {
              navigate(`project/${project.projectID}`);
            }}
          >
            Visit
          </div>
        </div>

        {edit ? (
          <button
            onClick={() => navigate(`project/update/${project.projectID}`)}
            className="text-base lg:text-xl mr-1"
          >
            <LiaEditSolid />
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Project;
