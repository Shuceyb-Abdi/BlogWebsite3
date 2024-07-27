import React from 'react'
import Blog from '../assets/Blog.jpg'

export default function Herosection() {
  return (
    <div className=' flex justify-between mx-[3rem] items-center mt-[4.6rem] space-x-7 '>
       <div className=" space-y-5">
       <h1 className=' text-[2.8rem] font-Far font-semibold 
       '>Discover the World of <span className='text-[#30aa4c] '> Blogging</span></h1>

       <p className="intro-text">
  Welcome to our Blog Website! Dive into a universe of captivating content, 
  insightful articles,
  and expert tips that keep you informed and inspired. 
  <p className=''>
  Whether you're a seasoned reader or a curious newbie, 
  our blog offers something for everyone. 
    </p>
    Universe of captivating content, insightful articles,
  and expert tips that keep you informed and inspired. 
  Whether you're a seasoned reader or a curious newbie,
  <p>
  Explore topics ranging from travel and lifestyle to technology and education.
  Join us on this exciting journey and enrich your mind with diverse perspectives and engaging stories.
  </p>
</p>

         <button className='py-2 px-5 text-white rounded-md bg-[#28a745] font-semibold  '>Explore Our Blog</button>
       </div>
       <div className="">
        {/* <img className=' w-[800px]  rounded-md h-[450px]  ' src={city} alt="" /> */}
          <img className=' w-[800px]  rounded-md h-[450px]  ' src={Blog} alt="" />
        
      
       </div>
    </div>
  )
}
