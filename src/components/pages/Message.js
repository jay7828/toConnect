import React, { useContext, useEffect } from "react";
import userImg from "../assets/user.png";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Message(props) {
  const navigate = useNavigate();
  // const { user } = useContext(AppContext);
  const msg = props.msg;

  useEffect(()=>{
    console.log(msg);
  },[])

  return (
    <div className="flex flex-col bg-[#9522ca4c] justify-between p-4 items-center border-slate-700 border-[0.5px] rounded-xl mb-4">
      <div
        onClick={() => {
          navigate("/dashboard/profile");
        }}
        className="w-[100%] flex gap-3 justify-between mb-4"
      >
        <div className="flex gap-3 justify-center items-center">
          <div className="flex justify-center items-center rounded-full p-[1px] max-h-max max-w-[2rem] bg-[#e1e1e1] min-w-[35px] overflow-hidden">
            <img src={userImg} />
          </div>

          <h2 className=" font-bold">{msg.sender}</h2>
        </div>

        <div className="flex gap-3 text-xs justify-center items-center mr-3 text-gray-400">
          <h3>#user.pID</h3>

          <h3>user.projectTitle</h3>

          <h3>user.date</h3>

          <h3>user.time</h3>
        </div>
      </div>

      <div className="w-[100%] mb-4 font-semibold">
      {msg.subject}
      </div>

      <div className="w-[100%] text-sm">
      {msg.body}
      </div>
    </div>
  );
}

export default Message;
