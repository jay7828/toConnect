import React, { useEffect } from "react";
import Project from "./Project";

function Projects(props) {
  const projects = props.projects;

  // useEffect(()=>{
  //   projects.forEach(project => {
  //     console.log(project);
  //   });
  // },[]);

  return (
    <div>
      {projects?.map((project) => {
        return(<Project project={project} />)
      })}
    </div>
  );
}

export default Projects;
