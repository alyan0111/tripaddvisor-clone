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
import Carousel1 from '../components/carousels/carousel1'
import Carousel2 from "../components/carousels/carousel2";

export default function Home() {
  const [section, setSection] = useState("Search All");
  const placeholderText =
    section === "Search All"
      ? "Places to go, Things to do, hotels..."
      : section === "Restaurants" ? "Restaurant or Destination"
      : section === "Hotels" ? "Hotel name and destination"
      : section === "ToDo" ? "Attraction, activity and destination"
      : section === "Rentals" ? "Destinations"
      : section;
      
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <div>
        {section === "Search All" &&
          (() => {
            return <p className="text-5xl font-extrabold my-11">Where To?</p>;
          })()}
        {section === "Hotels" &&
          (() => {
            return (
              <p className="text-5xl font-extrabold my-11">
                Stay somewhere great
              </p>
            );
          })()}
        {section === "ToDo" &&
          (() => {
            return (
              <p className="text-5xl font-extrabold my-11">Do something fun</p>
            );
          })()}
        {section === "Restaurants" &&
          (() => {
            return (
              <p className="text-5xl font-extrabold my-11">
                Find places to eat
              </p>
            );
          })()}
        {section === "Rentals" &&
          (() => {
            return (
              <p className="text-5xl font-extrabold my-11">
                Explore places to rent
              </p>
            );
          })()}
      </div>

      <div className="flex space-x-7">
        <Link
          className="flex items-center text-lg font-semibold hover:border-b-2 hover:border-b-slate-700"
          style={{
            borderBottom:
              section === "Search All" ? "3px solid black" : "black",
          }}
          onClick={() => {
            setSection("Search All");
          }}
        >
          <span className="text-2xl">
            <RiHome2Line />
          </span>
          Search All
        </Link>
        <Link
          className="flex items-center text-lg font-semibold hover:border-b-2 hover:border-b-slate-700 "
          style={{
            borderBottom: section === "Hotels" ? "3px solid black" : "black",
          }}
          onClick={() => {
            setSection("Hotels");
          }}
        >
          <span>
            <BiHotel />
          </span>
          Hotels
        </Link>
        <Link
          className="flex items-center text-lg font-semibold hover:border-b-2 hover:border-b-black"
          style={{
            borderBottom: section === "ToDo" ? "3px solid black" : "black",
          }}
          onClick={() => {
            setSection("ToDo");
          }}
        >
          <span>
            <RiTicket2Line />
          </span>
          Things to Do
        </Link>
        <Link
          className="flex items-center text-lg font-semibold hover:border-b-2 hover:border-b-slate-700"
          style={{
            borderBottom:
              section === "Restaurants" ? "3px solid black" : "black",
          }}
          onClick={() => {
            setSection("Restaurants");
          }}
        >
          <span>
            <RiRestaurant2Fill />
          </span>
          Restaurants
        </Link>
        <Link
          className="flex items-center text-lg font-semibold hover:border-b-2 hover:border-b-slate-700"
          style={{
            borderBottom: section === "Rentals" ? "3px solid black" : "black",
          }}
          onClick={() => {
            setSection("Rentals");
          }}
        >
          <span>
            <TbHomeShare />
          </span>
          Vacation Rentals
        </Link>
      </div>
     <div className="flex items-center  border-t border-l border-r rounded-full border-gray-500 shadow-xl mt-5">
              <span className="text-2xl m-2">
                <RiSearchLine />
              </span>
              <input
                type="text"
                placeholder={placeholderText}
                
                className="focus:outline-none w-[100vh]"
              />
              <button className="bg-[rgb(52,224,161)] rounded-full m-1 py-3 px-6 ">
                Search
              </button>
      </div>
    <Ai/>
    <Carousel1/>
    <Carousel2/>
    </div>
    
  );
}
