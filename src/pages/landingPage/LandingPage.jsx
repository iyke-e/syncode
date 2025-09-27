import LandingPageHero from "./components/landingPageHero";
import AboutUs from "./components/aboutUs";
import OurService from "./components/ourService";
import HolidayBanner from "./components/holiddayBanner";
import WhyChooseUs from "./components/whyChooseUs";
import Testimonial from "./components/testimonial";
import OurCourses from "./components/ourCourses";
import Blog from "../courseLandingPage/components/Blog";

const LandingPage = () => (
  <div>
    <LandingPageHero />
    <AboutUs />
    <OurService />
    <HolidayBanner />
    <WhyChooseUs />
    <OurCourses />
    <Testimonial />
    {/* <BlogWidget /> */}
    <Blog />
  </div>
);

export default LandingPage;
