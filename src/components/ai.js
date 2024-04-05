import React from 'react';
import gai from '../assets/gai.png';
import { IoLocationSharp } from "react-icons/io5";

export default function Ai() {
  return (
    <div className='mx-28  my-16 rounded-lg bg-gradient-to-r from-slate-200 to-purple-300  relative h-[30rem] w-[84%] '>
      <img src={gai} alt='ai' className='absolute top-0 left-0 z-0 w-full h-full' />
      <div className='block z-10 mx-44 my-20'>
        <p className='text-xs text-[rgb(48,29,73)]'>Powered by AI <span className='bg-white px-1 py-1 text-black font-bold text-sm rounded-sm'>BETA</span></p>
        <p className='text-5xl font-extrabold size-[50%] text-[rgb(48,29,73)]'>Build a trip in minutes</p>
        <p className='text-[rgb(48,29,73)] text-2xl font-semibold size-[50%]'>Get a personalized itinerary just for you, guided by traveler tips and reviews.</p>
      <button className='bg-[rgb(48,29,73)] text-white flex items-center rounded-full p-4 m-2'><span><IoLocationSharp /></span>Start a trip with AI</button>
      </div>
      
    </div>
  );
}
