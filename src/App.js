import "./App.css";
import Home from "./components/pages/Home";
import Parentpage from "./components/pages/Parentpage";
import { Route, Routes } from 'react-router-dom';
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import NotFound from "./components/pages/NotFound";
import DashBoardTemplate from "./components/pages/DashBoardTemplate";
import DashBoardParent from "./components/pages/DashBoardParent";
import AddProjectTemplate from "./components/pages/AddProjectTemplate";

function App() {
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
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
