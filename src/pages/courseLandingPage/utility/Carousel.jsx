import { Swiper, SwiperSlide } from 'swiper/react'
import { programCards } from './Data';
import 'swiper/css';
import 'swiper/css/navigation'

import ProgramsCard from '../components/ProgramsCard';
import { useEffect, useRef, useState } from 'react';

import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [slidesPerView, setSlidesPerView] = useState(1)

    const paginationList = programCards.length - slidesPerView + 1

    useEffect(() => {
        const updateSlidesPerView = () => {
            if (window.matchMedia("(min-width: 1280px)").matches) {
                setSlidesPerView(3)
            } else if (window.matchMedia("(min-width: 768px)").matches) {
                setSlidesPerView(2)
            } else {
                setSlidesPerView(1)
            }
        }

        updateSlidesPerView()

        window.addEventListener('resize', updateSlidesPerView())

        return () => window.removeEventListener('resize', updateSlidesPerView)
    }, [])


    const swiperRef = useRef()

    const gotoSlide = (index) => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(index)
        }
    }

    const nextSlide = (index) => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(index + 1)
        }
    }
    const prevSlide = (index) => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(index - 1)
        }
    }


    const swiperNavStyle = "text-blue-500 text-5xl  animate-pulse md:text-7xl cursor-pointer"

    return (
        <div className='mt-[40px] relative '>
            <Swiper
                ref={swiperRef}
                spaceBetween={30}
                slidesPerView={slidesPerView}
                onSlideChange={(swiper) => { setActiveIndex(swiper.activeIndex) }}
                onSwiper={(swiper) => swiperRef.current = swiper}
                className='py-4 px-2 '


            >
                {programCards.map((card, index) => (
                    <SwiperSlide key={index}>

                        <ProgramsCard card={card} />


                    </SwiperSlide>

                ))}


            </Swiper>


            {
                activeIndex > 0 && <div onClick={() => { prevSlide(activeIndex) }} className='absolute top-1/2 z-50 opacity-30 -left-4  md:-left-16'>
                    <FaAngleLeft className={swiperNavStyle} />
                </div>
            }

            {
                (activeIndex < paginationList - 1) && <div onClick={() => { nextSlide(activeIndex) }} className='absolute top-1/2 z-50  opacity-30 -right-4 md:-right-10 lg:-right-16'>
                    <FaAngleRight className={swiperNavStyle} />
                </div>
            }


            <div className="flex  items-center  gap-2 p-10 md:gap-4 justify-center">
                {
                    Array.from({ length: paginationList }, (_, index) => (
                        <div onClick={() => { gotoSlide(index) }} key={index} className={`w-3 cursor-pointer inline-block transition-[10s_ease-in-out] h-3 rounded-xl  ${index === activeIndex ? "bg-[#1B40B3] w-[40px]" : "bg-[#D9D9D9]"}`}></div>
                    ))
                }

            </div>
        </div>

    )
}

export default Carousel