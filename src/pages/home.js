import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  RiHome2Line,
  RiTicket2Line,
  RiRestaurant2Fill,
  RiSearchLine,
} from "react-icons/ri";
import { BiHotel } from "react-icons/bi";
import { TbHomeShare } from "react-icons/tb";
import Ai from "../components/ai";
import Carousel1 from '../components/carousels/carousel1';
import Carousel2 from "../components/carousels/carousel2";

export default function Home() {
  const [section, setSection] = useState("Search All");

  const placeholderText = {
    "Search All": "Places to go, Things to do, hotels...",
    "Restaurants": "Restaurant or Destination",
    "Hotels": "Hotel name and destination",
    "ToDo": "Attraction, activity and destination",
    "Rentals": "Destinations",
  }[section];

  return (
    <div className="flex flex-col justify-center items-center mt-20 px-4 lg:px-32">
      
      {/* Hide this div on small and extra-small screens */}
      <div className="hidden sm:block">
        <p className="text-5xl font-extrabold my-11">
          {section === "Search All" && "Where To?"}
          {section === "Hotels" && "Stay somewhere great"}
          {section === "ToDo" && "Do something fun"}
          {section === "Restaurants" && "Find places to eat"}
          {section === "Rentals" && "Explore places to rent"}
        </p>
      </div>

      {/* Navigation Links with Horizontal Scrollbar */}
      <div className="flex overflow-x-auto space-x-7 mb-8 max-w-full scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
        {[
          { label: "Search All", icon: <RiHome2Line /> },
          { label: "Hotels", icon: <BiHotel /> },
          { label: "ToDo", icon: <RiTicket2Line /> },
          { label: "Restaurants", icon: <RiRestaurant2Fill /> },
          { label: "Rentals", icon: <TbHomeShare /> },
        ].map((item) => (
          <Link
            key={item.label}
            className={`flex items-center text-lg font-semibold hover:border-b-2 ${
              section === item.label ? "hover:border-b-slate-700 border-b-2 border-slate-700" : "hover:border-b-black"
            }`}
            onClick={() => setSection(item.label)}
          >
            <span className="text-2xl">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </div>

      {/* Search Input */}
      <div className="flex flex-col md:flex-row items-center border-t-2 border-l-2 border-r-2 w-[85%] rounded-xl md:rounded-full border-gray-300 shadow-xl mt-5">
      <div className="flex items-center w-full">
          <span className="text-2xl m-2">
            <RiSearchLine />
          </span>
          <input
            type="text"
            placeholder={placeholderText}
            className="focus:outline-none flex-grow"
          />
        </div>
        <div className="w-[95%] border-t md:hidden border-gray-300"></div>
        <button className="bg-[rgb(52,224,161)] rounded-full w-[95%] md:w-auto my-4 md:m-1 py-3 px-6">
          Search
        </button>
      </div>

      {/* Additional Components */}
      <Ai />
      <Carousel1 />
      <Carousel2 />
    </div>
  );
}
