import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import Collaboration from "./Collaboration";

function CollaborationTemplate(){
  const { isLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return(
    <div>
      {isLoggedIn ? <Collaboration /> : null}
    </div>
  )
}

export default CollaborationTemplate;