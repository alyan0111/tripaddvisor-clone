import React from 'react'

export default function Spring() {
  return (
    <div className='flex flex-col md:flex-row justify-evenly mt-4 text-sm'>
      <ul className='gap-3 md:gap-1 flex flex-col'>
        <a href='#' className='hover:underline'><li>Nashville</li></a>
        <a href='#' className='hover:underline'><li>Charleston</li></a>
        <a href='#' className='hover:underline'><li>Sedona</li></a>
        <a href='#' className='hover:underline'><li>New Orleans</li></a>
        <a href='#' className='hover:underline'><li>Washington DC</li></a>
      </ul>

      <ul className='gap-3 md:gap-1 flex flex-col'>
        <a href='#' className='hover:underline'><li>Rome</li></a>
        <a href='#' className='hover:underline'><li>Prague</li></a>
        <a href='#' className='hover:underline'><li>Santorini</li></a>
        <a href='#' className='hover:underline'><li>Budapest</li></a>
        <a href='#' className='hover:underline'><li>Copenhagen</li></a>
      </ul>

      <ul className='gap-3 md:gap-1 flex flex-col'>
        <a href='#' className='hover:underline'><li>Costa Rica</li></a>
        <a href='#' className='hover:underline'><li>Maui</li></a>
        <a href='#' className='hover:underline'><li>Belize</li></a>
        <a href='#' className='hover:underline'><li>Puerto Vallarta</li></a>
        <a href='#' className='hover:underline'><li>Cabo Sen Lucas</li></a>
      </ul>

      <ul className='gap-3 md:gap-1 flex flex-col'>
        <a href='#' className='hover:underline'><li>Tokyo</li></a>
        <a href='#' className='hover:underline'><li>Madrid</li></a>
        <a href='#' className='hover:underline'><li>Bermuda</li></a>
        <a href='#' className='hover:underline'><li>Maldives</li></a>
        <a href='#' className='hover:underline'><li>Mexico City</li></a>
      </ul>
    </div>
  )
}
