import React from "react";
import "./css files/Home.css";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { BsDot } from "react-icons/bs";
import HomeMainImage from "./assets/HomeMainImage";
import { FaInstagram, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Home() {
  return (
    <div className="main-home-bg pt-10 min-h-[100vh]">
      <div className="gradient-1"></div>
      <div className="gradient-2"></div>
      <div className="gradient-3"></div>
      <div className="gradient-4"></div>

      <Navbar />

      {/* main section of home page */}
      <div className=" w-[85%] mx-auto my-[8%] flex">
        <div className="mr-8 w-max min-h-full ">
          {/* icon */}
          <svg
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
            <h1 className="home-main-heading py-7">
              {/* heading */}
              IIST toConnect
            </h1>

            <p className="home-main-desc">
              {/* description */}A dynamic platform dedicated to fostering
              creativity, collaboration and knowledge exchange among students.
            </p>
          </div>

          <div className="mt-14 w-max">
            <div className="text-white flex w-[12rem] justify-between items-center font-medium py-6">
              {/* know more and sign up btn */}
              <button className="btn-signup btn">
                <NavLink to="/signup">Signup</NavLink>
              </button>

              <button>know More</button>
            </div>

            <div className="flex w-max items-center">
              {/* connect with others and users' pics */}
              <div className="flex ">
                <CiUser className="user-icon" />
                <CiUser className="user-icon" />
                <CiUser className="user-icon" />
                <CiUser className="user-icon" />
              </div>

              <BsDot className="text-white text-xl mx-3" />

              <div className="text-white text-sm font-medium">
                Connect with others
              </div>
            </div>
          </div>
        </div>

        <div className="pl-10">
          {/* big home page img {the project hub} */}
          <HomeMainImage />
        </div>
      </div>

      {/* footer */}
      <footer className="footer mx-auto text-white flex justify-between items-start">
        <div className="flex">
          <div className="h-max w-max pr-6">
            {/* icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M50 25C50 21.717 49.3534 18.4661 48.097 15.4329C46.8406 12.3998 44.9991 9.64379 42.6777 7.32233C40.3562 5.00087 37.6002 3.15938 34.5671 1.90301C31.5339 0.646644 28.283 -1.43507e-07 25 0L25 25H50Z"
                fill="url(#paint0_linear_6_64)"
              />
              <path
                d="M0 25C0 28.283 0.646644 31.5339 1.90301 34.5671C3.15938 37.6002 5.00087 40.3562 7.32233 42.6777C9.6438 44.9991 12.3998 46.8406 15.4329 48.097C18.4661 49.3534 21.717 50 25 50L25 25L0 25Z"
                fill="url(#paint1_linear_6_64)"
              />
              <circle
                cx="12.6666"
                cy="12.6666"
                r="8.33333"
                fill="url(#paint2_linear_6_64)"
              />
              <circle
                cx="37.3331"
                cy="37.3334"
                r="8.33333"
                fill="url(#paint3_linear_6_64)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_6_64"
                  x1="25"
                  y1="0"
                  x2="25"
                  y2="50"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#7F6AFF" />
                  <stop offset="1" stop-color="#7F6AFF" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_6_64"
                  x1="25"
                  y1="50"
                  x2="25"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#7F6AFF" />
                  <stop offset="1" stop-color="#7F6AFF" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_6_64"
                  x1="12.6666"
                  y1="4.33331"
                  x2="12.6666"
                  y2="21"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#7F6AFF" />
                  <stop offset="1" stop-color="#7F6AFF" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_6_64"
                  x1="37.3331"
                  y1="29.0001"
                  x2="37.3331"
                  y2="45.6667"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#7F6AFF" />
                  <stop offset="1" stop-color="#7F6AFF" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="mt-2">
            {/* logo */}
            <h1 className="text-xl font-bold">toConnect</h1>

            <div className="mt-6">
              {/* socials */}
              <p className="text-xs font-semibold">Socials</p>
              <div className="flex text-lg justify-between w-[5rem]">
                {/* icons social */}
                <FaInstagram />
                <FaFacebookSquare />
                <FaXTwitter />
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 font-semibold text-xs">
          <p className="max-w-[13.5rem]">
            {/* copyright */}Copyright © 2024 toConnect All rights reserved.
          </p>

          <p className="mt-6">{/* help */}Help</p>
        </div>

        <div className="w-max h-[10rem] flex-col text-sm font-semibold">
          {/* home about contact */}
          <div className="mt-2">
            <a herf="#">Home</a>
          </div>
          <div className="mt-6">
            <a herf="#about">About</a>
          </div>
          <div className="mt-6">
            <a herf="#contact">Contact</a>
          </div>
        </div>

        <div className="w-max h-[10rem] flex-col text-sm font-semibold">
          {/* privacy TnC FAQ */}
          <div className="mt-2">
            <a herf="#">Privacy</a>
          </div>
          <div className="mt-6">
            <a herf="#tnc">Terms and Conditions</a>
          </div>
          <div className="mt-6">
            <a herf="#faq">FAQs</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
