"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Anton, JetBrains_Mono } from "next/font/google";
import { HiArrowLeft, HiArrowRight, HiArrowLongRight } from "react-icons/hi2";
import type { Swiper as SwiperType } from "swiper";

// Fonts
const anton = Anton({ subsets: ["latin"], weight: "400", display: "swap" });
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Images
import hats_caps from "../../public/images/categories/hats.jpg";
import women_fashion from "../../public/images/categories/Women_fashion.jpg";
import men_fashion from "../../public/images/categories/Men's_fashion.jpg";
import Glasses from "../../public/images/categories/glasses.jpg";
import Jewerly from "../../public/images/categories/Jewerly.jpg";
import HandBags from "../../public/images/categories/Handbags.jpg";
import women_shoes from "../../public/images/categories/Women_shoes.jpg";
import men_shoes from "../../public/images/categories/Men's-shoes.jpg";
import watches from "../../public/images/categories/Watches.jpg";
import backPack from "../../public/images/categories/backpack.jpg";
import earrings from "../../public/images/categories/Earings.jpg";

const categories = [
  {
    id: 1,
    name: "Men's Fashion",
    image: men_fashion,
    route: "/category/men-fashion",
  },
  {
    id: 2,
    name: "Women's Fashion",
    image: women_fashion,
    route: "/category/women-fashion",
  },
  { id: 3, name: "Glasses", image: Glasses, route: "/category/glasses" },
  { id: 4, name: "Jewelry", image: Jewerly, route: "/category/jewelry" },
  {
    id: 5,
    name: "Hats & Caps",
    image: hats_caps,
    route: "/category/hats-caps",
  },
  { id: 6, name: "Handbags", image: HandBags, route: "/category/handbags" },
  { id: 7, name: "Backpacks", image: backPack, route: "/category/backpacks" },
  {
    id: 8,
    name: "Men's Shoes",
    image: men_shoes,
    route: "/category/men-shoes",
  },
  {
    id: 9,
    name: "Women's Shoes",
    image: women_shoes,
    route: "/category/women-shoes",
  },
  {
    id: 10,
    name: "Accessories",
    image: earrings,
    route: "/category/accessories",
  },
  { id: 11, name: "Watches", image: watches, route: "/category/watches" },
];

const CategorySlider = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div
      className="relative w-full px-10 bg-white py-10"
      onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay?.start()}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between pb-5">
        <h2 className={`text-4xl ${anton.className}`}>Categories</h2>
        <span className="text-3xl cursor-pointer">
          <HiArrowLongRight />
        </span>
      </div>

      {/* Custom Navigation Buttons */}
      {/* <div className="swiper-button-prev text-black text-xl p-2 absolute left-2 top-1/2 z-10 bg-white border shadow cursor-pointer hover:bg-gray-200">
        <HiArrowLeft />
      </div>
      <div className="swiper-button-next text-black text-xl p-2 absolute right-2 top-1/2 z-10 bg-white border shadow cursor-pointer hover:bg-gray-200">
        <HiArrowRight />
      </div> */}

      {/* Swiper Carousel */}
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation, Autoplay]}
        className="category-swiper"
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat.id}>
            <div className="relative group overflow-hidden shadow-md">
              <Image
                src={cat.image}
                alt={cat.name}
                className="w-full h-[300px] object-cover"
              />
              <div
                className={`absolute bg-black bottom-0 left-0 text-white p-4 px-6 text-3xl ${anton.className}`}
              >
                {cat.name}
              </div>

              {/* Hover overlay with View More */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
                <Link
                  href={cat.route}
                  className={`${jetBrainsMono.className} bg-white text-black px-6 py-2 font-medium hover:bg-gray-200 transition`}
                >
                  View More
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySlider;
