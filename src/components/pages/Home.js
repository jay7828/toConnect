import React , {useContext} from "react";
import "../css files/Home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import HomeMainContent from "./HomeMainContent";
import Sidebar from "./Sidebar";
import { AppContext } from "../context/AppContext";

function Home() {
  const {sidebar} = useContext(AppContext);

  return (
    <div className="main-home-bg pt-10 min-h-[100vh]">
      <div className="gradient-1"></div>
      <div className="gradient-2"></div>
      <div className="gradient-3"></div>
      <div className="gradient-4"></div>

      <Navbar />

      {sidebar ? <Sidebar /> : <div className="hidden"></div>}

      <HomeMainContent />

      <AboutUs />

      <Footer />

    </div>
  );
}

export default Home;
