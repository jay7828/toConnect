import "./App.css";
import Home from "./components/pages/Home";
import Parentpage from "./components/pages/Parentpage";
import { Route, Routes, useSearchParams } from 'react-router-dom';
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import NotFound from "./components/pages/NotFound";
import DashBoardTemplate from "./components/pages/DashBoardTemplate";
import DashBoardParent from "./components/pages/DashBoardParent";
import AddProjectTemplate from "./components/pages/AddProjectTemplate";
import { useContext, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { AppContext } from "./components/context/AppContext";
import ShowProject from "./components/pages/ShowProject";
import CollaborationTemplate from "./components/pages/CollaborationTemplate";
// import Collaboration from "./components/pages/Collaboration";

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
            <Route index element={<DashBoardTemplate />} />
            <Route path="addproject" element={<AddProjectTemplate />} />  
            <Route path="project/:projectId" element={<ShowProject />} />  
            <Route path="collaboration/:projectId" element={<CollaborationTemplate />} />  
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
