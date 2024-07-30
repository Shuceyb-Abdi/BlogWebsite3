import React, { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import '../Components/Categories.css';

export default function Categories() {
    const [slide, setSlide] = useState(0);

    const images = [
         "https://images.pexels.com/photos/2706653/pexels-photo-2706653.jpeg?auto=compress&cs=tinysrgb&w=600",
         "https://images.pexels.com/photos/8247/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
         "https://images.pexels.com/photos/2014965/pexels-photo-2014965.jpeg?auto=compress&cs=tinysrgb&w=600",
         "https://images.pexels.com/photos/24425230/pexels-photo-24425230/free-photo-of-empty-street-in-city.jpeg?auto=compress&cs=tinysrgb&w=600",
         "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg?auto=compress&cs=tinysrgb&w=600"
    ];

    function next() {
        setSlide((prevSlide) => (prevSlide + 1) % images.length);
    }

    function prev() {
        setSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <>
        <div className=" flex justify-center text-center ">
            <div className="space-y-4">
            <h1 className=' text-[2.9rem] font-semibold font-Far'>Travel <span className='text-green-500'>Blog</span></h1>
            <p className=' text-[1.1rem] text-gray-600 '>Discover breathtaking destinations, travel tips, and <br />
                unforgettable experiences from around the world</p>
            </div>
        </div>
        <div className='flex justify-center mt-[3rem] items-center my-[3rem] '>
            <div onClick={prev} className="bg-green-500 rounded-[50%] text-white mr-[2rem] ">
                <MdOutlineKeyboardArrowLeft className='text-4xl text-center' />
            </div>
            <div className="">
              <div className='slider '>
                {images.map((image, index) => (
                    <img
                        key={index}
                        className={`slide ${index === slide ? 'active' : ''}`}
                        src={image}
                        alt=""
                        style={{
                            transform: `translateX(${(index - slide) * 100}%)`,
                        }}
                    />
                ))}
            </div>
            </div>
            <div onClick={next} className="bg-green-500 rounded-[50%] text-white ml-[2rem] ">
                <MdKeyboardArrowRight className='text-4xl text-center' />
            </div>
        </div>
        </>
    );
}