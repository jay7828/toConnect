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
import { useEffect } from "react";
import ShowProject from "./components/pages/ShowProject";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(()=>{
    if(location.pathname.includes("project")){
      const projectId = location.pathname.split("/").at(-1);
    }
    console.log(projectId);
  });

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
            <Route path="project:projectId" element={<ShowProject />} />  
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
