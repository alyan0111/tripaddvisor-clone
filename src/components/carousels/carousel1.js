import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Carousel1 = () => {
  const images = [
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/79/01/88/caption.jpg?w=300&h=300&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/79/01/c6/caption.jpg?w=300&h=300&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/79/01/fd/caption.jpg?w=300&h=300&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/79/02/1d/caption.jpg?w=300&h=300&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/79/02/38/caption.jpg?w=300&h=300&s=1",
  ];
  const imageTitles = [
    "Asia Beaches",
    "Caribbean Beaches",
    "Europe Beaches",
    "South Pacific Beaches",
    "American Beaches",
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="mx-2 my-4">
        <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">2024’s award-winning shores</p>
        <p className="text-sm sm:text-base">Travelers’ Choice Awards Best of the Best Beaches</p>
      </div>
      <div className="mx-auto max-w-6xl relative">
        <Slider {...settings}>
          {images.map((image, index) => (
            <Link to="#">
              <div key={index} className="px-3 relative">
                <img
                  className="mx-auto rounded-md hover:opacity-90 filter brightness-75"
                  src={image}
                  alt={`place ${index}`}
                />
                <div className="absolute  left-6 bottom-0 ">
                  <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ">
                    {imageTitles[index]}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel1;
