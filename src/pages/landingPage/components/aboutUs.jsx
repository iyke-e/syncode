import React from 'react'
import { Link } from 'react-router-dom/dist'
import AboutUsImage from "/src/assets/images/aboutUsImage.jpeg"

const AboutUs = () => {
    return (
        <div className='w-full h-fit flex flex-col py-10 bg-[#e1eefa] px-10 md:px-20 borde border-red-600'>

            <div className='w-full h-fit mb-10 md:flex justify-cente md:items-center flex-row-rverse md:gap-20 borde border-black '>
                <div className=' md:w-1/2 mb-5 md:mb-0 borde'>
                    <img
                        src={AboutUsImage}
                        alt="X"
                        className=" rounded-lg"
                        width=""
                        height=""
                    />
                </div>
                <div className='flex flex-col justify-between gap-4 md:w-1/2 borde'>
                    <div className='flex items-center gap-3 '>
                        <hr className='w-16 h-1 bg-blue-700' />
                        <h1 className=' text-xl text-gray-500'> About Us</h1>
                    </div>
                    <h1 className='text-2xl md:text-5xl font-semibold'>Training and consulting company</h1>
                    <p className='text-xl text-gray-500'>At ACME Software Lab, we are passionate about empowering individuals and organizations through innovative training and consulting services. As a leading provider in the tech industry, our mission is to bridge the gap between technology and talent, helping our clients achieve their fullest potential.</p>
                    {/* BUTTON IS HERE */}
                    <div className='items-center'>
                        <Link  to="/about">
                            <button className='bg-blue-700 text-white font-bold flex gap-1 items-center px-7 py-3 rounded-lg' >Learn More
                                <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
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


            {/* THE STAT  */}

            <div className='w-full h-fit md:h-64 md:flex md:gap-4 borde'>
                <div className='md:w-1/4 flex flex-col mb-5 md:mb-0 justify-center items-center borde '>
                    <h1 className='font-semibold text-6xl'>5<span className='text-blue-600'>+</span></h1>
                    <p className='text-xl text-gray-500'>Years of experience</p>
                </div>
                <div className='md:w-1/4 flex flex-col mb-5 md:mb-0 justify-center items-center borde '>
                    <h1 className='font-semibold text-6xl'>1<span className='text-blue-600'>k+</span></h1>
                    <p className='text-xl text-gray-500'>Clients
                        worldwide</p>
                </div>
                <div className='md:w-1/4 flex flex-col mb-5 md:mb-0 justify-center items-center borde '>
                    <h1 className='font-semibold text-blue-600 text-6xl'>20+</h1>
                    <p className='text-xl text-gray-500'>Courses</p>
                </div>
                <div className='md:w-1/4 flex flex-col justify-center items-center borde '>
                    <h1 className='font-semibold text-blue-600 text-6xl'>100%</h1>
                    <p className='text-xl text-gray-500'>Student satisfactions</p>
                </div>
            </div>

        </div>
    )
}

export default AboutUs