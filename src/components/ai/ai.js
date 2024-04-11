import React from 'react';
import gai from '../../assets/images/gai.png';
import gai2 from '../../assets/images/gai2.png';
import { IoLocationSharp } from "react-icons/io5";

export default function Ai() {
  return (
    <div className='my-16 rounded-lg bg-gradient-to-r from-slate-200 to-purple-300 relative h-full'>
      <img src={gai} alt='ai' className='absolute hidden md:block top-0 left-0 z-0 w-full h-full object-cover' />
      <div className='flex flex-col items-center justify-center md:block z-10 mx-2 md:mx-16 lg:mx-44 mt-5 md:my-20'>
        <p className='text-xs text-[rgb(48,29,73)]'>Powered by AI <span className='bg-white sm:px-1 sm:py-1 text-black font-semibold sm:font-bold text-sm rounded-sm'>BETA</span></p>
        <p className='text-3xl sm:text-5xl md:text-5xl font-extrabold md:size-[50%] text-[rgb(48,29,73)]'>Build a trip in minutes</p>
        <p className='text-[rgb(48,29,73)] text-base sm:text-xl md:text-2xl font-semibold text-balance text-center mt-2 md:size-[50%]'>Get a personalized itinerary just for you, guided by traveler tips and reviews.</p>
        <button className='bg-[rgb(48,29,73)] text-white flex items-center rounded-full p-3 md:p-4 m-2'><span><IoLocationSharp /></span>Start a trip with AI</button>
      <img src={gai2} alt='ai' className='  md:hidden h-[8%]' />
      </div>
    </div>
  );
}
