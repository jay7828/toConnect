import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

function Project(props) {
  const navigate = useNavigate();
  const project = props.project;
  const [collab, setCollab] = useState(false);

  useEffect(() => {
    if (project.needCollaboration) setCollab(true);
  }, []);

  return (
    <div className="project text-white my-4 py-4 px-6 rounded-md mx-auto w-[90%] flex flex-col border-purple-950 border-[0.5px] relative">
      <div className="w-[100%] flex justify-between">
        <div
          className="pb-1 w-[calc(100%-5rem)] uppercase text-sm sm:text-base md:text-lg font-semibold flex items-center"
        >
          {project.projectTitle}
        </div>

        <button className="flex justify-center items-center w-[1.5rem]">
          <BsThreeDotsVertical />
        </button>
      </div>

      <div
        className="text-xs w-[100%] mt-2 lg:text-sm my-1"
        onClick={() => {
          navigate(`project/${project.projectID}`);
        }}
      >
        {project.projectDesc}
      </div>

      <div className="w-[97%] h-[0.1px] my-2 bg-[#691d98] mx-auto  "></div>

      <div className="flex justify-start items-center mt-2 ">
        {collab ? (
          <div
            className="bg-purple-800 w-[4rem] lg:w-[5rem] h-[1.5rem] md:h-[1.6rem] m-1 rounded-full font-semibold text-xs lg:text-sm flex justify-center items-center z-20 relative hover:cursor-pointer"
            onClick={() => {
              navigate(`collaboration/${props.projectID}`);
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
    </div>
  );
}

export default Project;
