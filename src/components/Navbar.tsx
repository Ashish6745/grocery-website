import React from "react";
import { FaMicrophone, FaSearch } from "react-icons/fa";
import { FaBell, FaCartPlus, FaLocationDot } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="h-24 sm:h-20 md:h-24 lg:h-28 xl:h-32 bg-teal-600 sm:text-sm md:text-xl lg:text-2xl ">
      <div className="flex items-center justify-around p-2 text-white lg:h-14 md:h-12 sm:h-10 ">
        <FaLocationDot />
        <input
          className="w-[50%]  sm:w-[30%] md:w-[40%] lg:w-[50%] xl:w-[60%]  rounded-md outline-none border-none text-teal-600 font-medium text-xs p-2"
          placeholder="Harhwa Fatak Nirala Nagar, GorakhPur"
        />
        <div className="flex flex-row items-center justify-between w-[10%] p-2">
          <FaBell  />
          <FaCartPlus />
        </div>
      </div>
      <div className="  text-white flex items-center justify-center  lg:h-14 md:h-12 sm:h-10  ">
        <div className="w-[50%] sm:w-[30%] md:w-[40%] lg:w-[50%] xl:w-[60%] flex items-center justify-around bg-white rounded-md text-teal-600 font-bold mr-20 ">
          <FaSearch />
          <input
            className="w-[90%]  outline-none border-none font-medium text-xs p-2 rounded-md"
            placeholder="search Groceries"
          />
        </div>
        <FaMicrophone  className=""/>
      </div>
    </div>
  );
}

export default Navbar;
