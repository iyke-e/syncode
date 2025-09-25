import React from "react";
import Logo from "../assets/images/LogoDark.svg";
import Facebook from "../assets/icons/Facebook.svg";
import Instagram from "../assets/icons/Instagram.svg";
import Linkedin from "../assets/icons/Linkedin.svg";
import Twitter from "../assets/icons/Twitter.svg";
import Youtube from "../assets/icons/Youtube.svg";
import { Link } from "react-router-dom";

const quickLinks = [
    { id: 1, name: "About Us", to: "/about" },
    { id: 2, name: "Our Class", to: "/courses-overview" },
    { id: 3, name: "Blog", to: "" },
    { id: 4, name: "Contact", to: "/contact" },
];

const socialLinks = [
    { id: 1, icon: Facebook, to: "" },
    { id: 2, icon: Twitter, to: "" },
    { id: 3, icon: Instagram, to: "" },
    { id: 4, icon: Linkedin, to: "" },
    { id: 5, icon: Youtube, to: "" },
];

const resourcesLinks = [
    { id: 1, name: "Support", to: "/contact" },
    { id: 2, name: "Privacy", to: "" },
    { id: 3, name: "Terms & Conditions", to: "" },
];

const Footer = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 bg-black p-10 md:p-20">
            <div className="flex flex-col gap-3 md:gap-5">
                <img
                    src={Logo}
                    alt="ACME Software Lab Logo"
                    className="w-44"
                />

                <p className="text-base leading-8 tracking-wider text-white">
                    Where your journey towards technological excellence begins.
                </p>
            </div>

            <div className="flex flex-col gap-3 md:gap-5 pl-0 lg:pl-14">
                <h4 className="text-2xl font-semibold text-white tracking-wider">
                    Quick links
                </h4>
                <div className="flex flex-col gap-3">
                    {quickLinks.map((menu) => (
                        <Link
                            key={menu.id}
                            to={menu.to}
                            className="text-base tracking-wider text-white hover:text-deep-purple hover:font-medium hover:translate-x-1 transition-all duration-300"
                        >
                            {menu.name}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-3 md:gap-5">
                <h4 className="text-2xl font-semibold text-white tracking-wider">Resources</h4>
                <div className="flex flex-col gap-3">
                    {resourcesLinks.map((menu) => (
                        <Link
                            key={menu.id}
                            to={menu.to}
                            className="text-base tracking-wider text-white hover:text-deep-purple hover:font-medium hover:translate-x-1 transition-all duration-300"
                        >
                            {menu.name}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-3 md:gap-5">
                <h4 className="text-2xl font-semibold text-white tracking-wider">
                    Social media
                </h4>
                <div className="flex flex-row gap-2 -ml-3">
                    {socialLinks.map((item) => (
                        <Link key={item.id}>
                            <img src={item.icon} className="w-10 h-auto hover:scale-125 transition-all duration-300" alt="Social media link" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;
