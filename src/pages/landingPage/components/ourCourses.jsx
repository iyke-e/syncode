import React from "react";
import { Link } from "react-router-dom";
import Computer from "/src/assets/images/computer.png";
import Jane from "/src/assets/images/jane.png";
import Jenny from "/src/assets/images/jenny.png";
import Esther from "/src/assets/images/Esther.png";
import Data from "/src/assets/images/Data.png";
import Web from "/src/assets/images/web.png";
import ArrowUpRight from "/src/assets/icons/ArrowRightBlack.png";
import Star from "../../../assets/icons/Star";
import ProgramsCard from "../../courseLandingPage/components/ProgramsCard";
import { ExternalLinkIcon } from "./icons";
import { coursesData } from "../Data";

const OurCourses = () => {
    return (
        <div className="flex flex-col justify-center items-center py-20 bg-[#F9FCFF] px-10 md:px-20 borde border-red-600">
            <div className="text-center borde mb-12 space-y-2">
                <div className="flex items-center justify-center gap-3 ">
                    <hr className="w-16 h-1 bg-blue-700" />
                    <h1 className=" text-xl text-gray-500"> Our Courses</h1>
                </div>
                <h1 className="text-2xl md:text-3xl font-semibold">
                    Best selling courses
                </h1>
            </div>

            <div className="flex gap-4 mb-5 bg-gray-100 text-black font-bold px-4 py-2 rounded-full">
                <div className="items-center">
                    <Link>
                        <button className="bg-white text-black font-bold px-4 py-2 rounded-full">
                            UI/UX Design
                        </button>
                    </Link>
                </div>
                <div className="items-center">
                    <Link>
                        <button className=" text-black font-bold px-4 py-2 rounded-full">
                            Web Development
                        </button>
                    </Link>
                </div>
                <div className="items-center">
                    <Link>
                        <button className="text-black font-bold px-4 py-2 rounded-full">
                            Data Science
                        </button>
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
                {/* OUR COURSES CARDS */}

                {
                  coursesData.map(card => (
                    <ProgramsCard key={card.id} card={card} />
                  ))
                }
                
            </div>
            <div className="items-center">
                <Link to="/courses-overview">
                    <button className="border bg-blue-700 flex gap-2 items-center text-white font-bold px-4 py-2 md:mt-11 rounded-xl">
                        View All Class
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 28 29"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clip-path="url(#clip0_42_1913)">
                                <path
                                    d="M4.60645 14.4822H23.3298"
                                    stroke="white"
                                    strokeWdth="2.2695"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M15.6702 6.8226L23.3297 14.4822L15.6702 22.1418"
                                    stroke="white"
                                    stroke-width="2.2695"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_42_1913">
                                    <rect
                                        width="27.234"
                                        height="27.234"
                                        fill="white"
                                        transform="translate(0.351074 0.865143)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default OurCourses;
