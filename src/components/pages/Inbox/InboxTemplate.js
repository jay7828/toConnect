import React from "react";
import { Outlet } from "react-router-dom";

function InboxTemplate(){
  return(
    <div><Outlet /></div>
  );
}

export default InboxTemplate;