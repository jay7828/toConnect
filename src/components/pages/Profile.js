import React, { useContext, useEffect, useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const { user } = useContext(AppContext);

  useEffect(() => {}, [user]);

  return (
    <div className="flex flex-col relative gap-6 w-[100%] mx-auto p-[1.5rem]">
      <div className="text-base md:text-lg lg:text-xl font-bold">
        Your Profile
      </div>

      <div className="flex justify-between items-center">
        <div className="w-max bg-[#9522ca21] border border-[#aa14f099] rounded-[0.45938rem] p-4 flex items-center gap-6 my-2 pr-10">
          <div>
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
          className="mr-2 flex items-center justify-center gap-2 bg-[#9522ca21] border border-[#aa14f099] rounded-full px-4 h-[2.5rem]"
        >
          <MdOutlineModeEdit />
          <p className="text-sm md:text-base">Edit</p>
        </button>
      </div>

      <table className="border rounded-[0.45938rem] bg-[#9522ca21] border-[#aa14f099] flex flex-col justify-center gap-2 p-4">
        {user.name ? (
          <tr>
            <td className="w-[5rem]">Name</td>

            <td className="w-[1rem]">:</td>

            <td className="text-gray-300">{user.name}</td>
          </tr>
        ) : null}

        <tr>
          <td className="w-[5rem]">Email</td>

          <td className="w-[1rem]">:</td>

          <td className="text-gray-300">
            {user.email ? ` ` + user.email : "Field not added"}
          </td>
        </tr>

        {user.branch ? (
          <tr>
            <td className="w-[5rem]">Branch </td>

            <td className="w-[1rem]">:</td>

            <td className="text-gray-300">{user.branch}</td>
          </tr>
        ) : null}

        {user.year_of_passing ? (
          <tr>
            <td className="w-[5rem]">Year of Passing</td>

            <td className="w-[1rem]">:</td>

            <td className="text-gray-300">{user.year_of_passing}</td>
          </tr>
        ) : null}

        {user.contact_no ? (
          <tr>
            <td className="w-[5rem]">Contact Number </td>

            <td className="w-[1rem]">:</td>

            <td className="text-gray-300">{user.contact_no}</td>
          </tr>
        ) : null}

        {user.about ? (
          <tr>
            <td className="w-[5rem]">About </td>

            <td className="w-[1rem]">:</td>

            <td className="text-gray-300">{user.about}</td>
          </tr>
        ) : null}
      </table>
    </div>
  );
}

export default Profile;
