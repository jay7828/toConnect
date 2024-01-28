import React, { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import DashBoard from "./DashBoard";
import { useNavigate } from "react-router-dom";

function DashBoardTemplate() {
  const { isLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      {isLoggedIn ? <DashBoard /> : <div className="hidden"></div>}
    </div>
  );
}

export default DashBoardTemplate;
