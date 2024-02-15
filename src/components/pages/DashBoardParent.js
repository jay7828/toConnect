import React from "react";
import { Outlet } from "react-router-dom";

function DashBoardParent(){
  return(
    <div>
      <Outlet />
    </div>
  );
}

export default DashBoardParent;