import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  return (
    <Slider {...settings} className="absolute inset-0 w-full h-full">
      <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/images/headerImage1.jpeg')" }}></div>
      <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/images/headerImage2.jpeg')" }}></div>
      <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/images/headerImage3.jpeg')" }}></div>
    </Slider>
  );
};

export default Carousel;
