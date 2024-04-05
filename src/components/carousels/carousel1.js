import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel1 = () => {
  const images = [
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/79/01/88/caption.jpg?",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/79/01/c6/caption.jpg?",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/79/01/fd/caption.jpg?",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/79/02/1d/caption.jpg?1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/79/02/38/caption.jpg?",
  ];
  const imageTitles = [
    "Asia Beaches",
    "Caribbean Beaches",
    "Europe Beaches",
    "South Pacific Beaches",
    "American Beaches",
  ];
  const sliderRef = useRef(null);

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
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
        <p className="font-bold text-2xl">2024’s award-winning shores</p>
        <p>Travelers’ Choice Awards Best of the Best Beaches</p>
      </div>
      <div className="mx-auto max-w-6xl relative">
        <Slider {...settings}>
          {images.map((image, index) => (
            <a href="#">
              <div key={index} className="px-3 relative">
                <img
                  className="mx-auto rounded-md hover:opacity-90 filter brightness-75"
                  src={image}
                  alt={`Image ${index}`}
                />
                <div className="absolute  left-6 bottom-0 ">
                  <p className="text-white text-3xl font-bold ">
                    {imageTitles[index]}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </Slider>
        <button
          onClick={goToPrevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 px-2 py-1 rounded-lg"
        >
          Prev
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 px-2 py-1 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel1;
