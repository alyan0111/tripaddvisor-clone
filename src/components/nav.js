import React, { useState } from "react";
import t from "./t.svg";
import { GrLanguage } from "react-icons/gr";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai"; 

export default function Nav() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" flex flex-wrap justify-between md:justify-evenly shadow-lg fixed top-0 w-full bg-white z-10 px-4">
      {/* SVG Menu Icon */}
      <div className="flex items-center">
        <button className="md:hidden hover:text-slate-200" onClick={toggleMenu}>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Logo */}
      <div className="flex justify-center items-center">
        <a href="https://www.tripadvisor.com/" className="mt-3 mx-auto">
          <img src={t} alt="logo" className="h-10" />
        </a>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full z-10 bg-white">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link
                className="p-2 hover:bg-slate-200 hover:rounded-3xl font-semibold m-2 md:m-4"
                onClick={toggleMenu}
                to="/discover"
              >
                Discover
              </Link>
            </li>
            <li>
              <Link
                className="p-2 hover:bg-slate-200 hover:rounded-3xl font-semibold m-2 md:m-4"
                onClick={toggleMenu}
                to="/trips"
              >
                Trips
              </Link>
            </li>
            <li>
              <Link
                className="p-2 hover:bg-slate-200 hover:rounded-3xl font-semibold m-2 md:m-4"
                onClick={toggleMenu}
                to="/reviews"
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                className="p-2 hover:bg-slate-200 hover:rounded-3xl font-semibold m-2 md:m-4"
                onClick={toggleMenu}
                to="/more"
              >
                More
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Desktop Menu */}
      <ul className="hidden md:flex flex-wrap justify-center items-center md:flex-nowrap space-x-2">
        <li>
          <Link className="p-2 hover:bg-slate-200 hover:rounded-3xl font-semibold m-2 md:m-4">
            Discover
          </Link>
        </li>
        <li>
          <Link className="p-2 hover:bg-slate-200 hover:rounded-3xl font-semibold m-2 md:m-4">
            Trips
          </Link>
        </li>
        <li>
          <Link className="p-2 hover:bg-slate-200 hover:rounded-3xl font-semibold m-2 md:m-4">
            Reviews
          </Link>
        </li>
        <li>
          <Link className="p-2 hover:bg-slate-200 hover:rounded-3xl font-semibold m-2 md:m-4">
            More
          </Link>
        </li>
      </ul>

      {/* Language and Currency Dropdown */}
      <div className="flex items-center">
        <div className="lg:flex hidden md:block">
          <button
            onClick={toggleDropdown}
            className="flex px-3 md:px-4 hover:bg-slate-200 hover:rounded-3xl m-2 md:m-4 items-center font-semibold"
          >
            <GrLanguage />
            |USD
          </button>
          {isDropdownOpen && (
            <div className="absolute top-10 right-0 bg-white border shadow-lg rounded-md">
              <button className="block w-full p-2 hover:bg-slate-200 hover:rounded-3xl">
                English | USD
              </button>
              <button className="block w-full p-2 hover:bg-slate-200 hover:rounded-3xl">
                Spanish | EUR
              </button>
              {/* Add more dropdown options as needed */}
            </div>
          )}
        </div>
        <Link 
          to="/signin"
          className="p-2 md:p-3 bg-black rounded-3xl text-white font-bold hover:bg-zinc-800 hover:rounded-3xl m-2 md:m-4"
        >
          <AiOutlineUser />
        </Link>
      </div>
    </div>
  );
}
