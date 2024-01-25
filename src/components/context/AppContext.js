import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [sidebar, setSidebar] = useState(false);
  const [dashboardPanel, setDashboardPanle] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const value = {
    sidebar,
    setSidebar,
    isLoggedIn,
    setIsLoggedIn,
    dashboardPanel,
    setDashboardPanle,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
