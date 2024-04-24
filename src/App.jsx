import "./App.css";
import Navbar from "./compoent/Navbar";
import { Route, Routes } from "react-router-dom/dist";
import Home from "./compoent/Home";
import Login from "./compoent/Login";

function App() {
  return (
 <div className="h-full ">
  {/* navbar */}
  <Navbar/>

{/* routes */}

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>

</Routes>
 </div>
  );
}

export default App;
