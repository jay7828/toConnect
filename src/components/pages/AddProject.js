import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import DashBoardOptionsPanel from "./DashBoardOptionsPanel";
import { PiSquaresFourFill } from "react-icons/pi";

function AddProject() {
  const navigate = useNavigate();
  const { dashboardPanel, setDashboardPanle, isLoggedIn } =
    useContext(AppContext);
  const [needCollaboration, setNeedCollaboration] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    projectID: "",
    projectTitle: "",
    projectDesc: "",
    techStack: "",
    skillsRequired: "",
    contactInfo: "",
  });

  const collabChange = (event) => {
    if (event.target.checked) {
      setNeedCollaboration(true);
    } else {
      setNeedCollaboration(false);
    }

    console.log(needCollaboration);
  };

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
    //We need TO add Fetch method Here
    e.preventDefault();

    console.log(
      JSON.stringify({
        email: formData.email,
        projectID: formData.projectID,
        projectTitle: formData.projectTitle,
        projectDesc: formData.projectDesc,
        techStack: formData.techStack,
        skillsRequired: formData.skillsRequired,
        needCollaboration: needCollaboration,
        contactInfo: formData.contactInfo,
      })
    );

    const response = await fetch(
      "https://toconnect.onrender.com/api/project/add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          projectID: formData.projectID,
          projectTitle: formData.projectTitle,
          projectDesc: formData.projectDesc,
          techStack: formData.techStack.split(" "),
          skillsRequired: formData.skillsRequired.split(" "),
          needCollaboration: needCollaboration,
          contactInfo: formData.contactInfo,
        }),
      }
    );

    console.log(response);

    if (response.ok) {
      const json = await response.json();
      console.log(json);
      if (json.success) {
        navigate("/");
        toast.success("Project Added Successfully!");
      } else {
        alert("Error occured!");
      }
    } else {
      // Handle error here
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
    <div className="min-h-[100vh] text-white">
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
        <div className="z-10 px-10 mt-10">
          <p className="text-sm  pb-1">Email Address</p>
          <input
            className="w-[100%] h-[2rem] text-white focus:bg-[#9522ca2f] placeholder-[#ad67ce6c] bg-[#9522ca4c] px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-md"
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={changeHandler}
            required
          ></input>
        </div>

        <div className="z-10 px-10">
          <p className="text-sm  pb-1">Project ID</p>
          <input
            className="w-[100%] h-[2rem] text-white focus:bg-[#9522ca2f] placeholder-[#ad67ce6c] bg-[#9522ca4c] px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-md"
            type="text"
            name="projectID"
            placeholder="Enter Project ID"
            value={formData.projectID}
            onChange={changeHandler}
            required
          ></input>
        </div>

        <div className="z-10 px-10">
          <p className="text-sm  pb-1">Project Title</p>
          <input
            className="w-[100%] h-[2rem] text-white focus:bg-[#9522ca2f] placeholder-[#ad67ce6c] bg-[#9522ca4c] px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-md"
            type="text"
            name="projectTitle"
            placeholder="Enter Project Title"
            value={formData.projectTitle}
            onChange={changeHandler}
            required
          ></input>
        </div>

        <div className="z-10 px-10">
          <p className="text-sm  pb-1">Project Description</p>
          <textarea
            className="w-[100%] py-1 text-white focus:bg-[#9522ca2f] placeholder-[#ad67ce6c] bg-[#9522ca4c] px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-md"
            name="projectDesc"
            placeholder="Enter Project Description"
            value={formData.projectDesc}
            onChange={changeHandler}
            required
            rows={5}
          ></textarea>
        </div>

        <div className="z-10 px-10">
          <p className="text-sm  pb-1">Technology Stack</p>
          <input
            className="w-[100%] h-[2rem] text-white focus:bg-[#9522ca2f] placeholder-[#ad67ce6c] bg-[#9522ca4c] px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-md"
            type="text"
            name="techStack"
            placeholder="Eg: SQL java AWS"
            value={formData.techStack}
            onChange={changeHandler}
            required
          ></input>
        </div>

        <div className="z-10 px-10">
          <p className="text-sm  pb-1">Skills Required</p>
          <input
            className="w-[100%] h-[2rem] text-white focus:bg-[#9522ca2f] placeholder-[#ad67ce6c] bg-[#9522ca4c] px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-md"
            type="text"
            name="skillsRequired"
            placeholder="Eg: Web-development MongoDB"
            value={formData.skillsRequired}
            onChange={changeHandler}
            required
          ></input>
        </div>

        <div className="flex md:flex-row flex-col justify-between px-10">
          <div className="z-10 w-[100%] md:w-[45%]">
            <p className="text-sm  pb-1">Collaboration</p>
            <div className="flex justify-center items-center gap-2 w-max">
              <label for="collab1">Yes</label>
              <label class="checkbox">
                <input
                  type="checkbox"
                  id="collab1"
                  name="needCollaboration"
                  placeholder="allow collaboration"
                  value={needCollaboration}
                  onChange={collabChange}
                  required
                />
                <svg viewBox="0 0 21 18">
                  <symbol
                    id="tick-path"
                    viewBox="0 0 21 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.22003 7.26C5.72003 7.76 7.57 9.7 8.67 11.45C12.2 6.05 15.65 3.5 19.19 1.69"
                      fill="none"
                      stroke-width="2.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </symbol>
                  <defs>
                    <mask id="tick">
                      <use class="tick mask" href="#tick-path" />
                    </mask>
                  </defs>
                  <use class="tick" href="#tick-path" stroke="currentColor" />
                  <path
                    fill="white"
                    mask="url(#tick)"
                    d="M18 9C18 10.4464 17.9036 11.8929 17.7589 13.1464C17.5179 15.6054 15.6054 17.5179 13.1625 17.7589C11.8929 17.9036 10.4464 18 9 18C7.55357 18 6.10714 17.9036 4.85357 17.7589C2.39464 17.5179 0.498214 15.6054 0.241071 13.1464C0.0964286 11.8929 0 10.4464 0 9C0 7.55357 0.0964286 6.10714 0.241071 4.8375C0.498214 2.39464 2.39464 0.482143 4.85357 0.241071C6.10714 0.0964286 7.55357 0 9 0C10.4464 0 11.8929 0.0964286 13.1625 0.241071C15.6054 0.482143 17.5179 2.39464 17.7589 4.8375C17.9036 6.10714 18 7.55357 18 9Z"
                  />
                </svg>
                <svg class="lines" viewBox="0 0 11 11">
                  <path d="M5.88086 5.89441L9.53504 4.26746" />
                  <path d="M5.5274 8.78838L9.45391 9.55161" />
                  <path d="M3.49371 4.22065L5.55387 0.79198" />
                </svg>
              </label>
            </div>
          </div>

          <div className="z-10 w-[100%] md:w-[45%]">
            <p className="text-sm  pb-1">Contact Info</p>
            <input
              className="w-[100%] h-[2rem] text-white focus:bg-[#9522ca2f] placeholder-[#ad67ce6c] bg-[#9522ca4c] px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-md"
              type="text"
              name="contactInfo"
              placeholder="Enter Mobile Number"
              value={formData.contactInfo}
              onChange={changeHandler}
              required
            ></input>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button
            className="mb-5 my-2 rounded-md border border-[#8f16c7ac] p-1 w-[92.5%] hover:bg-[#8f16c740]"
            onClick={submitHandler}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProject;
