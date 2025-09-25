import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown } from "../../assets/icons/ChevronDown";
import SearchIcon from "../../assets/icons/SearchIcon.svg";
import Logo from "../../assets/images/LogoLight.svg";
import { menuLinks } from "../../data/navbar";
import Modal from "./Modal";
import MenuIcon from "../../assets/icons/menu-icon.svg";
import CloseIcon from "../../assets/icons/close-icon.svg";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed z-50 shadow-lg bg-white py-2 md:py-4 w-screen">
            <div className="px-4 flex flex-row items-center justify-between gap-4 w-full max-w-[1280px] mx-auto">
                {/* Logo */}
                <div className="flex-none">
                    <Link to="/">
                        <img src={Logo} alt="ACME Software Lab Logo" />
                    </Link>
                </div>

                {/* Search Bar */}
                <div className="hidden md:flex justify-between items-center p-1 border border-dark-purple rounded-md">
                    <div className="flex items-center px-3">
                        <img src={SearchIcon} className="" alt="" />

                        <input
                            type="text"
                            placeholder="Want to learn?"
                            className="px-2 py-1 outline-none w-36 min-w-0 max-w-40"
                        />
                    </div>
                    <button className="bg-[#EEF2FF] text-dark-purple text-sm font-semibold px-4 py-2 flex items-center justify-between flex-none gap-2 rounded-md">
                        <span>Explore</span>
                        <ChevronDown />
                    </button>
                </div>

                {/* Menu Links */}
                <div className="hidden lg:flex items-center justify-between space-x-6">
                    {menuLinks.map((link) => (
                        <NavLink
                            key={link.id}
                            to={link.to}
                            className={({ isActive }) =>
                                [
                                    isActive
                                        ? "font-semibold text-dark-purple"
                                        : "font-medium text-black",
                                    "hover:text-dark-purple text-center text-nowrap",
                                ].join(" ")
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>

                {/* Sign Up & Log In */}
                <div className="hidden md:flex items-center justify-end space-x-2">
                    <Link
                        to="/signup"
                        className="px-3 py-2 text-black text-center whitespace-nowrap font-semibold rounded-md hover:bg-[#EEF2FF] hover:text-dark-purple transition duration-300"
                    >
                        Sign Up
                    </Link>
                    <Link
                        to="/login"
                        className="px-3 py-2 text-white bg-dark-purple whitespace-nowrap font-semibold text-center rounded-md hover:bg-[#EEF2FF] hover:text-dark-purple  transition duration-300"
                    >
                        Log In
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center">
                    <button
                        className="mobile-menu-button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <img src={MenuIcon} className="size-8" alt="" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <Modal isOpen={isMenuOpen}>
                <div className="flex flex-col gap-6">
                    {/* Modal Header */}
                    <div className="flex justify-between items-center gap-2 relative">
                        <img
                            src={Logo}
                            alt="ACME Software Lab Logo"
                            className=""
                        />
                        <button
                            className="absolute top-0 right-0"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <img src={CloseIcon} className="size-5" alt="" />
                        </button>
                    </div>

                    {/* Search Bar */}
                    <div className="flex md:hidden items-center gap-4 mt-6 p-1 border border-dark-purple rounded-md">
                        <div className="flex items-center pl-2 w-full">
                            <img
                                src={SearchIcon}
                                className="flex-none w-5"
                                alt=""
                            />

                            <input
                                type="text"
                                placeholder="Want to learn?"
                                className="px-2 py-1 outline-none mr-2 w-1/2 flex-1"
                            />
                            <button className="bg-[#EEF2FF] w-24 flex-none text-dark-purple text-sm font-semibold px-3 py-2 flex items-center justify-between gap-2 rounded-md ml-auto">
                                <span>Explore</span>
                                <ChevronDown />
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col divide-y divide-neutral-200">
                        {menuLinks.map((link) => (
                            <NavLink
                                key={link.id}
                                to={link.to}
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={({ isActive }) =>
                                    [
                                        isActive
                                            ? "font-semibold text-dark-purple"
                                            : "font-medium text-black",
                                        "py-4 hover:text-dark-purple",
                                    ].join(" ")
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    <div className="flex md:hidden flex-col space-y-3">
                        <Link
                            to="/signup"
                            className="px-3 py-2 w-full text-center font-semibold rounded-md bg-[#EEF2FF] text-dark-purple transition duration-300"
                        >
                            Sign Up
                        </Link>
                        <Link
                            to="/login"
                            className="px-3 py-2 w-full text-white bg-dark-purple font-semibold text-center rounded-md hover:bg-[#EEF2FF] hover:text-dark-purple  transition duration-300"
                        >
                            Log In
                        </Link>
                    </div>
                </div>
            </Modal>
        </nav>
    );
};

export default Navbar;
