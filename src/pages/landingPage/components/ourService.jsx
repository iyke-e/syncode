import React from 'react'
import { Link } from 'react-router-dom/dist'
import WebDevIcon from "/src/assets/icons/webdevIcon.png"
import TechTraining from "/src/assets/icons/TechTrainingIcon.png"
import DataAnalysisIcon from "/src/assets/icons/DataAnalysisIcon.png"

const OurService = () => {
    return (
        <div className='flex flex-col py-20 px-10 bg-[#F9FCFF]  md:px-20 borde border-red-600'>
            <div className='text-center'>
                <h1 className='text-blue-700 text-3xl font-bold mb-2'>Our Services</h1>
                <p className='text-lg'>Empowering your future with cutting-edge tech solutions and personalized expertise.</p>
            </div>

            {/* Our Service Cards */}
            <div className='md:flex gap-10 mt-12 borde'>
                <div className=' md:w-1/3 h-fit mb-5 md:mb-0 flex flex-col gap-10 bg-blue-700 p-6 rounded-xl'>
                    <div className='flex items-center gap-4 borde'>
                        <img src={WebDevIcon} alt="" />
                        <h1 className='text-white font-extrabold text-xl'>Website Development </h1>
                    </div>

                    <p className='text-white'>We create dynamic, user-friendly websites tailored to your business needs.</p>
                    <Link> <p className='text-white font-semibold'>Learn More &gt;</p> </Link>
                </div>

                <div className=' md:w-1/3 h-fit mb-5 md:mb-0 flex flex-col gap-10 border bg-off-white p-6 rounded-xl'>
                    <div className='flex items-center gap-4 borde'>
                        <img src={TechTraining} alt="" />
                        <h1 className='text-black font-extrabold text-xl'>Tech Trainings</h1>
                    </div>

                    <p className='text-black'>Learn from industry experts and gain the skills needed to excel in today's digital world.</p>
                    <Link> <p className='text-blue-700 font-semibold'>Learn More &gt;</p> </Link>
                </div>

                <div className=' md:w-1/3 h-fit mb-5 md:mb-0 flex flex-col gap-10 border bg-off-white p-6 rounded-xl'>
                    <div className='flex items-center gap-4 borde'>
                        <img src={DataAnalysisIcon} alt="" />
                        <h1 className='text-black font-extrabold text-xl'>Data Analysis</h1>
                    </div>

                    <p className='text-black'>We help businesses make informed decisions by transforming raw data into actionable insights.</p>
                    <Link> <p className='text-blue-700 font-semibold'>Learn More &gt;</p> </Link>
                </div>


            </div>

        </div>
    )
}

export default OurService