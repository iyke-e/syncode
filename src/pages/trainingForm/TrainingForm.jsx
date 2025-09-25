import React, { useState } from "react"
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa"; // Import the calendar and arrow icons
import { Link } from "react-router-dom";

const fields = [
    {
        label: "Select preferred course*",
        name: "course",
        type: "select",
        options: [
            "-- Select Course --",
            "Data Science",
            "Front End Development",
            "Back End Development",
        ],
        placeholder: "-- Select Course --",
    },
    {
        label: "Surname*",
        name: "surname",
        type: "text",
        placeholder: "Enter your Surname",
    },
    {
        label: "First Name*",
        name: "first-name",
        type: "text",
        placeholder: "Enter your first name",
    },
    {
        label: "Other Name",
        name: "other-name",
        type: "text",
        placeholder: "Enter your other name",
    },
    {
        label: "Gender*",
        name: "gender",
        type: "select",
        options: ["-- Select Gender --", "Male", "Female"],
        placeholder: "-- Select Gender --",
    },
    {
        label: "Contact Address*",
        name: "contact-address",
        type: "text",
        placeholder: "Enter your contact address",
    },
    {
        label: "Nationality*",
        name: "nationality",
        type: "text",
        placeholder: "Enter your nationality",
    },
    {
        label: "Date of Birth",
        name: "date-of-birth",
        type: "date",
        placeholder: "mm/dd/yyyy",
    },
    {
        label: "Phone Number*",
        name: "phone",
        type: "text",
        placeholder: "Enter your phone number",
    },
    {
        label: "Email Address*",
        name: "email",
        type: "email",
        placeholder: "Enter your email address",
    },
    {
        label: "Password*",
        name: "password",
        type: "password",
        placeholder: "Enter your password",
    },
    {
        label: "Confirm Password*",
        name: "confirm-password",
        type: "password",
        placeholder: "Confirm your password",
    },
    {
        label: "Mode of Study*",
        name: "mode-of-study",
        type: "select",
        options: ["-- Select Mode of Study --", "Full Time", "Part Time"],
        placeholder: "-- Select Mode of Study --",
    },
    {
        label: "Previous Computer Skills*",
        name: "computer-skills",
        type: "select",
        options: ["-- Select --", "Yes", "No"],
        placeholder: "-- Select --",
    },
    {
        label: "If yes, please state your area of speciality",
        name: "speciality",
        type: "text",
        placeholder: "Enter your area of speciality,if any",
    },
    {
        label: "First Name of Next of Kin*",
        name: "next-of-kin-first-name",
        type: "text",
        placeholder: "Enter the first name of next of kin",
    },
    {
        label: "Last Name of Next of Kin*",
        name: "next-of-kin-last-name",
        type: "text",
        placeholder: "Enter the last name of next of kin",
    },
    {
        label: "Relationship with Next of Kin*",
        name: "relationship",
        type: "text",
        placeholder: "Enter relationship with next of kin",
    },
    {
        label: "Contact Address of Next of Kin*",
        name: "next-of-kin-contact-address",
        type: "text",
        placeholder: "Enter contact address of next of kin",
    },
    {
        label: "Phone Number of Next of Kin*",
        name: "next-of-kin-phone",
        type: "text",
        placeholder: "Enter phone number of next of kin",
    },
];

const TrainingForm = () => {
    const [dateOfBirth, setDateOfBirth] = useState(null);

    return (
        <div className="max-w-screen-lg mx-auto p-2 md:p-6 lg:p-6 shadow-xl rounded">
            <h3 className="text-blue-500 text-xl md:text-2xl lg:text-3xl text-center mb-2">
                Acme Training Form
            </h3>
            <h1 className="text-dark-black text-lg md:text-xl lg:text-2xl text-center mb-4">
                Kindly complete the form correctly
            </h1>
            <p className="text-center mb-6">
                <Link to="/login" className="text-gray-600 hover:text-blue-300">
                    Already registered?{" "}
                    <span className="text-blue-500">Login here</span>
                </Link>
            </p>
            <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {fields.map((field, index) => (
                        <div key={index} className="mb-4">
                            <label
                                htmlFor={field.name}
                                className="text-gray-600 block mb-2"
                            >
                                {field.label.replace("*", "")}
                                {field.label.includes("*") && (
                                    <span className="text-red-500">*</span>
                                )}
                            </label>
                            {field.type === "select" ? (
                                <select
                                    id={field.name}
                                    name={field.name}
                                    className="w-full p-3 border border-gray-300 rounded"
                                >
                                    {field.options.map(
                                        (option, optionIndex) => (
                                            <option
                                                key={optionIndex}
                                                value={option}
                                            >
                                                {option}
                                            </option>
                                        )
                                    )}
                                </select>
                            ) : field.type === "date" ? (
                                <input
                                    id={field.name}
                                    name={field.name}
                                    type="date"
                                    value={dateOfBirth}
                                    // readOnly
                                    className="w-full p-3 border border-gray-300 rounded"
                                />
                            ) : (
                                // <div className="relative">
                                //   <input
                                //     id={field.name}
                                //     name={field.name}
                                //     type="date"
                                //     placeholder={field.placeholder}
                                //     value={dateOfBirth ? dateOfBirth.toLocaleDateString() : ''}
                                //     readOnly
                                //     className="w-full p-3 border border-gray-300 rounded pr-10"
                                //   />
                                //   <DatePicker
                                //     selected={dateOfBirth}
                                //     onChange={(date) => setDateOfBirth(date)}
                                //     dateFormat="MM/dd/yyyy"
                                //     className="absolute top-0 right-0 p-2 border border-gray-300 rounded"
                                //     placeholderText="Select Date"
                                //   />
                                //   <FaCalendarAlt className="absolute top-3 right-3 text-gray-500" />
                                // </div>
                                <input
                                    id={field.name}
                                    name={field.name}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    className="w-full p-3 border border-gray-300 rounded"
                                />
                            )}
                        </div>
                    ))}
                </div>
                {/* <div className="flex justify-between items-center w-full"> */}
                <div className="grid grid-cols-2 place-items-start w-full">
                    <Link to="#" className="text-blue-800 hover:text-blue-900 hover:font-bold py-2 px-4 rounded">
                        « Back
                    </Link>
                    <button
                        type="submit"
                        className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-8 rounded flex items-center"
                    >
                        <span>Submit</span>
                        <FaArrowRight className="ml-2" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TrainingForm;
