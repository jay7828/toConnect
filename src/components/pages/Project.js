import React, { useEffect, useState } from "react";

function Project(props) {
  const project = props.project;
  const [collab, setCollab] = useState(false);

  useEffect(() => {
    if (project.needCollaboration) setCollab(true);
  }, []);

  return (
    <div className="text-white my-3 p-2 rounded-md mx-auto w-[90%] flex flex-col border-purple-950 border-[0.5px]">
      <div className="flex w-[100%]">
        <div className="pb-1 w-[calc(100%-5rem)] uppercase text-base lg:text-lg font-semibold">
          {project.projectTitle}
        </div>
        {collab ? (
          <div className="bg-purple-800 border-purple-400 border-[0.5px] w-[5rem] m-1 rounded-lg font-semibold text-xs lg:text-sm flex justify-center items-center">
            Collab
          </div>
        ) : null}
      </div>

      <div className="flex justify-between px-2 pb-1 gap-2">
        <div className="text-xs lg:text-sm">{project.projectDesc}</div>

        <div className="flex flex-col">
          <h4 className="text-sm lg:text-base font-medium">Tech Stack :</h4>
          
          {project.techStack.map((stack) => {
          return(<p className="text-xs lg:text-sm">{stack}</p>)
        })}
        </div>
      </div>
    </div>
  );
}

export default Project;
