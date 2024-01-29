import React from "react";
import { Outlet } from "react-router-dom";

function Parentpage () {
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default Parentpage;