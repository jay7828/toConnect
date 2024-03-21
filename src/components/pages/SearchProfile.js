import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function SearchProfile(){
  const location = useLocation();
  const [user, setUser] = useState([]);

  async function fetchUser(){
    console.log("Fetching User...");
    setLoading(true);
    let username = location.pathname.split("/").at(-1)
    console.log(username);
    const response = await fetch(`https://toconnect.onrender.com/api/users/profile/${username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
      }),
    });

    console.log(response);
    
    if (response.ok) {
      const json = await response.json();
      setUser(json.userdata);

      if (json.success) {
        // navigate("/dashboard");
        // toast.success("Login Successful!");
      } else {
        alert("Enter Valid Email and Password");
      }
    } else {
      console.error("Failed to fetch data:", response.statusText);
    }

    setLoading(false);
  }

  useEffect(()=>{
    fetchUser();
  });

  return(<div></div>);
}

export default SearchProfile;