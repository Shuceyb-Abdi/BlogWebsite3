import React from 'react';
import img1 from '../assets/travel.avif';
import img2 from '../assets/travelone.avif';
import img3 from '../assets/traveltwo.avif';

export default function About() {
  return (
    <div className='flex flex-col lg:flex-row mt-[14rem] mx-4 lg:mx-[2.7rem] space-y-5 lg:space-y-0 lg:space-x-5 relative'>
      <div className="absolute left-[50%] transform -translate-x-1/2 lg:left-[29rem] lg:top-[-10rem] my-[3rem] text-center lg:text-left">
        <h1 className='text-[2rem] lg:text-[3rem] font-Far'>
          About <span className='text-[#30aa4c]'>Us</span>
        </h1>
      </div>
      <div className="space-y-7 pt-[3rem] lg:pt-0 text-center lg:text-left">
        <h1 className='text-[2rem] lg:text-[2.8rem] font-Far font-semibold'>
          Welcome to Blog <span className='text-[#30aa4c]'>Website</span>
        </h1>
        <p className='text-gray-600'>
          Our blog website is built using React.js, a powerful JavaScript library for building user interfaces. We leverage the flexibility and efficiency of React to deliver a seamless and interactive experience for our readers. From dynamic content updates to a responsive design, our platform ensures that you get the best possible browsing experience whether you're on a desktop or mobile device. Join us as we continue to innovate and bring you the latest stories, tips, and adventures from around the world.
        </p>
        <button className='py-2 px-5 text-white rounded-md bg-[#28a745] font-semibold'>
          Join Our Journey
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-1">
        <div className="row-span-1 md:row-span-2 lg:row-span-7 w-full lg:w-[300px] h-[200px] md:h-[404px] bg-blue-400 rounded-md">
          <img className='h-full w-full object-cover object-center rounded-md' src={img1} alt="Travel 1" />
        </div>
        <div className="col-span-1 w-full lg:w-[300px] h-[200px] bg-blue-400 rounded-md">
          <img className='h-full w-full object-cover object-center rounded-md' src={img2} alt="Travel 2" />
        </div>
        <div className="col-span-1 w-full lg:w-[300px] h-[200px] bg-blue-400 rounded-md">
          <img className='h-full w-full object-cover object-center rounded-md' src={img3} alt="Travel 3" />
        </div>
      </div>
    </div>
  );
}