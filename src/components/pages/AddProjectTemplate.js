import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import AddProject from "./AddProject";

function AddProjectTemplate(){
  const { isLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return(
    <div>
      {isLoggedIn ? <AddProject /> : <div className="hidden"></div>}
    </div>
  )
}

export default AddProjectTemplate;