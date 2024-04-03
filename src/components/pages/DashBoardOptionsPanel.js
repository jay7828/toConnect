import React, { useContext } from "react";
import { RiFileCodeFill } from "react-icons/ri";
import { RiAccountBoxFill } from "react-icons/ri";
import { RiInboxArchiveFill } from "react-icons/ri";
// import { RiGroupFill } from "react-icons/ri";
// import { RiMessage3Fill } from "react-icons/ri";
// import { RiSettingsFill } from "react-icons/ri";
import { PiSquaresFourFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function DashBoardOptionsPanel() {
  const navigate = useNavigate();
  const {setDashboardPanle} = useContext(AppContext);

  return (
    <div className="dashboard-options-panel"
    onClick={()=>setDashboardPanle(false)}
    >
      <div className="mt-8">
        <button
          onClick={() => navigate("/dashboard")}
          className="flex mx-auto option-btn items-center gap-1 justify-start"
        >
          <PiSquaresFourFill />
          <h2 className="text-sm">Dashboard</h2>
        </button>

        <button
          onClick={() => navigate("/dashboard/profile")}
          className="mt-3 flex mx-auto option-btn items-center gap-1 justify-start"
        >
          <RiAccountBoxFill />
          <h2 className="text-sm">Account</h2>
        </button>

        <button
          onClick={() => {
            navigate('/dashboard/addproject');
          }}
          className="mt-3 flex mx-auto option-btn items-center gap-1 justify-start"
        >
          <RiFileCodeFill />
          <h2 className="text-sm">Add Projects</h2>
        </button>

        <button
          onClick={() => navigate("/dashboard/inbox")}
          className="flex mt-3 mx-auto option-btn items-center gap-1 justify-start"
        >
          <RiInboxArchiveFill />
          <h2 className="text-sm">Inbox</h2>
        </button>
      </div>
    </div>
  );
}

export default DashBoardOptionsPanel;
