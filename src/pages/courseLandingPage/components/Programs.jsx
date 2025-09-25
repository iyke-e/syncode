
import { Link } from "react-router-dom"
import Carousel from "../utility/Carousel";



const Programs = () => {

    return (
        <div className="mt-[70px] px-padding-inline ">
            <p className="text-[#1B40B3] font-bold mb-3 ">Explore Programs</p>
            <h2 className="mb-5 text-[#101828] font-bold text-2xl md:text-[36px] ">Our Most Popular Courses</h2>
            <p className="text-[#667085] ">Join our famous courses, the knowledge provided will definitely be useful for you.</p>

            <Carousel />

            <div className="grid place-content-center">
                <Link to="/courses" className="border rounded-lg px-4 py-2.5 bg-[#F9FAFB] border-[#D0D5DD] text-[#101828] font-semibold">
                    Explore All Program
                </Link>
            </div>
        </div>
    )
}

export default Programs