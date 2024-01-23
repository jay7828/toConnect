import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
    const [sidebar, setSidebar] = useState(false);
    const value = {
        sidebar,
        setSidebar,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
