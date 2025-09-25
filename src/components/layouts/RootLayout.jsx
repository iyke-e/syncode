import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../header/Navbar";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";

const RootLayout = () => {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] max-w-[100svw] overflow-hidden relative min-h-screen">
            <ScrollToTop />
            
            <header>
                <Navbar />
            </header>

            <main className="pt-20 md:pt-[6.5rem]">
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default RootLayout;
