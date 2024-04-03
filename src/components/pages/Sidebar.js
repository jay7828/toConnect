import React , { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Sidebar() {
  const navigate = useNavigate();
  const {setSidebar} = useContext(AppContext);

  return (
    <div 
    onClick={()=>{setSidebar(false)}}
    className="text-[0.8rem] w-[10.5rem] z-40 rounded-[0.45938rem] h-[17.5rem] overflow-hidden bg-black text-white absolute flex flex-col top-[7rem] right-[2.5rem] font-medium justify-evenly items-center navbar-ham-options">
      <div className="sidebar-gradient"></div>

      <div className="w-full h-full flex justify-center items-center text-center border-b border-[#b936f540]">
        <a className="w-max h-max flex justify-center items-center" href="#">
          Home
        </a>
      </div>
      <div className="w-full h-full text-center flex justify-center items-center border-b border-[#b936f540]">
        <a
          className="w-max h-max flex justify-center items-center"
          href="#about"
        >
          About
        </a>
      </div>
      <div className="w-full h-full text-center border-b border-[#b936f540] flex justify-center items-center">
        <a
          className="w-full h-full flex justify-center items-center"
          href="#contact"
        >
          Contact
        </a>
      </div>
      <div
        className="w-full h-full text-center border-b border-[#b936f540] flex justify-center items-center"
        onClick={() => navigate("/login")}
      >
        Login
      </div>
      <div
        className="w-full h-full text-center flex justify-center items-center"
        onClick={() => navigate("/signup")}
      >
        Signup
      </div>
    </div>
  );
}

export default Sidebar;
