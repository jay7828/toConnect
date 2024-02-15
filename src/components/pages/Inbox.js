import {React , useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function Inbox(){
  const { isLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return(
    <div>
      Inbox
    </div>
  )
}

export default Inbox;