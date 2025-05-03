"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Anton } from "next/font/google";

import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Nike from "../../public/images/brands/Nike.png";
import Adidas from "../../public/images/brands/Adidas.png";
import Gucci from "../../public/images/brands/Gucci.png";
import Dior from "../../public/images/brands/Dior.png";
import Versace from "../../public/images/brands/Versace.png";
import Puma from "../../public/images/brands/Puma.png";
import Zara from "../../public/images/brands/Zara.png";
import Prada from "../../public/images/brands/Prada.png";

const brands = [
  { name: "Nike", logo: Nike },
  { name: "Adidas", logo: Adidas },
  { name: "Gucci", logo: Gucci },
  { name: "Dior", logo: Dior },
  { name: "Versace", logo: Versace },
  { name: "Puma", logo: Puma },
  { name: "Zara", logo: Zara },
  { name: "Prada", logo: Prada },
];

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const TrustedBrands = () => {
  const swiperRef = useRef<any>(null);

  return (
    <div
      className="w-full overflow-hidden py-8 bg-white"
      onMouseEnter={() => swiperRef.current?.autoplay.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay.start()}
    >
      <h2 className={`text-center text-xl sm:text-2xl mb-6`}>
        Trusted by Top Fashion Brands
      </h2>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // fallback for some edge cases
        }}
        speed={3000} // smooth continuous motion
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        className="flex items-center bg-gray-100"
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center h-20 py-4">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrustedBrands;
