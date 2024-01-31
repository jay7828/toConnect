import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function AddProject() {
  const navigate = useNavigate();

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

    // if (event.target.checked) {
    //   setFormData((prevFormData) => {
    //     return {
    //       ...prevFormData,
    //       needCollaboration: true,
    //     };
    //   });
    // } else {
    //   setFormData((prevFormData) => {
    //     return {
    //       ...prevFormData,
    //       needCollaboration: false,
    //     };
    //   });
    // }

    // console.log(formData);
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

  return (
    <div className="main-home-bg pt-10 min-h-[100vh] text-white">
      <div className="gradient-1"></div>
      <div className="gradient-2"></div>
      <div className="gradient-3"></div>
      <div className="gradient-4"></div>

      <form
        className="dynamic-panel-main font-semibold mx-auto relative z-10 mb-10 flex flex-col gap-4"
        onSubmit={submitHandler}
      >
        <div className="z-10 px-10 mt-10">
          <p className="text-sm  pb-1">Email Address</p>
          <input
            className="w-[100%] h-[2rem] text-black bg-white px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-md"
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
            className="w-[100%] h-[2rem] text-black bg-white px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-md"
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
            className="w-[100%] h-[2rem] text-black bg-white px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-md"
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
            className="w-[100%] py-1 text-black bg-white px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-md"
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
            className="w-[100%] h-[2rem] text-black bg-white px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-md"
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
            className="w-[100%] h-[2rem] text-black bg-white px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-md"
            type="text"
            name="skillsRequired"
            placeholder="Eg: Web-development MongoDB"
            value={formData.skillsRequired}
            onChange={changeHandler}
            required
          ></input>
        </div>

        <div className="flex justify-between px-10">
          <div className="z-10 w-[45%]">
            <p className="text-sm  pb-1">Collaboration</p>
            <legend className="ml-2 gap-4 w-[15rem] flex justify-start items-center ">
              <label for="collab1">Yes</label>
              <input
                className="w-[15px] h-[2rem] text-black bg-white px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-md"
                type="checkbox"
                id="collab1"
                name="needCollaboration"
                placeholder="allow collaboration"
                value={needCollaboration}
                onChange={collabChange}
                required
              ></input>
            </legend>
          </div>

          <div className="z-10 w-[45%]">
            <p className="text-sm  pb-1">Contact Info</p>
            <input
              className="w-[100%] h-[2rem] text-black bg-white px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-md"
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
            className="mb-10 my-2 rounded-md border border-[#8f16c7ac] p-1 w-[95%] hover:bg-[#8f16c740]"
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
