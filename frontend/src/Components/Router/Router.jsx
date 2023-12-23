import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Homepage/Home";
import Login from "../Login/Login";
import Register from "../Login/Register";
import Cards from "../Card/Cards";
import LocationComponent from "../Location/LocationComponent";
// import Map from "../Map/Map";


const Router = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/location" element={<LocationComponent />} />
        {/* <Route path= "/map" element={<Map/>}/> */}
      </Routes>
    </div>
  );
};

export default Router;
