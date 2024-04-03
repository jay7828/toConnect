import React from "react";
import { RiFileCodeFill } from "react-icons/ri";
import { RiAccountBoxFill } from "react-icons/ri";
import { RiGroupFill } from "react-icons/ri";
import { RiMessage3Fill } from "react-icons/ri";
import { RiSettingsFill } from "react-icons/ri";
import { PiSquaresFourFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

function DashBoardOptionsPanel() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-options-panel">
      <div className="mt-8">
        <button className="flex mx-auto option-btn items-center gap-1 justify-start">
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

        <button className="mt-3 flex mx-auto option-btn items-center gap-1 justify-start">
          <RiFileCodeFill />
          <h2 className="text-sm">Projects</h2>
        </button>

        <button className="flex mt-3 mx-auto option-btn items-center gap-1 justify-start">
          <RiGroupFill />
          <h2 className="text-sm">Teams</h2>
        </button>

        <button className="flex mt-3 mx-auto option-btn items-center gap-1 justify-start">
          <RiMessage3Fill />
          <h2 className="text-sm">Community</h2>
        </button>

        <button className="flex mt-3 mx-auto option-btn items-center gap-1 justify-start">
          <RiSettingsFill />
          <h2 className="text-sm">Setting</h2>
        </button>
      </div>
    </div>
  );
}

export default DashBoardOptionsPanel;
