import React from 'react'
import { FaPhone, FaShare } from 'react-icons/fa'
import { FaLocationDot, FaMessage } from 'react-icons/fa6'

function User({url,name,msg}) {
  return (
    <div className="w-72  shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#" className="relative">
          <img
            src={url}
            alt="Product"
            className="h-80 w-72 object-cover rounded-t-xl "
          />
          <div className="px-4 py-3 w-72">
            <span className="text-teal-600 font-bold mr-3 uppercase text-xs">
              {name}
            </span>
          
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-teal-600 cursor-auto my-3">
              {msg}
              </p>
              <FaLocationDot />
            
            </div>
          </div>
        
         
          <div className="flex items-center justify-around m-2">
            <div className='bg-teal-800 text-white text-lg p-3  text-center' >
          <FaPhone color='white'/>
            </div>
            <div className='bg-teal-800 text-white text-lg p-3  text-center' >
          <FaMessage color='white'/>
            </div>
            <div className='text-teal-800 border-[2px] rounded-md border-teal-800 text-lg p-3  text-center' >
          
          <FaShare />
            </div>
          </div>
        </a>
      </div>
  )
}

export default User