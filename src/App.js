import "./App.css";
import Home from "./components/Home";
import Parentpage from "./components/Parentpage";
import { Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Parentpage />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          {/* <Route path='*' element={<NotFound />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
