import React, { useState } from "react";
import dotsBg from "../../assets/images/dots-bg.svg";
import { Link } from "react-router-dom";
import { Google, Eye, EyeOff, ExternalLink, Dot } from "./components/icons";
import DotsBg from "../../components/DotsBg";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordShow = (e) => {
        e.preventDefault();

        setShowPassword(!showPassword);
    };

    return (
        <section className="relative flex items-center justify-center my-10">
            <DotsBg />
            <div className="flex flex-col gap-10 w-full max-w-[540px] bg-white p-8 shadow-md shadow-light-purple rounded-lg">
                <div className="text-center space-y-2">
                    <h1 className="font-semibold page-heading text-[#262626]">
                        Sign Up
                    </h1>
                    <p className="">
                        Create an account to unlock exclusive features.
                    </p>
                </div>

                <div className="flex flex-col gap-6">
                    <form className="flex flex-col gap-5 color-[#262626]">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="full_name" className="font-medium">
                                Full Name
                            </label>
                            <input
                                type="full_name"
                                id="full_name"
                                className="bg-[#FCFCFD] color-black border border-[#F1F1F3] rounded-lg px-5 py-3 focus:outline-none"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="bg-[#FCFCFD] color-black border border-[#F1F1F3] rounded-lg px-5 py-3 focus:outline-none"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="password" className="font-medium">
                                Password
                            </label>
                            <div className="w-full relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    className="w-full bg-[#FCFCFD] color-black border border-[#F1F1F3] rounded-lg px-5 py-3 focus:outline-none"
                                    placeholder="Enter your passsword"
                                />

                                <button
                                    className="absolute right-0 pr-5 inset-y-0"
                                    onClick={handlePasswordShow}
                                >
                                    {showPassword ? (
                                        <EyeOff className="text-black" />
                                    ) : (
                                        <Eye className="" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <input
                                type="checkbox"
                                id="remember-me"
                                className=""
                            />
                            <label htmlFor="remember-me">
                                I agree with{" "}
                                <Link
                                    to="#"
                                    className="underline underline-offset-2"
                                >
                                    Terms of Use
                                </Link>{" "}
                                and{" "}
                                <Link
                                    to="#"
                                    className="underline underline-offset-2"
                                >
                                    Privacy Policy
                                </Link>
                            </label>
                        </div>

                        <button className="px-5 py-3 bg-dark-purple hover:bg-deep-purple text-white font-medium rounded-lg">
                            Sign Up
                        </button>
                    </form>

                    <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-center w-full">
                        <div className="h-[2px] bg-[#E4E4E7]"></div>
                        <span className="text-[#98989A]">OR</span>
                        <div className="h-[2px] bg-[#E4E4E7]"></div>
                    </div>

                    <button className="flex justify-center gap-4 px-5 py-3 bg-[#F7F7F8] hover:bg-[#E4E4E7] border border-[#F1F1F3] rounded-lg font-medium">
                        <Google className="" />
                        Sign Up with Google
                    </button>

                    <p className="text-center">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="font-medium underline underline-offset-2"
                        >
                            Login
                        </Link>
                        <ExternalLink className="inline w-4" />
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Signup;
