import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AppContext } from "../context/AppContext";

function Collaboration() {
  const {fetchProjects, searchRes , pId, setPId , tempSearchRes, setTempSearchRes } = useContext(AppContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    sender: "",
    subject:"",
    body: "",
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

  const submitHandler = async (e) => {
    e.preventDefault();

    const filteredData = searchRes.filter((res)=>{
      if(res.projectID === pId)
      return res;
    })

    if(!filteredData.Collaboration){
      toast.error("Cannot Send Message!");
      console.log("Cannot send msg to projects with collab feature turned OFF!");
      return;
    }

    var today = new Date();

    console.log(
      JSON.stringify({
        letterID: formData.letterID,
        sender: formData.sender,
        receiver: filteredData[0].email,
        subject: formData.subject,
        body: formData.body,
        date: today,
      })
      );
      
      const response = await fetch(
        "https://toconnect.onrender.com/api/collab_letter/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            letterID: formData.letterID,
            sender: formData.sender,
            receiver: filteredData[0].email,
            subject: formData.subject,
            body: formData.body,
            date: today,
        }),
      }
    );

    console.log(response);

    if (response.ok) {
      const json = await response.json();
      console.log(json);
      if (json.success) {
        navigate("/");
        toast.success("Message Send Successfully!");
      } else {
        alert("Error occured!");
      }
    } else {
      console.error("Failed to fetch data:", response.statusText);
    }
  };

  useEffect(()=>{
    const pid = location.pathname.split("/").at(-1);
    setPId(pid);
    if(searchRes.length === 0){
      fetchProjects();
    }
  },[]);
  
  return (
    <div className="main-home-bg pt-10 min-h-[100vh] text-white">
      <div className="gradient-1"></div>
      <div className="gradient-2"></div>
      <div className="gradient-3"></div>
      <div className="gradient-4"></div>

      <form
        className="dynamic-panel-main font-semibold mx-auto relative z-10 mb-10 flex flex-col gap-4"
      >
        <div className="z-10 px-10 mt-10">
          <p className="text-sm  pb-1">Email</p>
          <input
            className="w-[100%] h-[2rem] text-black bg-white px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-md"
            type="email"
            name="sender"
            placeholder="Enter your email address"
            value={formData.sender}
            onChange={changeHandler}
            required
          ></input>
        </div>

        {/* letterID */}
        <div className="z-10 px-10 mt-10">
          <p className="text-sm  pb-1">Letter ID</p>
          <input
            className="w-[100%] h-[2rem] text-black bg-white px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-md"
            type="number"
            name="letterID"
            placeholder="Enter your Letter ID"
            value={formData.letterID}
            onChange={changeHandler}
            required
          ></input>
        </div>

        <div className="z-10 px-10">
          <p className="text-sm  pb-1">Collaboration Subject</p>
          <textarea
            className="w-[100%] py-1 text-black bg-white px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-md"
            name="subject"
            placeholder="Enter Collaboration Message Subject"
            value={formData.subject}
            onChange={changeHandler}
            required
            rows={1}
          ></textarea>
        </div>

        <div className="z-10 px-10">
          <p className="text-sm  pb-1">Collaboration Message</p>
          <textarea
            className="w-[100%] py-1 text-black bg-white px-2 text-sm focus:outline-none border-[0.5px] border-slate-700 rounded-md"
            name="body"
            placeholder="Enter Collaboration Message"
            value={formData.body}
            onChange={changeHandler}
            required
            rows={5}
          ></textarea>
        </div>

        <div className="flex justify-center items-center">
          <button
            className="mb-10 my-2 rounded-md border border-[#8f16c7ac] p-1 w-[95%] hover:bg-[#8f16c740]"
            onClick={submitHandler}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Collaboration;
