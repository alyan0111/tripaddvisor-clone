import React from 'react';
import badge from '../carousels/badge.svg';
import image from './image.png';

export default function Awards() {
  return (
    <div className='bg-[#fff7e1] flex flex-col h-auto sm:flex-row sm:justify-start md:justify-center items-center mt-8'>
      <div className='md:size-[30%] sm:size-auto size-[60%]   items-center justify-center sm:justify-start sm:items-start flex flex-col'>
        <img src={badge} alt='logo' className=' lg:w-20 lg:h-20 mb-4'/>
        <h1 className='font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-wrap'>
          Travelers' Choice Awards Best of the Best
        </h1>
        <p className='text-sm md:text-base lg:text-lg '>
          Among our top 1% of places, stays, eats, and experiences—decided by you.
        </p>
        <button className='rounded-full bg-neutral-900 p-3 hover:bg-neutral-600 text-white mt-4'>
          See the winners
        </button>
      </div>
      
        <img 
          src={image} 
          alt='award' 
          className='md:w-[50%]  overflow-hidden '
        />
    </div>
  )
}
