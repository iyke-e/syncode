import delight from "../assets/userDelight.png"
import ux from "../assets/uxMapping.png"
import agile from "../assets/agile.png"
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa"
import { BlogContent } from "../utility/Data"
import { v4 as uuidv4 } from 'uuid'
import { useState } from "react"


const colors = [
    { text: "text-[#C11574]", bg: "bg-[#FDF2FA]" },
    { text: "text-[#026AA2]", bg: "bg-[#F0F9FF]" },
    { text: "text-[#FF9B26]", bg: "bg-[#FFF9F3]" },
    { text: "text-green-500", bg: "bg-green-100" },

]


const getRandomColorIndex = (prevColor) => {
    let newColor
    let randomIndex

    do {
        randomIndex = Math.floor(Math.random() * colors.length)
        newColor = colors[randomIndex]
    } while (newColor?.text === prevColor?.text)

    return newColor
}


const Blog = () => {
    let prevColor = null

    return (
        <div className=" my-[70px] px-padding-inline  md:my-[140px]">
            <div className="flex  items-center justify-center gap-4 mb-[18px]">
                <div className="bg-[#1B40B3] w-[72px] h-1"></div>
                <p className="text-[#1A2434]">Blog</p>
            </div>
            <h3 className=" mb-[41px] text-[40px] text-center  font-semibold text-[#1A2434]">Browse articles</h3>
            <div>
                <h4 className="text-[#101828] font-semibold mb-8 text-2xl">Our recent blogs</h4>
                <div className="grid gap-8 xl:grid-cols-2 blog-container">
                    {
                        BlogContent.map((blog, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-4">
                                <div className="w-full">
                                    <img className="w-full h-[210px] object-cover" src={blog.image} alt="" />
                                </div>
                                <div className="w-full">
                                    <p className="font-bold mb-3 text-sm text-[#1B40B3]">{blog.date}</p>
                                    <h5 className="text-[#101828] mb-2 font-semibold text-[18px]">{blog.topic}</h5>
                                    <p className="text-[#667085]">{blog.body}</p>

                                    <div className="flex gap-4 mt-6">
                                        {
                                            blog.genre.map((item) => {

                                                const color = getRandomColorIndex(prevColor)
                                                prevColor = color

                                                return (
                                                    <p key={uuidv4()} className={`py-1 px-[10px] ${color.text} ${color.bg} text-sm rounded-full  grid place-content-center whitespace-nowrap`} >{item}</p>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                            </div>
                        ))
                    }



                </div>
            </div>
            <div className="mt-[100px]">
                <Link className="flex mx-auto items-center rounded-xl justify-center max-w-[349px] h-20 bg-[#1B40B3]  gap-4 text-white ">
                    View all <FaArrowRight />
                </Link>
            </div>
        </div >
    )
}

export default Blog