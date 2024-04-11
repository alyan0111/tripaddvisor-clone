import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoLocationSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import StarRatings from 'react-star-ratings';
import badge from './badge.svg';

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
    "Amsterdam Luxury Lives Guided Canal Cruise with Onboard Bar",
    "Small-Group Explore Angkor Wat Sunrise Tour with Guide from Siem Reap",
    "San Juan Guided Snorkel Tour",
    "Hanoi Jeep Tours: Food+ Culture + Sight +Fun By Vietnam Army Jeep",
  ];
  const ratings = [
    "3022",
    "10,999",
    "1233",
    "12,333",
    "12,212",
    "9002",
    "2121",
    "4342",
    "5432",
    "9993"
  ];
  const price = [
    "192",
    "21",
    "344",
    "23",
    "354",
    "656",
    "98",
    "656",
    "232",
    "124"
  ];
  const star = [
    5,
    4.4,
    4,
    5,
    4.5,
    5,
    5,
    4.5,
    5,
    5
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div>
      <div className=" my-20">
        <p className="font-bold text-2xl">Your recent searches</p>
        <button className="border-2 border-slate-300 rounded-lg my-6 flex items-center px-4 py-2">
          <span className="text-3xl">
            <IoLocationSharp />
          </span>
          <div>
            <p className="font-semibold text-lg">Marrakech</p>
            <p className="text-sm">Marrakech-Safi</p>
          </div>
        </button>
      </div>
      <div className=" max-w-64 sm:max-w-xl md:max-w-3xl lg:max-w-5xl relative">
        <p className="text-2xl font-semibold my-7">Top experiences on Tripadvisor</p>
        <Slider {...settings}>
          {images.map((image, index) => (
            <Link to="#" key={index}>
              <div>
                <div className="px-3 relative">
                  <span className="absolute top-2 right-5 bg-slate-200 rounded-full p-2 text-xl z-10">
                    <FaHeart className="text-red-500 hover:text-red-600 cursor-pointer" />
                  </span>
                  <img
                    className=" rounded-md hover:opacity-90 filter brightness-75 z-0"
                    src={image}
                    alt={`place ${index}`}
                  />
                  <div className="absolute bg-yellow-500 rounded-t-full bottom-2 left-5">
                    <img
                      src={badge}
                      alt="logo"
                      className="h-10 -mb-2"
                    />
                    <p className="font-bold text-sm text-center">2023</p>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-lg text-balance font-semibold mt-1">
                    {imageTitles[index]}
                  </p>
                  <div className="flex items-center ">
                    <StarRatings
                      rating={star[index]} 
                      starRatedColor="gold"
                      starEmptyColor="gray"
                      numberOfStars={5}
                      name='rating'
                      starDimension="20px"
                      starSpacing="1px"
                    />
                    <p className="ml-3 mt-1 text-sm text-slate-500">{ratings[index]}</p>
                  </div>
                  <p className="text-sm font-semibold">from ${price[index]} per adult</p>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel2;
