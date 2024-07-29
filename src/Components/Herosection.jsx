import React from 'react';
import Blog from '../assets/Blog.jpg';

export default function Herosection() {
  return (
    <div className="flex flex-col lg:flex-row justify-between mx-6 lg:mx-12 items-center mt-12 lg:mt-24 space-y-6 lg:space-y-0 lg:space-x-12">
      <div className="space-y-4 lg:space-y-6 px-4 lg:px-0">
        <h1 className="text-3xl lg:text-5xl font-Far font-semibold">
          Discover the World of <span className="text-[#30aa4c]">Blogging</span>
        </h1>
        <p className="text-base lg:text-lg">
          Welcome to our Blog Website! Dive into a universe of captivating content, insightful articles, and expert tips that keep you informed and inspired.
        </p>
        <p className="text-base lg:text-lg">
          Whether you're a seasoned reader or a curious newbie, our blog offers something for everyone. Explore topics ranging from travel and lifestyle to technology and education. Join us on this exciting journey and enrich your mind with diverse perspectives and engaging stories.
        </p>
        <button className="py-2 px-4 lg:py-3 lg:px-6 text-white rounded-md bg-[#28a745] font-semibold">
          Explore Our Blog
        </button>
      </div>
      <div className="flex-shrink-0">
        <img className="w-full lg:w-[550px] rounded-md h-auto lg:h-[400px]" src={Blog} alt="Blog" />
      </div>
    </div>
  );
}