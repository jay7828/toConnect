import { createContext, useEffect, useState } from "react";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

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
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [searchedUser, setSearchedUser] = useState([]);
  const [collabMsg, setCollabMsg] = useState();
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if(parsedUser != user) setUser(parsedUser);
    }
  }, [localStorage.getItem("user")]);

  async function fetchUser(username) {
    console.log("Fetching User...");
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/api/users/profile/${username}`);
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
      const res = await axios.get(`${BASE_URL}/api/project/fetch`);
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
