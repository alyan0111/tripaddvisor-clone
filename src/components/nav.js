import React from "react";
import t from "./t.svg";
import { GrLanguage } from "react-icons/gr";

export default function Nav() {
  return (
    <div className="flex justify-evenly shadow-lg fixed top-0 w-full bg-white z-10">
      <a href="https://www.tripadvisor.com/" className="mt-3">
        <img src={t} alt="logo" className="h-10" />
      </a>

      <ul className="flex space-l-2">
        <li>
          <button className="p-2 hover:bg-slate-200 hover:rounded-3xl font-semibold m-4">
            Discover
          </button>
        </li>
        <li>
          <button className="p-2 hover:bg-slate-200 hover:rounded-3xl font-semibold m-4 ">
            Trips
          </button>
        </li>
        <li>
          <button className="p-2 hover:bg-slate-200 hover:rounded-3xl font-semibold m-4 ">
            Review
          </button>
        </li>
        <li>
          <button className="p-2 hover:bg-slate-200 hover:rounded-3xl font-semibold m-4 ">
            More
          </button>
        </li>
      </ul>
      <div className="flex ">
        <button className="flex px-4  hover:bg-slate-200 hover:rounded-3xl m-4 items-center font-semibold">
          <GrLanguage /> 
          |USD
        </button>
        <button className="px-3 bg-black rounded-3xl text-white font-bold hover:bg-zinc-800 hover:rounded-3xl m-4">
          Sign In
        </button>
      </div>
    </div>
  );
}
