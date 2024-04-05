import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoLocationSharp } from "react-icons/io5";

const Carousel2 = () => {
  const images = [
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5d/bd/8c/caption.jpg?w=300&h=300&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/2e/3e/0a/caption.jpg?w=300&h=300&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/65/66/4a/caption.jpg?w=300&h=300&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/bb/da/be/caption.jpg?w=300&h=300&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/a3/85/f5/caption.jpg?w=300&h=300&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/ff/ee/d1/caption.jpg?w=300&h=300&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/60/68/93/caption.jpg?w=300&h=300&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/ee/a2/6a/caption.jpg?w=300&h=300&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/7e/2f/ec/caption.jpg?w=300&h=300&s=1",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/a8/7c/38/caption.jpg?w=300&h=300&s=1",
  ];
  const imageTitles = [
    "Grand Circle Island and Haleiwa 9 Hour Tour",
    "Grand Circle Island and Haleiwa 9 Hour Tour",
    "Ubud Tour - Best of Ubud - All Inclusive",
    "Dubai Red Dunes ATV, Sandsurf, Stargazing & 5* BBQ Al Khayma Camp",
    "Best DMZ Tour Korea from Seoul (Red Suspension Bridge Optional)",
    "Reykjavik Food Walk - Local Foodie Adventure in Iceland",
    "Amsterdam Luxury Live Guided Canal Cruise with Onboard Bar",
    "Small-Group Explore Angkor Wat Sunrise Tour with Guide from Siem Reap",
    "San Juan Guided Snorkel Tour",
    "Hanoi Jeep Tours: Food+ Culture + Sight +Fun By Vietnam Army Jeep",
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
    verticalSwiping:true,
    arrows:true,
    
  };

  return (
    <div>
      <div className="mx-2 my-20">
        <p className="font-bold text-2xl">Your recent searches</p>
        <button className="border-2 border-slate-300 rounded-lg my-6 flex items-center px-4 py-2" >
          <span className="text-3xl">
            <IoLocationSharp />
          </span>
          <div>
          <p className="font-semibold text-lg">Marrakech</p>
          <p className="text-sm">Marrakech-Safi</p>
          </div>
        </button>
      </div>
      <div className="mx-auto max-w-6xl relative">
        <p className="text-2xl font-semibold my-7 mx-2">Top experiences on Tripadvisor</p>
        <Slider {...settings}>
          {images.map((image, index) => (
            <a href="#">
              <div key={index} className="px-3">
                <img
                  className="mx-auto rounded-md hover:opacity-90 filter brightness-75"
                  src={image}
                  alt={`Image ${index}`}
                />
                <div>
                  <p className=" text-lg font-semibold ">
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

export default Carousel2;
