import { Outlet } from "react-router-dom";
import Navbar from "../header/Navbar";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";

const RootLayout = () => {
  return (
    <div className="  relative min-h-screen">
      <ScrollToTop />

      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default RootLayout;
