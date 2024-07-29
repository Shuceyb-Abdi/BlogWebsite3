import React from 'react'
import img1 from'../assets/travel.avif'
import img2 from'../assets/travelone.avif'
import img3 from'../assets/traveltwo.avif'
export default function About() {
  return (
    <div className=' flex mt-[14rem]  mx-[2.7rem] space-x-5 relative '>
           <div className=" absolute left-[29rem] top-[-10rem] my-[3rem]  ">
            <h1 className=' text-[3rem] font-Far   '>About <span  className=' text-[#30aa4c] '> Us</span></h1>
           </div>
        <div className=" space-y-7 pt-[3rem] ">
            <h1 className=' text-[2.8rem] font-Far font-semibold '>Welcome to Blog <span className='text-[#30aa4c] '>Website</span></h1>
            <p className=' text-gray-600'>Our blog website is built using React.js, a powerful JavaScript library for building user interfaces. We leverage the flexibility and efficiency of React to deliver a seamless and interactive experience for our readers. From dynamic content updates to a responsive design, our platform ensures that you get the best possible browsing experience whether you're on a desktop or mobile device. Join us as we continue to innovate and bring you the latest stories, tips, and adventures from around the world.
            </p>
                 <button className='py-2 px-5 text-white rounded-md
                  bg-[#28a745] font-semibold  '>Join Our Journey</button>

        </div>
        <div className="grid grid-rows-3 grid-flow-col gap-1">
            <div className="row-span-7 w-[300px] h-[404px]  bg-blue-400 rounded-md ">
                <img className=' h-full object-fill object-center rounded-md' src={img1} alt="" />
            </div>
            <div className="col-span-2 w-[300px] h-[200px]  bg-blue-400 rounded-md ">
            <img className=' h-full object-fill object-center rounded-md' src={img2} alt="" />
            </div>
         
            <div className=" w-[300px] h-[200px] bg-blue-400 rounded-md ">
            <img className=' h-full object-fill object-center rounded-md' src={img3} alt="" />
            </div>
        </div>
    </div>
  )
}