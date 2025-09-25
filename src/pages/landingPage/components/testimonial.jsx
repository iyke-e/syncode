import React from 'react'
import { Link } from 'react-router-dom'
import Computer from "/src/assets/images/computer.png"
import Jane from "/src/assets/images/jane.png"
import Micheal from "/src/assets/images/MichaelWong.png"
import JeaneWood from "/src/assets/images/JeaneWood.png"
import AvrilSong from "/src/assets/images/AvrilSong.png"

const Testimonial = () => {
  return (
    <div className='w-full h-full md:h-full flex flex-col justify-center items-center py-20 bg-[#e7edf4] px-10 md:px-20 borde border-red-600'>
      <div className='text-center borde mb-12'>
        <div className='flex items-center justify-center gap-3 mb-2'>
          <hr className='w-16 h-1 bg-blue-700' />
          <h1 className=' text-xl text-gray-500'> Testimonial</h1>
        </div>
        <h1 className='text-2xl md:text-3xl font-semibold'>Client & Student Testimonial</h1>
      </div>

      <div className='md:w-full md:flex text-[#0b1321] gap-6 h-full borde'>

        {/* TESTIMONIAL CARDS */}

        <div className='md:w-1/3 h-full bg-white  mb-5 md:mb-0 flex flex-col justify-between gap-4 p-10 rounded-xl borde'>
          <div className='flex justify-betwen items-center gap-4 borde'>
            <div>
              <img
                src={Micheal}
                alt="jane"
                className=""
                width="100px"
                height="100px"
              />
            </div>
            <div className=''>
              <h1 className='font-bold text-2xl'>Michael Wong</h1>
              <p className='text-xl'>Founder Cova</p>
            </div>
          </div>
          <p className='text-lg font-light'>Working with ACME has been a game-changer for our business. Their website development services transformed our online presence, and the tech training sessions equipped our team.</p>
        </div>
        <div className='md:w-1/3 h-full bg-white mb-5 md:mb-0 flex flex-col justify-between gap-4 p-10 rounded-xl borde '>
          <div className='flex justify-betwen items-center gap-4 borde'>
            <div>
              <img
                src={AvrilSong}
                alt="jane"
                className=""
                width="100px"
                height="100px"
              />
            </div>
            <div className=''>
              <h1 className='font-bold text-2xl'>Avril Song</h1>
              <p className='text-xl'>Web Development Student</p>
            </div>
          </div>
          <p className='text-black text-lg font-light'>Working with ACME has been a game-changer for our business. Their website development services transformed our online presence, and the tech training sessions equipped our team.</p>
        </div>
        <div className='md:w-1/3 h-full bg-white mb-5 md:mb-0 flex flex-col justify-between gap-4 p-10 rounded-xl borde '>
          <div className='flex justify-betwen items-center gap-4 borde'>
            <div>
              <img
                src={JeaneWood}
                alt="jane"
                className=""
                width="100px"
                height="100px"
              />
            </div>
            <div className=''>
              <h1 className='font-bold text-2xl'>Jeane Wood</h1>
              <p className='text-xl'>Data Science Student</p>
            </div>
          </div>
          <p className='text-black text-lg font-light'>WACME's tech training program was incredible! The instructors were knowledgeable and approachable, making complex topics easy to understand. I gained practical skills in coding.</p>
        </div>        
      </div>
    </div>

  )
}

export default Testimonial