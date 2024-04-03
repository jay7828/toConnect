import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AppContextProvider from "./components/context/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="1063626587554-t35p4t5vfu1a2ier97tch4u74qaboghs.apps.googleusercontent.com">
    <BrowserRouter>
      <Toaster />
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </GoogleOAuthProvider>
);
