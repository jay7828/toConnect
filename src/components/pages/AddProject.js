import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function AddProject() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    projectID: "",
    projectTitle: "",
    projectDesc: "",
    techStack: "",
    skillsRequired: "",
    needCollaboration: false,
    contactInfo: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });

    if (event.target.checked) {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          needCollaboration: true,
        };
      });
    } 
    else {
      setFormData((prevFormData) => {
        return {
          ...prevFormData,
          needCollaboration: false,
        };
      });
    }

    console.log(formData);
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
        needCollaboration: formData.needCollaboration,
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
          techStack: formData.techStack,
          skillsRequired: formData.skillsRequired,
          needCollaboration: formData.needCollaboration,
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
    <div>
      <form className="max-w-max flex flex-col gap-4" onSubmit={submitHandler}>
        <div className="z-10">
          <p className="text-sm  pb-1">Email Address</p>
          <input
            className="w-[25rem] h-[2rem] text-black bg-white px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-lg"
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={changeHandler}
            required
          ></input>
        </div>

        <div className="z-10">
          <p className="text-sm  pb-1">Project ID</p>
          <input
            className="w-[25rem] h-[2rem] text-black bg-white px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-lg"
            type="text"
            name="projectID"
            placeholder="Enter Project ID"
            value={formData.projectID}
            onChange={changeHandler}
            required
          ></input>
        </div>

        <div className="z-10">
          <p className="text-sm  pb-1">Project Title</p>
          <input
            className="w-[25rem] h-[2rem] text-black bg-white px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-lg"
            type="text"
            name="projectTitle"
            placeholder="Enter Project Title"
            value={formData.projectTitle}
            onChange={changeHandler}
            required
          ></input>
        </div>

        <div className="z-10">
          <p className="text-sm  pb-1">Project Description</p>
          <textarea
            className="w-[25rem] text-black bg-white px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-lg"
            name="projectDesc"
            placeholder="Enter Project Description"
            value={formData.projectDesc}
            onChange={changeHandler}
            required
            rows={10}
          ></textarea>
        </div>

        <div className="z-10">
          <p className="text-sm  pb-1">Technology Stack</p>
          <input
            className="w-[25rem] h-[2rem] text-black bg-white px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-lg"
            type="text"
            name="techStack"
            placeholder="Enter Technology Stack used"
            value={formData.techStack}
            onChange={changeHandler}
            required
          ></input>
        </div>

        <div className="z-10">
          <p className="text-sm  pb-1">Skills Required</p>
          <input
            className="w-[25rem] h-[2rem] text-black bg-white px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-lg"
            type="text"
            name="skillsRequired"
            placeholder="Enter Skills Required"
            value={formData.skillsRequired}
            onChange={changeHandler}
            required
          ></input>
        </div>

        <div className="z-10">
          <p className="text-sm  pb-1">Collaboration</p>
          <legend>
            <label for="collab1">Yes</label>
            <input
              className="w-[25rem] h-[2rem] text-black bg-white px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-lg"
              type="checkbox"
              id="collab1"
              name="needCollaboration"
              placeholder="allow collaboration"
              value={formData.needCollaboration}
              onChange={changeHandler}
              required
            ></input>
            {/* <label for="collab2">No</label>
            <input
              checked="true"
              className="w-[25rem] h-[2rem] text-black bg-white px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-lg"
              type="radio"
              id="collab2"
              name="needCollaboration"
              placeholder="allow collaboration"
              value={formData.needCollaboration}
              onChange={changeHandler}
              required
            ></input> */}
          </legend>
        </div>

        <div className="z-10">
          <p className="text-sm  pb-1">Contact Info</p>
          <input
            className="w-[25rem] h-[2rem] text-black bg-white px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-lg"
            type="text"
            name="contactInfo"
            placeholder="Enter Mobile Number"
            value={formData.contactInfo}
            onChange={changeHandler}
            required
          ></input>
        </div>

        <button onClick={submitHandler}>Submit</button>
      </form>
    </div>
  );
}

export default AddProject;
