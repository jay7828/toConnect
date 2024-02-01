import React, { useEffect } from "react";
import Project from "./Project";

function Projects(props) {
  const projects = props.projects;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {projects?.map((project) => {
        return(<Project project={project} />)
      })}
    </div>
  );
}

export default Projects;
