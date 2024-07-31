import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='flex flex-wrap justify-between mt-5 mx-4 md:mx-[3rem] items-center'>
      <h1 className='text-[1.6rem] font-Far font-semibold'>
        Blog <span className='text-[#5dee7f]'>Website</span>
      </h1>
      <div className="flex flex-wrap space-x-4 mt-4 md:mt-0">
        <Link className='text-[1.1rem] font-semibold hover:bg-[#5dee7f] hover:py-1 hover:px-5 hover:rounded-md hover:text-white' to='/'>
          Home
        </Link>
        <Link className='text-[1.1rem] font-semibold hover:bg-[#5dee7f] hover:py-1 hover:px-5 hover:rounded-md hover:text-white' to='/blog'>
          Blog
        </Link>
        <Link className='text-[1.1rem] font-semibold hover:bg-[#5dee7f] hover:py-1 hover:px-5 hover:rounded-md hover:text-white' to='/about'>
          About
        </Link>
        <Link className='text-[1.1rem] font-semibold hover:bg-[#5dee7f] hover:py-1 hover:px-5 hover:rounded-md hover:text-white' to='/Categories'>
          Categories
        </Link>
        <Link className='text-[1.1rem] font-semibold hover:bg-[#5dee7f] hover:py-1 hover:px-5 hover:rounded-md hover:text-white' to='/contect'>
          Contect
        </Link>
      </div>
      <div className="mt-4 md:mt-0">
        <button className='py-2 px-5 text-white rounded-md bg-[#28a745] font-semibold'>
          Blog Website
        </button>
      </div>
    </div>
  );
}