import React, { useContext } from "react";
import { FaInstagram, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AppContext } from "../context/AppContext";

function Footer() {
  const {sidebar, setSidebar} = useContext(AppContext);

  return (
    <footer 
    onClick={()=>{setSidebar(false)}}
    className="footer mx-auto text-white sm:flex justify-between items-start">
      <div className="flex mr-10">
        <div className="h-max w-max pr-6">
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

        <div className="mt-2 mb-10">
          <h1 className="text-xl font-bold">toConnect</h1>

          <div className="mt-6">
            <p className="text-xs font-semibold">Socials</p>
            <div className="flex text-lg justify-between w-[5rem]">
              <FaInstagram />
              <FaFacebookSquare />
              <FaXTwitter />
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex w-full justify-between max-w-[70%]">
        <div className="mt-3 font-semibold text-xs mb-10 max-w-[10rem]">
          <p className="max-w-[13.5rem]">
            Copyright © 2024 toConnect All rights reserved.
          </p>

          <p className="mt-6">Help</p>
        </div>

        <div className="w-max h-[10rem] flex-col text-sm font-semibold">
          <div className="mt-2">
            <a href="#">Home</a>
          </div>
          <div className="mt-6">
            <a href="#about">About</a>
          </div>
          <div className="mt-6">
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="w-max h-[10rem] flex-coltext-sm font-semibold">
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
      </div>
    </footer>
  );
}

export default Footer;
