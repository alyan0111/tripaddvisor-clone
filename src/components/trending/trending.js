import React, { useState } from 'react';
import Spring from './spring';
import Summer from './summer';
import { Link } from 'react-router-dom';

export default function Trending() {
    const [section, setSection] = useState('spring');
    return (
        <div className='mt-14'>
            <div className='lg:ml-24'>
            <h1 className='font-bold text-3xl  '>Trending in Travel</h1>
            <ul className='flex overflow-x-auto space-x-7 mt-3 max-w-full scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200'>
                <Link onClick={() => { setSection('spring'); }} className={`font-bold hover:border-b-2 text-nowrap hover:text-neutral-600 ${section === 'spring' ? "hover:border-b-black border-b-2 border-b-black" : "hover:border-b-black"}`}>Spring Destinations</Link>
                <Link onClick={() => { setSection('summer'); }} className={`font-bold hover:border-b-2 text-nowrap hover:text-neutral-600 ${section === 'summer' ? "hover:border-b-black border-b-2 border-b-black " : "hover:border-b-black"}`}>2024 Summer Olympics</Link>
            </ul>
            </div>

            {section === 'spring' && <Spring />}
            {section === 'summer' && <Summer />}
        </div>
    );
}
