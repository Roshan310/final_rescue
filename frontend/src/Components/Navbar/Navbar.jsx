import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky z-50	 top-0 left-0 right-0 w-screen h-[10rem] flex justify-center items-center  bg-[#0f172a] ">
      <div className="flex justify-center items-center gap-4">
        <Link to="/home">
          <button>
            <span className="bg-blue-500 hover:bg-blue-700 text-2xl text-rose-50 font-extrabold px-8 rounded">
              Home
            </span>
          </button>
        </Link>
        <Link to="/login">
          {" "}
          <button>
            <span className="bg-blue-500 hover:bg-blue-700 text-2xl text-rose-50 font-extrabold px-8 rounded">
              Login/Register
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
