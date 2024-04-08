import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );
  const [sidebar, setSidebar] = useState(false);
  const [dashboardPanel, setDashboardPanle] = useState(false);
  const [loading, setLoading] = useState(true);
  const [tempSearchRes, setTempSearchRes] = useState([]);
  const [pId, setPId] = useState(1);
  const [searchRes, setSearchRes] = useState([]);
    // Use useEffect to fetch user data from localStorage only once when the component mounts
    useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser); // Update user state with parsed user data
        } catch (error) {
          console.error('Error parsing user data:', error);
          // Handle parsing error gracefully, e.g., set user state to null or a default value
          setUser(null); // Set user state to null
        }
      }
    }, []); // Empty dependency array ensures this effect runs only once after initial render
  
    // Define user state using useState hook, initialized with null or a default value
    const [user, setUser] = useState(null);
  const [searchedUser, setSearchedUser] = useState([]);
  const [collabMsg, setCollabMsg] = useState();
  const [sent, setSent] = useState(false);

  async function fetchUser(username) {
    console.log("Fetching User...");
    setLoading(true);
    try {
      const res = await axios.get(
        `https://toconnect.onrender.com/api/users/profile/${username}`
      );
      const data = res.data;
      setSearchRes(data.data);
      setTempSearchRes(data.data);
      setLoading(false);
    } catch (error) {
      console.log("Error occurred during fetch call!");
      console.error(error);
      setLoading(false);
    }
  }

  async function fetchProjects() {
    console.log("Fetching Projects...");
    setLoading(true);
    try {
      const res = await axios.get(
        "https://toconnect.onrender.com/api/project/fetch"
      );
      const data = res.data;
      setSearchRes(data.data);
      setTempSearchRes(data.data);
      setLoading(false);
    } catch (error) {
      console.log("Error occurred during fetch call!");
      console.error(error);
      setLoading(false);
    }
  }

  const value = {
    fetchUser,
    searchedUser,
    setSearchedUser,
    sidebar,
    setSidebar,
    isLoggedIn,
    setIsLoggedIn,
    dashboardPanel,
    setDashboardPanle,
    loading,
    setLoading,
    pId,
    setPId,
    tempSearchRes,
    setTempSearchRes,
    fetchProjects,
    searchRes,
    setSearchRes,
    user,
    setUser,
    collabMsg,
    setCollabMsg,
    sent,
    setSent,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
