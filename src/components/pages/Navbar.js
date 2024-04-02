import { React, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../css files/Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { AppContext } from "../context/AppContext";

function Navbar() {
  const navigate = useNavigate();
  const { sidebar, setSidebar, isLoggedIn, setIsLoggedIn } =
    useContext(AppContext);

  function sidebarHandler() {
    if (sidebar) {
      setSidebar(false);
    } else {
      setSidebar(true);
    }
  }

  return (
    <nav className="navbar-main mx-auto">
      <div className="h-full logo-container flex items-center ml-7 justify-between">
        {/* logo and icon */}
        <div className="min-w-[2rem] w-[2rem] sm:w-[2.5rem] md:w-[3rem] lg:w-[3.6rem] rounded-full">
          <svg
            className="w-[100%]"
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 34">
              <path
                id="Ellipse 21"
                d="M51 26C51 22.717 50.3534 19.4661 49.097 16.4329C47.8406 13.3998 45.9991 10.6438 43.6777 8.32233C41.3562 6.00087 38.6002 4.15938 35.5671 2.90301C32.5339 1.64664 29.283 1 26 1L26 26H51Z"
                fill="url(#paint0_linear_2_51)"
                stroke="#A48EFF"
              />
              <path
                id="Ellipse 22"
                d="M1 26C1 29.283 1.64664 32.5339 2.90301 35.5671C4.15938 38.6002 6.00087 41.3562 8.32233 43.6777C10.6438 45.9991 13.3998 47.8406 16.4329 49.097C19.4661 50.3534 22.717 51 26 51L26 26L1 26Z"
                fill="url(#paint1_linear_2_51)"
                stroke="#A48EFF"
              />
              <circle
                id="Ellipse 23"
                cx="13.6666"
                cy="13.6666"
                r="8.33333"
                fill="url(#paint2_linear_2_51)"
                stroke="#A48EFF"
              />
              <circle
                id="Ellipse 24"
                cx="38.3331"
                cy="38.3334"
                r="8.33333"
                fill="url(#paint3_linear_2_51)"
                stroke="#A48EFF"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_2_51"
                x1="26"
                y1="1"
                x2="26"
                y2="51"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7F6AFF" />
                <stop offset="1" stop-color="#7F6AFF" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_2_51"
                x1="26"
                y1="51"
                x2="26"
                y2="1"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7F6AFF" />
                <stop offset="1" stop-color="#7F6AFF" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_2_51"
                x1="13.6666"
                y1="5.33331"
                x2="13.6666"
                y2="22"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7F6AFF" />
                <stop offset="1" stop-color="#7F6AFF" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_2_51"
                x1="38.3331"
                y1="30.0001"
                x2="38.3331"
                y2="46.6667"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7F6AFF" />
                <stop offset="1" stop-color="#7F6AFF" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h1 className="navbar-heading text-[1.4rem] lg:text-[1.75rem]">
          toConnect
        </h1>
      </div>

      <div className="hamburger w-[1.75rem] flex justify-center items-center mr-7 text-3xl">
        <button onClick={() => sidebarHandler()}>
          <RxHamburgerMenu />
        </button>
      </div>

      <div className="text-sm btn-container hamburger font-medium">
        {/* home about contact */}
        <div className="w-max h-max">
          <a href="#" className="w-max h-max" onClick={() => navigate("/")}>
            Home
          </a>
        </div>
        <div className="w-max h-max">
          <a
            className="w-max h-max"
            href="#about"
            onClick={() => navigate("/")}
          >
            About
          </a>
        </div>
        <div className="w-max h-max">
          <a
            className="w-max h-max"
            href="#contact"
            onClick={() => navigate("/")}
          >
            Contact
          </a>
        </div>
      </div>

      <div className="btn-login-container">
        {isLoggedIn ? (
          <button
            className="btn-login btn"
            onClick={() => {
              navigate("/");
              setIsLoggedIn(false);
              localStorage.removeItem("user");
              localStorage.removeItem("isLoggedIn");
            }}
          >
            Logout
          </button>
        ) : (
          <button className="btn-login btn" onClick={() => navigate("/login")}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
