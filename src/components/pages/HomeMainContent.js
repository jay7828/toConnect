import React, { useContext } from "react";
import { CiUser } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import homeMain from "../assets/homeMain.png";
import { AppContext } from "../context/AppContext";

function HomeMainContent() {
  const navigate = useNavigate();
  const { setSidebar, isLoggedIn } = useContext(AppContext);

  return (
    <div
      onClick={() => {
        setSidebar(false);
      }}
      className=" w-[85%] relative z-10 mb-24 xl:mb-56 mx-auto my-[8%] xl:flex "
    >
      <div className="mx-auto flex">
        <div className="sm:mr-4 md:mr-8 min-w-[2rem] w-[3.5rem] sm:w-[5rem] md:w-[6rem] lg:w-[7rem] min-h-full">
          {/* icon */}
          <svg
            className="w-[100%]"
            xmlns="http://www.w3.org/2000/svg"
            width="102"
            height="102"
            viewBox="0 0 102 102"
            fill="none"
          >
            <path
              d="M101 51C101 44.4339 99.7067 37.9321 97.194 31.8658C94.6812 25.7995 90.9983 20.2876 86.3553 15.6447C81.7124 11.0017 76.2004 7.31876 70.1342 4.80602C64.0679 2.29329 57.5661 1 51 1L51 51H101Z"
              fill="url(#paint0_linear_9_90)"
              stroke="#A48EFF"
            />
            <path
              d="M1 51C1 57.5661 2.29329 64.0679 4.80602 70.1342C7.31876 76.2005 11.0017 81.7124 15.6447 86.3553C20.2876 90.9983 25.7996 94.6812 31.8658 97.194C37.9321 99.7067 44.4339 101 51 101L51 51L1 51Z"
              fill="url(#paint1_linear_9_90)"
              stroke="#A48EFF"
            />
            <circle
              cx="26.3332"
              cy="26.3333"
              r="16.6667"
              fill="url(#paint2_linear_9_90)"
              stroke="#A48EFF"
            />
            <circle
              cx="75.6662"
              cy="75.6667"
              r="16.6667"
              fill="url(#paint3_linear_9_90)"
              stroke="#A48EFF"
            />
            <defs>
              <linearGradient
                id="paint0_linear_9_90"
                x1="51"
                y1="1"
                x2="51"
                y2="101"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7F6AFF" />
                <stop offset="1" stop-color="#7F6AFF" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_9_90"
                x1="51"
                y1="101"
                x2="51"
                y2="1"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7F6AFF" />
                <stop offset="1" stop-color="#7F6AFF" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_9_90"
                x1="26.3332"
                y1="9.66663"
                x2="26.3332"
                y2="42.9999"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7F6AFF" />
                <stop offset="1" stop-color="#7F6AFF" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_9_90"
                x1="75.6662"
                y1="59.0001"
                x2="75.6662"
                y2="92.3334"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7F6AFF" />
                <stop offset="1" stop-color="#7F6AFF" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="flex-col h-max mx-4">
          <div className="w-max">
            <h1 className="home-main-heading text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] py-7">
              {/* heading */}
              IIST toConnect
            </h1>

            <p className="home-main-desc text-[0.75rem] md:text-[1rem] lg:text-[1.43rem] md:max-w-[30rem] max-w-[50vw]">
              {/* description */}A dynamic platform dedicated to fostering
              creativity, collaboration and knowledge exchange among students.
            </p>
          </div>

          <div className="mt-14 text-[12.5px] lg:text-[1rem] w-max">
            <div className="text-white flex w-[12rem] justify-between items-center font-medium py-6">
              {isLoggedIn ? 
              ( <button
                className="btn-signup btn"
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </button>)
              : (
                <button
                  className="btn-signup btn"
                  onClick={() => navigate("/signup")}
                >
                  Signup
                </button>
              )}

              <button>know More</button>
            </div>

            <div className="md:flex w-max items-center">
              {/* connect with others and users' pics */}
              <div className="flex justify-center items-center ">
                <CiUser className="user-icon" />
                <CiUser className="user-icon" />
                <CiUser className="user-icon" />
                <CiUser className="user-icon" />
                <p className="text-white my-2 text-2xl mx-3">+</p>
              </div>

              <div className="text-white text-sm font-medium">
                Connect with others
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pl-10 flex justify-center items-center">
        <img src={homeMain} className="relative z-10" />
      </div>
    </div>
  );
}

export default HomeMainContent;
