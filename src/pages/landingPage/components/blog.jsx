import React from 'react'
import { Link } from 'react-router-dom'
import Computer from "/src/assets/images/computer.png"
import Jane from "/src/assets/images/jane.png"
import Jenny from "/src/assets/images/jenny.png"
import Esther from "/src/assets/images/Esther.png"
import Data from "/src/assets/images/Data.png"
import AgileDevImg from "/src/assets/images/AgileDevImg.png"


const BlogWidget = () => {
  return (
    <div className='flex flex-col justify-center items-center py-10 bg-[#F9FCFF] px-10 md:px-20 borde border-red-600'>
      <div className='text-center mb-5'>
        <div className='flex items-center justify-center gap-3 mb-2'>
          <hr className='w-16 h-1 bg-blue-700' />
          <h1 className=' text-xl text-gray-500'> Blog</h1>
        </div>
        <h1 className='text-2xl md:text-3xl font-semibold'>Browse articles</h1>
      </div>

      <div className='md:w-full md:flex gap-6 h-full borde'>

        {/* OUR COURSES CARDS */}
        <div className='md:w-2/4 h-full mb-5 md:mb-0 flex flex-col justify-between gap-10  p-6 borde'>

          <div className='flex flex-row justify-between gap-4'>
            <div className='w-ful mb-5 h- md:mb-0 borde'>
              <img
                src={Computer}
                alt="X"
                className="w-full rounded-lg"
                width=""
                height=""
              />
            </div>

            <div className='w-1/2 flex flex-col justify-between'>
              <h1 className='text-blue-700 font-bold'> November 16, 2014 </h1>
              <h1 className='text-lg font-extrabold'> Three Pillars of User Delight </h1>
              <p>Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ... </p>
              <div className='flex gap-4 '>
                <p className='text-pink-600 bg-pink-100 py-1 px-6 font-medium text-center rounded-full' >Research</p>
                <p className='text-green-600 bg-gray-100 py-1 px-6 font-medium text-center rounded-full' >UI/UX</p></div>

            </div>
          </div>
          <div className='flex flex-row justify-between gap-4'>
            <div className='w-ful mb-5 h- md:mb-0 borde'>
              <img
                src={Computer}
                alt="X"
                className="w-full rounded-lg"
                width=""
                height=""
              />
            </div>

            <div className='w-1/2 flex flex-col justify-between'>
              <h1 className='text-blue-700 font-bold'> September 24, 2017 </h1>
              <h1 className='text-lg font-extrabold'> UX Mapping Methods </h1>
              <p>Visual-design principles can be applied consistently throughout the process of creating a polished UX map... </p>
              <div className='flex gap-4 '>
                <p className='text-pink-600 bg-pink-100 py-1 px-6 font-medium text-center rounded-full' >Research</p>
                <p className='text-green-600 bg-gray-100 py-1 px-6 font-medium text-center rounded-full' >UI Design</p></div>

            </div>
          </div>

        </div>

        <div className='md:w-2/4 flex flex-col justify-between gap-4 borde '>
          <img
            src={AgileDevImg}
            alt="AgileDevImg"
            className="w-full"
            width=""
            height=""
          />

          <h1 className='text-blue-700 font-bold'> March 13, 2014 </h1>
          <h1 className='text-2xl font-extrabold'> Agile Development Projects and Usability</h1>
          <p className='text-lg'>Visual-design principles can be applied consistently throughout the process of creating a polished UX map... </p>

          <div className='flex gap-4 '>
            <p className='text-yellow-600 bg-pink-100 py-1 px-6 font-medium text-center rounded-full' >Programming</p>
            <p className='text-purple-600 bg-gray-100 py-1 px-6 font-medium text-center rounded-full' >Research</p>
            <p className='text-pink-600 bg-gray-100 py-1 px-6 font-medium text-center rounded-full' >Developments</p>
          </div>



        </div>

      </div>
      <button className='border bg-blue-700 mt-5 flex gap-2 items-center text-white font-bold px-4 py-2 md:mt-11 rounded-xl' >View All
        <svg width="20" height="20" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_42_1913)">
            <path d="M4.60645 14.4822H23.3298" stroke="white" strokeWidth="2.2695" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.6702 6.8226L23.3297 14.4822L15.6702 22.1418" stroke="white" strokeWidth="2.2695" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_42_1913">
              <rect width="27.234" height="27.234" fill="white" transform="translate(0.351074 0.865143)" />
            </clipPath>
          </defs>
        </svg>

      </button>
    </div>
  )
}

export default BlogWidget