import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log("Dark mode toggled: ",!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };
  return (
    <div className=' flex justify-between mt-5 mx-[3rem] items-center '>
        <h1 className=' text-[1.6rem] font-Far font-semibold '>Blog <span className='text-[#5dee7f] '> Website</span></h1>
        <div className=" flex space-x-4">
          <Link className='text-[1.1rem]   font-semibold hover:bg-[#5dee7f] hover:py-1 hover:px-5 hover:rounded-md hover:text-white' to='/'>Home</Link>
          <Link className='text-[1.1rem]   font-semibold hover:bg-[#5dee7f] hover:py-1 hover:px-5 hover:rounded-md hover:text-white' to='/blog'>Blog</Link>
          <Link className='text-[1.1rem]   font-semibold hover:bg-[#5dee7f] hover:py-1 hover:px-5 hover:rounded-md hover:text-white' to='/about'>About</Link>
          <Link className='text-[1.1rem]   font-semibold hover:bg-[#5dee7f] hover:py-1 hover:px-5 hover:rounded-md hover:text-white' to='/Categories'>Categories</Link>
          <Link className='text-[1.1rem]   font-semibold hover:bg-[#5dee7f] hover:py-1 hover:px-5 hover:rounded-md hover:text-white' to='/contect'>Contect</Link>
        

        </div>
        <button
          onClick={toggleDarkMode}
          className="py-2 px-5 text-white dark:text-black bg-gray-800 dark:bg-white rounded-md transition duration-300 ease-in-out"
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>

    </div>
  )
}
