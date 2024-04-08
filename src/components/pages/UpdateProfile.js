import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import DashBoardOptionsPanel from "./DashBoardOptionsPanel";
import { PiSquaresFourFill } from "react-icons/pi";

function UpdateProfile() {
  const navigate = useNavigate();
  const { dashboardPanel, setDashboardPanle, isLoggedIn, user , setUser } =
    useContext(AppContext);
  const [updatedFields, setUpdatedFields] = useState({});
  const initialFormData = {};
  const [formData, setFormData] = useState(initialFormData);

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

    const updatedFieldsData = {};
    for (const key in formData) {
      if (formData[key] !== initialFormData[key] && formData[key] !== "") {
        updatedFieldsData[key] = formData[key];
      }
    }
    setUpdatedFields(updatedFieldsData);

    const response = await fetch(
      `https://toconnect.onrender.com/api/users/profile/${user.username}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    console.log(response);

    if (response.ok) {
      const json = await response.json();
      if (json.success) {
        console.log(JSON.stringify(json.updatedUser));
        setUser(JSON.stringify(json.updatedUser));
        localStorage.removeItem('user');
        localStorage.setItem('user',JSON.stringify(json.updatedUser));
        navigate("/dashboard");
        toast.success("Project Updated Successfully!");
      } else {
        toast.error("Error occured!");
      }
    } else {
      console.error("Failed to fetch data:", response.statusText);
    } 
  };

  function handleDashPanel() {
    if (dashboardPanel) setDashboardPanle(false);
    else setDashboardPanle(true);
  }

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
  }, []);

  return (
    <div className="text-white">
      <button
        onClick={() => handleDashPanel()}
        className="options-panel-btn flex justify-center items-center h-[2rem] w-[2rem]"
      >
        <PiSquaresFourFill />
      </button>

      {dashboardPanel ? <DashBoardOptionsPanel /> : null}

      <form
        className=" font-semibold mx-auto relative z-10 flex flex-col gap-4"
        onSubmit={submitHandler}
      >
        <div className="mt-5 pl-10 font-bold uppercase text-sm md:text-base lg:text-lg">
          Add Project
        </div>

        <div className="z-10 px-10">
          <p className="text-sm  pb-1">Name</p>
          <input
            className="w-[100%] h-[2rem] text-white focus:bg-[#9522ca2f] placeholder-[#ad67ce6c] bg-[#9522ca4c] px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-md"
            type="text"
            name="name"
            placeholder="Update Display Name"
            value={formData.name}
            onChange={changeHandler}
          ></input>
        </div>

        <div className="z-10 px-10">
          <p className="text-sm  pb-1">Password</p>
          <input
            className="w-[100%] h-[2rem] text-white focus:bg-[#9522ca2f] placeholder-[#ad67ce6c] bg-[#9522ca4c] px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-md"
            type="password"
            name="password"
            placeholder="Update Password"
            value={formData.password}
            onChange={changeHandler}
          ></input>
        </div>

        <div className="z-10 px-10">
          <p className="text-sm  pb-1">About You</p>
          <input
            className="w-[100%] h-[2rem] text-white focus:bg-[#9522ca2f] placeholder-[#ad67ce6c] bg-[#9522ca4c] px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-md"
            type="text"
            name="about"
            placeholder="Update About You"
            value={formData.about}
            onChange={changeHandler}
          ></input>
        </div>

        <div className="z-10 px-10">
          <p className="text-sm  pb-1">Branch</p>
          <textarea
            className="w-[100%] py-1 text-white focus:bg-[#9522ca2f] placeholder-[#ad67ce6c] bg-[#9522ca4c] px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-md"
            name="branch"
            placeholder="Update Branch"
            value={formData.branch}
            onChange={changeHandler}
            rows={5}
          ></textarea>
        </div>

        <div className="z-10 px-10">
          <p className="text-sm  pb-1">Year of Passing</p>
          <input
            className="w-[100%] h-[2rem] text-white focus:bg-[#9522ca2f] placeholder-[#ad67ce6c] bg-[#9522ca4c] px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-md"
            type="text"
            name="year_of_passing"
            placeholder="Year Of Passing"
            value={formData.year_of_passing}
            onChange={changeHandler}
          ></input>
        </div>

        <div className="z-10 px-10">
          <p className="text-sm  pb-1">Update Skills</p>
          <input
            className="w-[100%] h-[2rem] text-white focus:bg-[#9522ca2f] placeholder-[#ad67ce6c] bg-[#9522ca4c] px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-md"
            type="text"
            name="skill"
            placeholder="Eg: Web-development MongoDB"
            value={formData.skill}
            onChange={changeHandler}
            required
          ></input>
        </div>

        <div className="z-10 px-10">
          <p className="text-sm  pb-1">Contact Info</p>
          <input
            className="w-[100%] h-[2rem] text-white focus:bg-[#9522ca2f] placeholder-[#ad67ce6c] bg-[#9522ca4c] px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-md"
            type="text"
            name="contact_no"
            placeholder="Update Contact Number"
            value={formData.contact_no}
            onChange={changeHandler}
          ></input>
        </div>

        <div className="z-10 px-10 md:w-[45%]">
          <p className="text-sm  pb-1">Profession</p>
          <input
            className="w-[100%] h-[2rem] text-white focus:bg-[#9522ca2f] placeholder-[#ad67ce6c] bg-[#9522ca4c] px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-md"
            type="text"
            name="Profession"
            placeholder="Update Profession"
            value={formData.profession}
            onChange={changeHandler}
          ></input>
        </div>

        <div className="flex justify-center items-center z-10 px-10">
          <button
            className="mb-5 my-2 rounded-md border bg-[#9522ca] focus:bg-[#9522ca2f] border-[#8f16c7ac] p-1 w-[15%] hover:bg-[#8f16c7cf]"
            onClick={submitHandler}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateProfile;
