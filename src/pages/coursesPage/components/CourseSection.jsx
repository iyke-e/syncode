import React from "react";
import computer from "../../../assets/images/computer.png";
import Data from "../../../assets/images/Data.png";
import web from "../../../assets/images/web.png";
import jane from "../../../assets/images/jane.png";
import jenny from "../../../assets/images/jenny.png";
import Esther from "../../../assets/images/Esther.png";
import { Link } from "react-router-dom";

const CourseCard = ({
    image,
    category,
    title,
    description,
    rating,
    reviews,
    instructor,
    price,
}) => (
    <Link to="/courses/data" className="hover:scale-105 transition-all duration-300">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{category}</p>
                <h3 className="font-bold text-lg mb-1 flex items-center justify-between">
                    {title}
                    <svg
                        className="w-4 h-4 text-gray-950"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7 17L17 7M17 7H7M17 7V17"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </h3>
                <p className="text-sm text-gray-600 mb-2">{description}</p>
                <div className="flex items-center mb-2">
                    <span className="text-yellow-400 mr-1">{rating}</span>
                    <div className="flex text-yellow-400">
                        {"★".repeat(Math.floor(rating))}
                        {"☆".repeat(5 - Math.floor(rating))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">
                        ({reviews})
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img
                            src={instructor.avatar}
                            alt={instructor.name}
                            className="w-8 h-8 rounded-full mr-2"
                        />
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-gray-900">
                                {instructor.name}
                            </span>
                            <span className="text-xs text-gray-500">
                                {instructor.text} Enrolled
                            </span>
                        </div>
                    </div>
                    <span className="font-bold text-blue-600 text-lg">
                        ₦ {price}
                    </span>
                </div>
            </div>
        </div>
    </Link>
);

const CurriculumItem = ({ number, title }) => (
    <div className="text-center">
        <div className="font-bold text-3xl text-gray-950 mb-2">
            {number.padStart(2, "0")}
        </div>
        <div className="text-sm max-w-[120px]  mx-auto leading-tight text-gray-800">
            {title}
        </div>
    </div>
);

const CourseSection = () => {
    const courses = [
        {
            image: `${computer}`,
            category: "Computer basics",
            title: "Computer Proficiency",
            description:
                "Learn Basics of Computer Hardware and Software and Operating Systems Overview.",
            rating: 4.3,
            reviews: "816,223",
            instructor: {
                name: "Jane Cooper",
                avatar: `${jane}`,
                text: "200",
            },
            price: "50,000",
        },
        {
            image: `${Data}`,
            category: "Data",
            title: "Data Analysis",
            description:
                "Learn Data and Information Analysis in Decision Making.",
            rating: 3.9,
            reviews: "6,271",
            instructor: {
                name: "Jenny Wilson",
                avatar: `${jenny}`,
                text: "2001",
            },
            price: "60,000",
        },
        {
            image: `${web}`,
            category: "Design",
            title: "Web Design",
            description:
                "Learn HTML and its Structure, Creating Web Pages with HTML.",
            rating: 4.2,
            reviews: "1,125",
            instructor: {
                name: "Esther Howard",
                avatar: `${Esther}`,
                text: "2001",
            },
            price: "60,000",
        },
    ];

    const curriculumItems = [
        "Introduction to Computers",
        "Microsoft Office Suite",
        "Internet and Email Basics",
        "Basic Troubleshooting",
        "Practical Projects and Exercises",
    ];

    return (
        <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            {[...Array(5)].map((_, index) => (
                <div key={index} className="max-w-7xl mx-auto mb-16">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">
                            Computer Proficiency
                        </h2>
                        <Link to="/courses/data" className="text-blue-600 font-semibold">
                            View Course
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {courses.map((course, courseIndex) => (
                            <CourseCard key={courseIndex} {...course} />
                        ))}
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Curriculum</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {curriculumItems.map((item, itemIndex) => (
                                <CurriculumItem
                                    key={itemIndex}
                                    number={(itemIndex + 1).toString()}
                                    title={item}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CourseSection;
