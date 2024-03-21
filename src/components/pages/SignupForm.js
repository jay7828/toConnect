import React, { useContext, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function SignupForm() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const navigate = useNavigate();
  const {setIsLoggedIn , setUser} = useContext(AppContext);

  const [formData, setFormData] = useState({
    email: "",
    createPassword: "",
    confirmPassword: "",
    UserName: "",
    Name: "",
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

  const submitHandler = async(event) => {
    //We need TO add Fetch method Here
    event.preventDefault();

    // console.log(JSON.stringify({  
    //   username: formData.UserName,
    //   password: formData.createPassword,
    //   name: formData.Name,
    //   email:formData.email ,
    //   date:Date(),
    // }));

    const response=await fetch ("https://toconnect.onrender.com/api/register",(
      {
        method:"POST" ,
        headers:{
        'Content-Type':'application/json'
        },
        body: JSON.stringify({
          username: formData.UserName,
          password: formData.createPassword,
          name: formData.Name,
          email:formData.email ,
          date: Date()
          })
      })
    );

    if (response.ok) {
      const json = await response.json();
      setUser(json.userdata);
      console.log(json);
      setIsLoggedIn(true);
      if (json.success) {
        navigate("/");
        toast.success("Sign Up Successful!");
      } else {
        alert("Enter Valid Email and Password");
      }
    } else {
      // Handle error here
      console.error("Failed to fetch data:", response.statusText);
    }
    
  };

  return (
    <div>
      <form 
      onSubmit={submitHandler}
      className="min-w-max flex flex-col gap-4">

        <div className="flex gap-[1rem] z-10">
          <div>
            <p className="text-sm pb-1">User Name</p>
            <input
              name="UserName"
              type="text"
              value={formData.UserName}
              onChange={changeHandler}
              required
              placeholder="Enter User name"
              className="w-[12rem] focus:outline-none h-[2rem] px-2 text-sm border-[0.5px] text-black bg-white border-slate-700 rounded-lg"
            ></input>
          </div>

          <div>
            <p className="text-sm pb-1">Name</p>
            <input
              name="Name"
              type="text"
              value={formData.Name}
              onChange={changeHandler}
              required
              placeholder="Enter Your Name"
              className="w-[12rem] text-black bg-white focus:outline-none h-[2rem] px-2 text-sm bg-myDark2 border-[0.5px] border-slate-700 rounded-lg"
            ></input>
          </div>
        </div>

        <div className="z-10">
          <p className="text-sm pb-1">Email Address</p>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={changeHandler}
            required
            placeholder="Enter your Email"
            className="w-[25rem] h-[2rem] px-2 bg-white text-black text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-lg"
          ></input>
        </div>

        <div className="flex gap-[1rem]">
          <div className="z-10">
            <p className="text-sm pb-1">Create password</p>
            <lable className="flex">
              <input
                name="createPassword"
                type={showPass === false ? "password" : "text"}
                value={formData.createPassword}
                onChange={changeHandler}
                required
                placeholder="Enter Password"
                className="w-[10rem] bg-white text-black h-[2rem] px-2 focus:outline-none text-sm border-y-[0.5px] border-l-[0.5px] border-slate-700  rounded-l-lg"
              ></input>
              <span
                onClick={() => setShowPass((prev) => !prev)}
                className="flex bg-white text-black justify-center items-center h-[2rem] w-[2rem] rounded-r-lg border-r-[0.5px] border-y-[0.5px] border-slate-700 cursor-pointer "
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
                  className="w-[10rem] bg-white text-black h-[2rem] px-2 focus:outline-none text-sm border-y-[0.5px] border-l-[0.5px] border-slate-700  rounded-l-lg"
                  type={showConfirmPass === false ? "password" : "text"}
                  placeholder="Confirm Password"
                  name="confirmPassword"
                ></input>
                <span
                  onClick={() => setShowConfirmPass((prev) => !prev)}
                  className="bg-white text-black flex justify-center items-center h-[2rem] w-[2rem] rounded-r-lg border-r-[0.5px] border-y-[0.5px] cursor-pointer border-slate-700 "
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
          // onClick={()=>submitHandler()}
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
