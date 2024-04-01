import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineModeEdit } from "react-icons/md";
import Loader from "./Loader";
import { AppContext } from "../context/AppContext";

function SearchProfile() {
  const location = useLocation();
  const [searchedUser, setSearchedUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(false);
  const { user } = useContext(AppContext);

  async function fetchUser() {
    console.log("Fetching User...");
    setLoading(true);
    let username = location.pathname.split("/").at(-1);
    // console.log(username);

    const response = await fetch(
      `https://toconnect.onrender.com/api/users/profile/${username}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // console.log(response);

    if (response.ok) {
      const json = await response.json();
      setSearchedUser(json.data);
      // console.log(json.data);

      if (user.email === json.data.email) {
        setEdit(true);
      }

      if (json.success) {
        console.log("success");
      } else {
        console.log("failure");
      }
    } else {
      console.error("Failed to fetch data:", response.statusText);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="w-[100%] h-full relative">
      {loading ? (
        <div className="w-[100%] h-full py-[2rem] flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-col relative gap-6 w-[100%] mx-auto p-[1.5rem]">
          <div className="text-base md:text-lg lg:text-xl font-bold">
            {
              edit?"YOUR PROFILE":"PROFILE"
            }
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
                  {searchedUser.username}
                </h2>

                <div className="w-[95%] h-[0.5px] bg-[#aa14f060] mx-auto my-1"></div>

                <h4 className="text-xs md:text-base text-gray-200 mr-2">
                  {searchedUser.profession}
                </h4>
              </div>
            </div>

            <div>
              {edit ? (
                <button
                  // onClick={}
                  className="mr-2 flex items-center justify-center gap-2 bg-[#9522ca21] border border-[#aa14f099] rounded-full px-4 h-[2.5rem]"
                >
                  <MdOutlineModeEdit />
                  <p className="text-sm md:text-base">Edit</p>
                </button>
              ) : null}
            </div>
          </div>

          <table className="border rounded-[0.45938rem] bg-[#9522ca21] border-[#aa14f099] flex flex-col justify-center gap-2 p-4">
            {user.name ? (
              <tr>
                <td className="w-[5rem]">Name</td>

                <td className="w-[1rem]">:</td>

                <td className="text-gray-300">{searchedUser.name}</td>
              </tr>
            ) : null}

            <tr>
              <td className="w-[5rem]">Email</td>

              <td className="w-[1rem]">:</td>

              <td className="text-gray-300">
                {searchedUser.email
                  ? ` ` + searchedUser.email
                  : "Field not added"}
              </td>
            </tr>

            {user.branch ? (
              <tr>
                <td className="w-[5rem]">Branch </td>

                <td className="w-[1rem]">:</td>

                <td className="text-gray-300">{searchedUser.branch}</td>
              </tr>
            ) : null}

            {user.year_of_passing ? (
              <tr>
                <td className="w-[5rem]">Year of Passing</td>

                <td className="w-[1rem]">:</td>

                {/* <td className="text-gray-300">{year}</td> */}
              </tr>
            ) : null}

            {user.contact_no ? (
              <tr>
                <td className="w-[5rem]">Contact Number </td>

                <td className="w-[1rem]">:</td>

                <td className="text-gray-300">{searchedUser.contact_no}</td>
              </tr>
            ) : null}

            {user.about ? (
              <tr>
                <td className="w-[5rem]">About </td>

                <td className="w-[1rem]">:</td>

                <td className="text-gray-300">{searchedUser.about}</td>
              </tr>
            ) : null}
          </table>
        </div>
      )}
    </div>
  );
}

export default SearchProfile;
