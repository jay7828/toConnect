import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    createPassword: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const submitHandler = () => {
    navigate("/");
    toast.success("Sign Up Successfull!");
  };

  return (
    <div>
      <form 
      onSubmit={submitHandler} 
      className="max-w-max flex flex-col gap-4">

        <div className="flex gap-[1rem]">
          <div>
            <p className="text-sm pb-1">First Name</p>
            <input
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={changeHandler}
              required
              placeholder="Enter first name"
              className="w-[12rem] focus:outline-none h-[2rem] px-2 text-sm border-[0.5px] border-slate-700 rounded-lg"
            ></input>
          </div>

          <div>
            <p className="text-sm pb-1">Last Name</p>
            <input
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={changeHandler}
              required
              placeholder="Enter last name"
              className="w-[12rem] focus:outline-none h-[2rem] px-2 text-sm bg-myDark2 border-[0.5px] border-slate-700 rounded-lg"
            ></input>
          </div>
        </div>

        <div>
          <p className="text-sm pb-1">Email Address</p>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={changeHandler}
            required
            placeholder="Enter email address"
            className="w-[25rem] h-[2rem] px-2 text-sm focus:outline-none bg-myDark2 border-[0.5px] border-slate-700 rounded-lg"
          ></input>
        </div>

        <div className="flex gap-[1rem]">
          <div>
            <p className="text-sm pb-1">Create password</p>
            <lable className="flex">
              <input
                name="createPassword"
                type={showPass === false ? "password" : "text"}
                value={formData.createPassword}
                onChange={changeHandler}
                required
                placeholder="Enter password"
                className="w-[10rem] h-[2rem] px-2 focus:outline-none text-sm border-y-[0.5px] border-l-[0.5px] border-slate-700  rounded-l-lg"
              ></input>
              <span
                onClick={() => setShowPass((prev) => !prev)}
                className="flex justify-center items-center h-[2rem] w-[2rem] rounded-r-lg border-r-[0.5px] border-y-[0.5px] border-slate-700 cursor-pointer "
              >
                {showPass === false ? (
                  <AiOutlineEye />
                ) : (
                  <AiOutlineEyeInvisible />
                )}
              </span>
            </lable>
          </div>
          <div>
            <lable className="flex flex-col">
              <p className="text-sm pb-1">Confirm password</p>
              <div className="flex">
                <input
                  value={formData.confirmPassword}
                  onChange={changeHandler}
                  required
                  className="w-[10rem] h-[2rem] px-2 focus:outline-none text-sm border-y-[0.5px] border-l-[0.5px] border-slate-700  rounded-l-lg"
                  type={showConfirmPass === false ? "password" : "text"}
                  placeholder="Confirm password"
                  name="confirmPassword"
                ></input>
                <span
                  onClick={() => setShowConfirmPass((prev) => !prev)}
                  className="flex justify-center items-center h-[2rem] w-[2rem] rounded-r-lg border-r-[0.5px] border-y-[0.5px] cursor-pointer border-slate-700 "
                >
                  {showConfirmPass === false ? (
                    <AiOutlineEye />
                  ) : (
                    <AiOutlineEyeInvisible />
                  )}
                </span>
              </div>
            </lable>
          </div>
        </div>

        <button
          type="submit"
          className="mt-5 bg-[#ffd607] text-black font-semibold flex justify-center items-center py-2 rounded-lg border-[0.5px] border-slate-700 "
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
