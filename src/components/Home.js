import React from "react";
import "./css files/Home.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import HomeMainContent from "./HomeMainContent";

function Home() {

  return (
    <div className="main-home-bg pt-10 min-h-[100vh]">
      <div className="gradient-1"></div>
      <div className="gradient-2"></div>
      <div className="gradient-3"></div>
      <div className="gradient-4"></div>

      <Navbar />

      <HomeMainContent />

      <AboutUs />

      <Footer />

    </div>
  );
}

export default Home;
