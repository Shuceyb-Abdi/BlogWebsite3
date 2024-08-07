import React from 'react'
import spain from'../assets/spain.jpg'
import turkey from'../assets/turkey.avif'
import uk from'../assets/london.avif'
import france from'../assets/france.avif'
export default function Blog() {
  return (
    <div className="mt-16 px-4 lg:px-8">
    <h1 className="text-3xl font-semibold font-Far text-center">
      Get updated with <span className="text-[#30aa4c]">latest blog</span></h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <div className="w-full h-full rounded-lg overflow-hidden bg-white shadow-md">
                <img src={spain} alt="w-full h-48 object-cover" />
                <h1 className=' text-xl font-semibold text-[#30aa4c] '
                ><span className='text-gray-600 '>Sp</span>ain</h1>
               <div className='py-4 space-y-2'>
              <p className=' font-semibold text-gray-600'>Spain, the vibrant cities of Madrid and Barcelona captivate visitors 
                with their stunning architecture, lively street festivals</p>
                <p className=' text-gray-400'>june 1, 2024</p>
               </div>
            </div>

            <div className="w-full h-full rounded-lg overflow-hidden bg-white shadow-md">
            <img src={turkey} alt="w-full h-48 object-cover" />
            <h1 className='text-xl font-semibold text-[#30aa4c]'
                ><span className=' text-gray-600 '>Tur</span>key</h1>
            <div className='py-[1rem] space-y-4  '>
               <p className='font-semibold text-gray-600'>Turkey, a bridge between East and West, mesmerizes with its diverse landscapes,
                 from the bustling bazaars of Istanbul to the surreal </p>
                <p className=' text-gray-400'>July 6, 2024</p>
               </div>
            </div>
            <div className="w-full h-full rounded-lg overflow-hidden bg-white shadow-md">
            <img src={uk} alt="w-full h-48 object-cover" />
            <h1 className='text-xl font-semibold text-[#30aa4c]'
                ><span className=' text-gray-600 '>Eng</span>land</h1>
            <div className='py-[1rem] space-y-4  '>
              <p className=' font-semibold text-gray-600'>The UK, steeped in history, invites travelers to explore the grandeur of London’s 
                landmarks, the serene beauty of the Lake District, and  </p>
                <p className=' text-gray-400'>July 10, 2024</p>
               </div>
            </div>

            <div className="w-full h-full rounded-lg overflow-hidden bg-white shadow-md">
            <img className='h-[180px]' src={france} alt="w-full h-48 object-cover" />
            <h1 className=' text-xl font-semibold text-[#30aa4c]'
                ><span className=' text-gray-600 '>Fra</span>nce</h1>
            <div className='py-4 space-y-2'>
               <p className=' font-semibold text-gray-600'>France enchants with its romantic allure, from the iconic Eiffel Tower in Paris to 
                the picturesque vineyards of Bordeaux and the sun-soaked  </p>
                <p className=' text-gray-400'>Aug 12, 2024</p>
               </div>
            </div>
        </div>     
    </div>
  )
}
