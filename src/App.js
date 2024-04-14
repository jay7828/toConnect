import Home from "./components/pages/Home";
import Parentpage from "./components/pages/Parentpage";
import { Route, Routes } from 'react-router-dom';
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import NotFound from "./components/pages/NotFound";
import DashBoard from "./components/pages/DashBoard";
import ShowProject from "./components/pages/ShowProject";
import Profile from "./components/pages/Profile";
import Collaboration from "./components/pages/Collaboration";
import Inbox from "./components/pages/Inbox/Inbox";
import AddProject from "./components/pages/AddProject";
import DashBoardHome from "./components/pages/DashBoardHome";
import CollabMessage from "./components/pages/Inbox/CollabMessage";
import SearchProfile from "./components/pages/SearchProfile";
import UpdateProject from "./components/pages/UpdateProject";
import UpdateProfile from "./components/pages/UpdateProfile";

function App() {

  return (
    <div>
      <Routes>

        <Route path='/' element={<Parentpage />}>

          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

          <Route path='/dashboard' element={<DashBoard />}>

            <Route index element={<DashBoardHome />} />
            <Route path="addproject" element={<AddProject />} />  
            <Route path="profile" element={<Profile />} />  
            <Route path="profile/update" element={<UpdateProfile />} />  
            <Route path="profile/:username" element={<SearchProfile />} />  
            <Route path="inbox" element={<Inbox />} />  

            <Route path="inbox" element={<Inbox />} />  
            <Route path="inbox/:lid" element={<CollabMessage />} />    

            <Route path="project/:projectId" element={<ShowProject />} />  
            <Route path="project/update/:projectId" element={<UpdateProject />} />  
            <Route path="collaboration/:projectId" element={<Collaboration />} />

          </Route>

          <Route path='*' element={<NotFound />} />

        </Route>

      </Routes>
    </div>
  );
}

export default App;
