import React from "react";
import dotsBg from "../assets/images/dots-bg.svg";

const DotsBg = () => {
    return (
        <>
            <img
                src={dotsBg}
                alt="Multiple dots background"
                className="absolute -top-10 -right-16 lg:right-20 -z-10"
            />

            <img
                src={dotsBg}
                alt="Multiple dots background"
                className="absolute -left-16 lg:left-20 xl:left-32 bottom-0 lg:bottom-12 -z-10"
            />
        </>
    );
};

export default DotsBg;
