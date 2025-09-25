import React from 'react'
import { Link } from 'react-router-dom/dist'
import image from '../../../assets/images/holidayBanner.jpeg'

const HolidayBanner = () => {
  return (
    <div style={{backgroundImage: `url("${image}")`}} className="relative bg-cover bg-center w-full flex flex-col justify-center items-center py-20 px-10 md:px-80 borde border-red-600">
      <div className="absolute inset-0 bg-zinc-950 opacity-80"></div>
      <div className='relative z-20 flex flex-col gap-6 items-center borde'>
        <div className='text-center text-white'>
          <h1 className='text-2xl'>Holiday ICT Training for Students</h1>
          <p>Join Us</p>
          <p>Unlock the power of technology this holiday season with our engaging and interactive ICT training program for students. Designed to inspire and educate.</p>

        </div>

        <div className='flex gap-4'>
          <div className='items-center'>
            <Link to="/signup">
              <button className='bg-blue-700 text-white flex gap-2 items-center font-bold px-4 py-2 rounded-full' >Register
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

            </Link>

          </div>

          <div className='items-center'>
            <Link>
              <button className='border border-blue-700 flex gap-2 items-center text-white font-bold px-4 py-2 rounded-full' >More Enquires
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
            </Link>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HolidayBanner