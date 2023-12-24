import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cards from "../Card/Cards";
import LocationComponent from "../Location/LocationComponent";

function Home() {
  const notify = () => toast("Warning");
  return (
    <div className="w-[1180px] text-justify mx-auto h-full mt-6"> 
        <LocationComponent/>
        <br></br>
         <div className="w-full text-center">
         <button onClick={notify} className="bg-red-500 hover:bg-blue-500 text-[40px] text-rose-50 font-extrabold px-8 rounded">
            Emergency
        </button> 
        <ToastContainer />
        </div>
        <br></br>
        <Cards />
    </div>
  );
}

export default Home;
