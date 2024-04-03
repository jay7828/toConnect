import React from "react";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function Template({ formtype }) {
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh]">
      <div className="h-max max-w-[30vw] min-w-max flex-col gap-4 justify-start items-center">
        {formtype === "signup" ? <SignupForm /> : <LoginForm />}

        <div className="w-full flex justify-evenly items-center py-3">
          <div className="bg-gray-600 w-[45%] h-[0.5px]"></div>
          <p className="text-[12px] text-gray-600">OR</p>
          <div className="bg-gray-600 w-[45%] h-[0.5px]"></div>
        </div>

        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const decodedHeader = jwtDecode(credentialResponse.credential);
              console.log(decodedHeader);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Template;