import React, { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AppContext } from "../context/AppContext";

function LoginForm() {
  const navigate = useNavigate();
  const [loggingIn, setLoggingIn] = useState(false);
  const { setIsLoggedIn, setUser, user } = useContext(AppContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPass, setShowPass] = useState(false);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoggingIn(true);

    console.log(
      JSON.stringify({
        email: formData.email,
        password: formData.password,
      })
    );

    const response = await fetch("https://toconnect.onrender.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });

    // console.log(response);

    if (response.ok) {
      const json = await response.json();
      console.log(json);
      setUser(json.userdata);
      console.log(user);
      setIsLoggedIn(true);

      if (json.success) {
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("user", JSON.stringify(json.userdata));
        // localStorage.setItem('email',json.userdata.email);
        navigate("/dashboard");
        toast.success("Login Successful!");
      } else {
        alert("Enter Valid Email and Password");
      }
    } else {
      // Handle error here
      console.error("Failed to fetch data:", response.statusText);
    }

    setLoggingIn(false);
  };

  return (
    <div>
      <form
        className=" flex flex-col gap-4 h-full w-[13.5rem] sm:w-[25rem]"
        onSubmit={submitHandler}
      >
        <div className="z-10">
          <p className="text-sm  pb-1">Email Address</p>
          <input
            className="form-input px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-lg"
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={changeHandler}
            required
          ></input>
        </div>

        <div className="z-10">
          <p className="text-sm pb-1">Password</p>
          <lable className="z-10 text-black flex">
            <input
              className="z-10 px-2 form-input focus:outline-none text-sm border-y-[0.5px] border-l-[0.5px] border-slate-700  rounded-l-lg"
              type={showPass === false ? "password" : "text"}
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={changeHandler}
              required
            ></input>
            <span
              onClick={() => setShowPass((prev) => !prev)}
              className="bg-myDark2 bg-white text-black z-10 flex justify-center items-center h-[2rem] w-[2rem] cursor-pointer rounded-r-lg border-r-[0.5px] border-y-[0.5px] border-slate-700"
            >
              {showPass === false ? (
                <AiOutlineEye />
              ) : (
                <AiOutlineEyeInvisible />
              )}
            </span>
          </lable>
          {/* <div className="flex items-end justify-end w-[100%] mt-1 text-cyan-500 cursor-pointer">
            <p className="text-xs">Forgot Password</p>
          </div> */}
        </div>

        <button
          type="submit"
          className={
            loggingIn
              ? "mt-5 bg-[#757575] text-black font-semibold flex justify-center items-center py-2 rounded-lg border-[0.5px] border-slate-700 hover:cursor-none"
              : "mt-5 bg-[#ffd607] text-black font-semibold flex justify-center items-center py-2 rounded-lg border-[0.5px] border-slate-700 "
          }
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
