import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const ShowProject = () => {
  const { pId, tempSearchRes, fetchProjects } = useContext(AppContext);
  // const project = props.project;
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchProjects();
    console.log(tempSearchRes);
    setFilteredData(tempSearchRes.filter((res) => res.projectId.includes(pId)));
    console.log(filteredData);
  }, []);

  return (<div>
    {
      <h1>{tempSearchRes.projectId}</h1>
    }
    <h1>project</h1>
  </div>);
};

export default ShowProject;
