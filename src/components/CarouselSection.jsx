import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Netflix from "../assets/Netflix.png";
import HBO from "../assets/HBO.png";
import AmazonPrime from "../assets/AmazonPrime.png";
import Star from "../assets/Star.png";
import Crunchyroll from "../assets/Cruchyroll.png";
import Paramount from "../assets/Paramount.png";
import AppleTV from "../assets/AppleTV.png";
import Disney from '../assets/Disney.png'
import ESPN from '../assets/espn.png'

const services = [
  { name: "Netflix", logo: Netflix },
  { name: "HBO", logo: HBO },
  { name: "Amazon Prime", logo: AmazonPrime },
  { name: "Crunchyroll", logo: Crunchyroll },
  { name: "Paramount+", logo: Paramount },
  { name: "Apple TV+", logo: AppleTV },
  { name: "Disney+", logo: Disney },
  { name: "Star+", logo: Star },
  { name: "ESPN", logo: ESPN }
];

const CarouselSection = () => {
  return (
    <div className="bg-gray-700 py-8">
      <h2 className="mb-8 text-center text-3xl font-bold text-white">
        Nosssos serviços
      </h2>
      <Swiper
        modules={[]}
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        navigation
        pagination={{ clickable: true }}
        className="w-full max-w-screen-xl"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="flex flex-col items-center">
              <img
                src={service.logo}
                alt={`${service.name} logo`}
                className="mb-4 h-24 w-24 object-contain"
              />
              <h3 className="text-lg font-semibold text-white">{service.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselSection;
