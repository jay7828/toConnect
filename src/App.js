import "./App.css";
import Home from "./components/pages/Home";
import Parentpage from "./components/pages/Parentpage";
import { Route, Routes, useSearchParams } from 'react-router-dom';
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import NotFound from "./components/pages/NotFound";
import DashBoardParent from "./components/pages/DashBoardParent";
import AddProjectTemplate from "./components/pages/AddProjectTemplate";
import { useContext, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { AppContext } from "./components/context/AppContext";
import ShowProject from "./components/pages/ShowProject";
import Profile from "./components/pages/Profile";
import Collaboration from "./components/pages/Collaboration";
import DashBoard from "./components/pages/DashBoard";
import Inbox from "./components/pages/Inbox";

function App() {
  const {setPId} = useContext(AppContext);
  // const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(()=>{
    if(location.pathname.includes("project")){
      const pId = location.pathname.split("/").at(-1);
      setPId(pId);
      // console.log(pId);
    }
  },[location.pathname, location.search]);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Parentpage />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<DashBoardParent />}>
            <Route index element={<DashBoard />} />
            <Route path="addproject" ele ment={<AddProjectTemplate />} />  
            <Route path="profile" element={<Profile />} />  
            <Route path="inbox" element={<Inbox />} />  
            <Route path="project/:projectId" element={<ShowProject />} />  
            <Route path="collaboration/:projectId" element={<Collaboration />} />  
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
