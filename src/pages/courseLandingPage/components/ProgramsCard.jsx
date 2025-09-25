import { IoMdArrowDown } from "react-icons/io"
import { Link } from "react-router-dom"
import Star from "../utility/Star"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

const ProgramsCard = ({ card }) => {
    return (
        <div key={card?.id} className=" h-[560px] p-6 rounded-lg w-full bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] ">
            <div className="mb-8">
                <img className="w-full max-h-60 object-cover" src={card?.image} alt="" />
            </div>
            <p className="text-[#1B40B3] font-semibold mb-3">{card?.type}</p>
            <div className="flex justify-between mb-3">
                <h3 className="text-[22px] md:text-2xl  font-semibold text-[#101828]">{card?.title}</h3>
                <Link to="/courses/data">
                    <IoMdArrowDown className="text-2xl text-[#101828] rotate-[225deg]" />

                </Link>
            </div>

            <p className="text-[#667085] mb-3">{card?.info}</p>

            <div className="flex text-sm items-center gap-2 mb-8">
                <span className="text-[#1B40B3]">{card?.rating}</span>
                <span className="flex text-base gap-1 text-[#FF9B26]">
                    <Star
                        num={card?.star}
                    />
                </span>
                <span className="text-[#969696]">({card?.vote})</span>
            </div>

            <div className="flex justify-between">

                <div className="flex gap-3 items-center">
                    <div className="img">
                        <img src={card?.passport} alt="" />
                    </div>
                    <div className="text-sm">
                        <p className="font-semibold text-[#101828]">{card?.teacher}</p>
                        <p className="text-[#667085]">{card?.enrolled} Enrolled</p>
                    </div>
                </div>

                <div className="text-[26px] font-bold text-[#1B40B3]">
                    <del className="decoration-double">N</del>   {card?.fee}
                </div>
            </div>

        </div>
    )
}

export default ProgramsCard