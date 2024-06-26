import "./App.css";
import Navbar from "./compoent/Navbar";
import { Route, Routes } from "react-router-dom/dist";
import Home from "./compoent/Home";
import Login from "./compoent/Login";
import Protected from "./constrants/ProtectedRoute";
import DashBoard from "./compoent/DashBoard";
import MyProfile from "./compoent/Pofile";
import ConfessAnonymously from "./compoent/ConfessAnonymously";
import AllUsers from "./compoent/AllUser";
import ConfessWrite from "./compoent/ConfessWrite";
import SingleUser from "./compoent/SingleUser";
import VerifyOtp from "./compoent/VerifyOtp";
import NotFound from "./compoent/NotFound";
import AboutUs from "./compoent/About";
import ContactUs from "./compoent/Contact";

function App() {
  return (
 <div className=" min-h-fit w-full ">
  {/* navbar */}
  <Navbar/>

{/* routes */}

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/verify-otp" element={<VerifyOtp/>}/>
  <Route path="/about" element={<AboutUs/>}/>
  <Route path="/contact" element={<ContactUs/>} />
  

  <Route path='/dashboard' element={<Protected Component={DashBoard}/>}>
          <Route path='' element={<Protected Component={MyProfile}/>}/>
          {/* <Route path='friends' element={<Protected Component={Friends}/>}/> */}
          <Route path='allusers' element={<Protected Component={AllUsers}/>}/>
          <Route path='confess-anonymously' element={<Protected  Component={ConfessAnonymously}/>}/>
          <Route path='confess/:id' element={<Protected  Component={ConfessWrite}/>}/>
          <Route path='details/:id' element={<Protected  Component={SingleUser}/>}/>
          </Route>

          <Route path="*" element={<NotFound/>}/>        
      
</Routes>
 </div>
  );
}

export default App;
