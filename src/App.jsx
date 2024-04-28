import "./App.css";
import Navbar from "./compoent/Navbar";
import { Route, Routes } from "react-router-dom/dist";
import Home from "./compoent/Home";
import Login from "./compoent/Login";
import Protected from "./constrants/ProtectedRoute";
import DashBoard from "./compoent/DashBoard";
import MyProfile from "./compoent/Pofile";

function App() {
  return (
 <div className="h-full ">
  {/* navbar */}
  <Navbar/>

{/* routes */}

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>

  <Route path='/dashboard' element={<Protected Component={DashBoard}/>}>
          <Route path='' element={<Protected Component={MyProfile}/>}/>
          {/* <Route path='friends' element={<Protected Component={Friends}/>}/>
          <Route path='find-people' element={<Protected Component={AllUsers}/>}/> */}
          {/* <Route path='confess-anonymously' element={<Protected  Component={ConfessAnonymously}/>}/> */}
          </Route>
      
</Routes>
 </div>
  );
}

export default App;
