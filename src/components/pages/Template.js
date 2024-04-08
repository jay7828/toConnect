import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

function Template({ formtype }) {
  async function googleLogin(response) {
    const decodedHeader = jwtDecode(response.credential);
    // console.log(response);
    console.log(decodedHeader);
    // await axios({
    //   method: "POST",
    //   url: "http://localhost:6000/api/googlelogin",
    //   data: { tokenId: response.tokenId },
    // }).then((response) => {
    //   console.log(response);
    // });
  }

  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] main-home-bg pt-10 min-h-[100vh]">
      <div className="gradient-1"></div>
      <div className="gradient-2"></div>
      <div className="gradient-3"></div>
      <div className="gradient-4"></div>

      <div className="h-max max-w-[30vw] min-w-max z-10 text-white flex-col gap-4 justify-start items-center">
        {formtype === "signup" ? <SignupForm /> : <LoginForm />}

        {/* <div className="w-full flex justify-evenly items-center py-3">
          <div className="bg-gray-600 w-[45%] h-[0.5px]"></div>
          <p className="text-[12px] text-gray-400">OR</p>
          <div className="bg-gray-600 w-[45%] h-[0.5px]"></div>
        </div>

        <div className="flex justify-center ">
          <GoogleLogin
             onSuccess={(response) => {
              googleLogin(response);
              // console.log(response);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div> */}
      </div>
    </div>
  );
}

export default Template;
