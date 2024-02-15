import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  function toHomePage() {
    navigate("/");
  }

  return (
    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <h1>404</h1>
          <h2>Page not found</h2>
        </div>
        <a onClick={toHomePage}>Homepage</a>
      </div>
    </div>
  );
};

export default NotFound;
