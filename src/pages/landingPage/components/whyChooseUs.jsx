import React from 'react'
import { Link } from 'react-router-dom'
import Person from "/src/assets/icons/Person.png"
import LockKeyOpen from "/src/assets/icons/LockKeyOpen.png"
import MonitorPlay from "/src/assets/icons/MonitorPlay.png"
import Certificate from "/src/assets/icons/Certificate.png"
import ArrowRightBlack from "/src/assets/icons/ArrowRightBlack.png"


const WhyChooseUs = () => {
  return (
    <div className='flex flex-col justify-center items-center py-20 bg-[#F9FCFF] px-10 md:px-20 borde borde-red-600'>
      <div className='text-center borde mb-12 space-y-2'>
        <div className='flex justify-center items-center gap-3 '>
          <hr className='w-16 h-1 bg-blue-700' />
          <h1 className=' text-xl text-gray-500'> Why choose us</h1>
        </div>
        <h1 className='text-2xl md:text-3xl font-semibold'>Best Learning Experience</h1>
      </div>

      <div className='md:w-full md:flex gap-6'>

        <div className='md:w-1/4 mb-5 md:mb-0 flex flex-col gap-10 p-6 rounded-xl border'>
          <div>
            <img src={Person} alt="" />
          </div>
          <h1 className='text-black font-extrabold text-xl'>Holistic Expertise </h1>
          <p className='text-black'>Our team's proficiency extends across every aspect...</p>
          <Link className='flex flex-row items-center gap-2'> <p className='text-black font-semibold'>Learn More
          </p>
            <img src={ArrowRightBlack} alt="" />
          </Link>
        </div>
        <div className='md:w-1/4 mb-5 md:mb-0 flex flex-col justify-between  gap-10 p-6 rounded-xl border'>
          <div>
            <img src={MonitorPlay} alt="" />
          </div>
          <h1 className='text-black font-extrabold text-xl'>Customized Training Programs</h1>
          <p className='text-black'>Development of highly customized training programs...</p>
          <Link className='flex flex-row items-center gap-2'> <p className='text-black font-semibold'>Learn More
          </p>
            <img src={ArrowRightBlack} alt="" />
          </Link>
        </div>
        <div className='md:w-1/4 h- mb-5 md:mb-0 flex flex-col justify-between  gap-10 p-6 rounded-xl border'>
          <div>
            <img src={LockKeyOpen} alt="" />
          </div>
          <h1 className='text-black font-extrabold text-xl'>Proven Project Success</h1>
          <p className='text-black'>Our team has a track record of successfully delivering...</p>
          <Link className='flex flex-row items-center gap-2'> <p className='text-black font-semibold'>Learn More
          </p>
            <img src={ArrowRightBlack} alt="" />
          </Link>
        </div>
        <div className='md:w-1/4 mb-5 md:mb-0 flex flex-col justify-between  gap-10 p-6 rounded-xl border'>
          <div>
            <img src={Certificate} alt="" />
          </div>
          <h1 className='text-black font-extrabold text-xl'>Innovative Approaches</h1>
          <p className='text-black'>What truly sets us apart is our commitment to...</p>
          <Link className='flex flex-row items-center gap-2'> <p className='text-black font-semibold'>Learn More
          </p>
            <img src={ArrowRightBlack} alt="" />
          </Link>
        </div>
      </div>


    </div>
  )
}

export default WhyChooseUs