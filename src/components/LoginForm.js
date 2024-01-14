import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function LoginForm() {
  const navigate = useNavigate();

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

  const submitHandler = (event) => {
    event.preventDefault();
    navigate("/");
    toast.success("Log In Successfull!");
  };

  return (
    <div>
      <form className="max-w-max flex flex-col gap-4" onSubmit={submitHandler}>
        <div>
          <p className="text-sm pb-1">Email Address</p>
          <input
            className="w-[25rem] h-[2rem] px-2 text-sm focus:outline-none bg-myDark2 border-[0.5px] border-slate-700 rounded-lg"
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={changeHandler}
            required
          ></input>
        </div>

        <div>
          <p className="text-sm pb-1">Password</p>
          <lable className="flex">
            <input
              className="w-[23rem] h-[2rem] px-2 focus:outline-none text-sm bg-myDark2 border-y-[0.5px] border-l-[0.5px] border-slate-700  rounded-l-lg"
              type={showPass === false ? "password" : "text"}
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={changeHandler}
              required
            ></input>
            <span
              onClick={() => setShowPass((prev) => !prev)}
              className="bg-myDark2 flex justify-center items-center h-[2rem] w-[2rem] cursor-pointer rounded-r-lg border-r-[0.5px] border-y-[0.5px] border-slate-700 "
            >
              {showPass === false ? (
                <AiOutlineEye />
              ) : (
                <AiOutlineEyeInvisible />
              )}
            </span>
          </lable>
          <div className="flex items-end justify-end w-[100%] mt-1 text-cyan-500 cursor-pointer">
            <p className="text-xs">Forgot Password</p>
          </div>
        </div>

        <button
          type="submit"
          className="mt-5 bg-[#ffd607] text-black font-semibold flex justify-center items-center py-2 rounded-lg border-[0.5px] border-slate-700 "
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
