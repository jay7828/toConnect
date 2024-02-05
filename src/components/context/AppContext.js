import { createContext, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [sidebar, setSidebar] = useState(false);
  const [dashboardPanel, setDashboardPanle] = useState(false);
  const [loading, setLoading] = useState(true);
  const [tempSearchRes, setTempSearchRes] = useState([]);
  const [pId, setPId] = useState(1);
  const [searchRes, setSearchRes] = useState([]);

  async function fetchProjects() {
    console.log("fetch function called.");
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
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
