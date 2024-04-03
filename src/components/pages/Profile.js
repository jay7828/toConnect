import React, { useContext, useEffect, useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { PiSquaresFourFill } from "react-icons/pi";
import DashBoardOptionsPanel from "./DashBoardOptionsPanel";

function Profile() {
  const navigate = useNavigate();
  const { user, setDashboardPanle, dashboardPanel } = useContext(AppContext);
  const [year, setYear] = useState("");

  function handleDashPanel() {
    if (dashboardPanel) setDashboardPanle(false);
    else setDashboardPanle(true);
  }

  useEffect(() => {
    console.log(user);
    if (user.year_of_passing) {
      let y = user.year_of_passing.substring(0, 10);
      // console.log(y);
      setYear(y);
    }
  }, []);

  return (
    <div className="flex flex-col relative gap-6 w-[100%] mx-auto">
      <button
        onClick={() => handleDashPanel()}
        className="options-panel-btn flex justify-center items-center h-[2rem] w-[2rem]"
      >
        <PiSquaresFourFill />
      </button>

      {dashboardPanel ? <DashBoardOptionsPanel /> : null}
      <div className="mt-5 pl-10 font-bold uppercase text-sm md:text-base lg:text-lg">
        Your Profile
      </div>

      <div className="px-10 profile-name-edit">
        <div className="w-max bg-[#9522ca21] border border-[#aa14f099] rounded-[0.45938rem] p-4 flex items-center gap-6 my-2 pr-10">
          <div className="min-w-[45px]">
            <img
              src="https://codingyaar.com/wp-content/uploads/bootstrap-4-card-image-left-demo-image.jpg"
              className="rounded-full"
              alt="image"
              width="70px"
              height="70px"
            />
          </div>

          <div>
            <h2 className="text-sm md:text-base lg:text-lg font-semibold">
              {user.username}
            </h2>

            <div className="w-[95%] h-[0.5px] bg-[#aa14f060] mx-auto my-1"></div>

            <h4 className="text-xs md:text-base text-gray-200 mr-2">
              {user.profession}
            </h4>
          </div>
        </div>

        <button
          onClick={() => navigate("/dashboard/profile/update")}
          className="flex items-center justify-center gap-2 bg-[#9522ca21] border border-[#aa14f099] rounded-full px-4 h-[2.5rem]"
        >
          <MdOutlineModeEdit />
          <p className="text-sm md:text-base">Edit</p>
        </button>
      </div>

      <table id="table" className="border rounded-[0.45938rem] bg-[#9522ca21] border-[#aa14f099] flex flex-col justify-center gap-2 p-4 mx-10 text-[clamp(0.8rem,1vw,1rem)] mb-4">
        {user.name ? (
          <tr>
            <td className="w-[5rem]">Name</td>
            <td className="text-gray-300">{user.name}</td>
          </tr>
        ) : null}

        {user.email ? (
          <tr>
            <td className="w-[5rem]">Email</td>
            <td className="text-gray-300">{user.email}</td>
          </tr>
        ) : null}

        {user.branch ? (
          <tr>
            <td className="w-[5rem]">Branch </td>
            <td className="text-gray-300">{user.branch}</td>
          </tr>
        ) : null}

        {user.year_of_passing ? (
          <tr>
            <td className="w-[5rem]">Year of Passing</td>
            <td className="text-gray-300">{year}</td>
          </tr>
        ) : null}

        {user.contact_no ? (
          <tr>
            <td className="w-[5rem]">Contact</td>
            <td className="text-gray-300">{user.contact_no}</td>
          </tr>
        ) : null}

        {user.about ? (
          <tr>
            <td className="w-[5rem]">About </td>
            <td className="text-gray-300">{user.about}</td>
          </tr>
        ) : null}
      </table>
    </div>
  );
}

export default Profile;
