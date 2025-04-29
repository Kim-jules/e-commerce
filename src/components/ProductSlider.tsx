"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import img1 from "../../public/images/6.jpg";
import img3 from "../../public/images/3.jpg";
import img4 from "../../public/images/4.jpg";
import img5 from "../../public/images/5.jpg";
import { Anton, JetBrains_Mono } from "next/font/google";

const fashionProducts = [
  {
    id: 1,
    image: img1,
    name: "Classic Leather Jacket",
    brand: "Fashionista",
  },
  {
    id: 2,
    image: img3,
    name: "Retro Sneakers",
    brand: "UrbanStyle",
  },
  {
    id: 3,
    image: img4,
    name: "Designer Handbag",
    brand: "ChicTrend",
  },
  {
    id: 4,
    image: img5,
    name: "Designer Handbag",
    brand: "ChicTrend",
  },
];

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const ProductSlider = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-white">
      <Swiper
        direction="vertical"
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="w-full h-full"
      >
        {fashionProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="flex flex-col items-start justify-center space-y-4 max-h-screen">
              <div className="relative w-full h-screen">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                />
              </div>
              <div className="information fixed flex flex-col items-start justify-center text-center space-y-4 max-h-screen px-6 sm:px-12 md:px-20 bg-black py-8 sm:absolute sm:bottom-0 sm:left-0 sm:right-0 sm:w-auto">
                <h2
                  className={`font-bold ${anton.className} text-4xl text-white sm:text-6xl md:text-8xl leading-tight`}
                >
                  {product.name}
                </h2>
                <p className="text-gray-500 sm:text-2xl">{product.brand}</p>
                <button
                  className={`bg-white px-6 py-3 transition text-sm sm:text-base ${jetBrainsMono.className}`}
                >
                  View Product
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper custom pagination styling */}
      <style jsx global>{`
        .swiper-pagination {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #cbd5e1;
          border-radius: 9999px;
          transition: background 0.3s;
        }

        .swiper-pagination-bullet-active {
          background: #000;
        }

        @media (max-width: 768px) {
          .swiper-pagination {
            top: auto;
            bottom: 1rem;
            left: 50%;
            transform: translateX(-50%);
            flex-direction: row;
            justify-content: center;
            gap: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductSlider;
