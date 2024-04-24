
import React from "react";
import Slider from "react-slick";

function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="w-full sm:w-80 md:w-96 lg:w-1/2 xl:w-1/3 h-96 bg-red-500 ">
        <img
          className="w-full h-full object-center"
          alt="/"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fruit-shop-banner-ad-design-template-0bb151fb758c9ae788c07409e45314b4_screen.jpg?ts=1566599059"
        />
      </div>
      <div className="w-full sm:w-80 md:w-96 lg:w-1/2 xl:w-1/3 h-96 bg-green-500">
        <img
          className="w-full h-full object-center"
          alt="/"
          src="https://img.freepik.com/free-vector/realistic-harvest-festival-horizontal-banners-set_23-2149671783.jpg"
        />
      </div>
      <div className="w-full sm:w-80 md:w-96 lg:w-1/2 xl:w-1/3 h-96 bg-yellow-500">
        <img
          className="w-full h-full object-center"
          alt="/"
          src="https://i.pinimg.com/originals/72/17/f1/7217f1709a64ad12a4227efb68711017.jpg"
        />
      </div>
      <div className="w-full sm:w-80 md:w-96 lg:w-1/2 xl:w-1/3 h-96 bg-blue-500">
        <img
          className="w-full h-full object-center"
          alt="/"
          src="https://img.freepik.com/premium-psd/vegetable-fruit-grocery-delivery-social-media-instagram-cover-template_677506-33.jpg"
        />
      </div>
    </Slider>
  );
}

export default Carousel;
