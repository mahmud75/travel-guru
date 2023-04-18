import React, { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import Svg from "../Shared/Others/Svg/Svg";

const Headers = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="fixed z-50 w-4/5  top-0 left-1/2 transform translate-x-[-50%] bg-transparent flex items-center justify-between">
        <div className="p-5 flex items-center gap-16 w-1/2">
          <Link to="/">
            <Svg></Svg>
          </Link>
          <input
            type="text"
            placeholder="Search your Destination..."
            className="w-3/5 h-12 px-16 hidden lg:block text-white text-lg py-5 bg-[rgba(255,255,255,0.2)] rounded"
          />
          <FaSearch className="text-2xl hidden lg:block text-white absolute top-10 left-56"></FaSearch>
        </div>
        <div className="hidden lg:block">
          <nav className="text-white  flex items-center gap-16 w-1/2 text-xl font-bold">
            <Link className="hover:text-[#F9A51A] duration-300">News</Link>
            <Link className="hover:text-[#F9A51A] duration-300">
              Destination
            </Link>
            <Link className="hover:text-[#F9A51A] duration-300">Blog</Link>
            <Link className="hover:text-[#F9A51A] duration-300">Contact</Link>
            <button className="bg-[#F9A51A] px-6 py-2 rounded-md hover:bg-[#f9a31ab6] hover:text-[#0000009b] duration-300 text-black">
              Login
            </button>
          </nav>
        </div>
        <div onClick={() => setOpen(!open)} className="text-white  lg:hidden">
          {!open && <FaBars className="text-4xl"></FaBars>}
        </div>
      </div>
      <div
        className={`w-full h-[100vh] absolute right-[-200%] ${
          open ? "right-[0]" : "right-[-200%]"
        } bg-[#36615ee6] z-[999] duration-500 ease-in-out`}
      >
        <div className="w-4/5 h-4/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <form className="mb-8">
            <input
              type="text"
              placeholder="Search your Destination..."
              className="w-1/2 h-12 px-4 text-white text-lg py-5 bg-[rgba(255,255,255,0.2)] rounded"
            />
            <FaSearch className="text-5xl p-2 bg-[#ffffff75] text-white absolute top-0 right-[50%] rounded-e-lg"></FaSearch>
          </form>
          <nav className="text-white  flex  flex-col gap-5 w-1/2 text-xl font-bold">
            <Link className="hover:text-[#F9A51A] duration-300">News</Link>
            <Link className="hover:text-[#F9A51A] duration-300">
              Destination
            </Link>
            <Link className="hover:text-[#F9A51A] duration-300">Blog</Link>
            <Link className="hover:text-[#F9A51A] duration-300">Contact</Link>
            <button className="bg-[#F9A51A] px-6 py-2 rounded-md hover:bg-[#f9a31ab6] hover:text-[#0000009b] duration-300 text-black">
              Login
            </button>
            <div
              onClick={() => setOpen(!open)}
              className="text-5xl text-white absolute top-0 right-0"
            >
              {open && <HiX></HiX>}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Headers;
