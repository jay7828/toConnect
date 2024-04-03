import React, { useContext, useEffect, useState } from "react";
import userImg from "../../assets/user.png";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

function Message(props) {
  const {setCollabMsg , sent } = useContext(AppContext);
  const navigate = useNavigate();
  const msg = props.msg;
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    // console.log(msg);
    setDate(msg.date.substring(0, 10));
    setTime(msg.date.substring(11, 16));
  }, []);

  return (
    <div
      onClick={() => {
        setCollabMsg(msg);
        // console.log(msg);
        navigate(`/dashboard/inbox/${msg.letterID}`);
      }}
      className="flex flex-col bg-[#9522ca4c] justify-between p-4 items-center border-slate-700 border-[0.5px] rounded-xl mb-4"
    >
      <div className="w-[100%] flex gap-3 justify-between mb-4">
        <div className="flex gap-3 justify-center items-center">
          <div className="flex justify-center items-center rounded-full p-[1px] max-h-max max-w-[2rem] bg-[#e1e1e1] min-w-[35px] overflow-hidden">
            <img src={userImg} />
          </div>

          <h2 className="font-bold">
            {
              sent?
              ("To :  " + msg.receiver):
              ("From : " + msg.sender)
            }
          </h2>
        </div>

        <div className="flex gap-3 text-xs justify-center items-center mr-3 text-gray-400">
          <h3>#{msg.pid}</h3>
          <h3 className="uppercase">{msg.ptitle}</h3>
        </div>
      </div>

      <div className="w-[100%] mb-4 font-semibold">{msg.subject}</div>

      <div className="w-[100%] text-sm">{msg.body}</div>

      <div className="w-[100%] flex gap-3 justify-between">
        <div className="w-[0px] h-[0px]"></div>
        <div className="flex gap-3 text-xs justify-center items-center mr-3 text-gray-400">
          <h3>{date}</h3>
          <h3>{time}</h3>
        </div>
      </div>
    </div>
  );
}

export default Message;
