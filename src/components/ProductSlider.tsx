"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const fashionProducts = [
  {
    id: 1,
    image: "/products/jacket.jpg",
    name: "Classic Leather Jacket",
    brand: "Fashionista",
  },
  {
    id: 2,
    image: "/products/shoes.jpg",
    name: "Retro Sneakers",
    brand: "UrbanStyle",
  },
  {
    id: 3,
    image: "/products/bag.jpg",
    name: "Designer Handbag",
    brand: "ChicTrend",
  },
];

const ProductSlider = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center bg-white rounded-xl">
      <Swiper
        direction="vertical"
        loop={true}
        autoplay={{
          delay: 3000, // 3 seconds
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
            <div className="flex flex-col items-center justify-center text-center space-y-4 h-full">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="rounded-xl object-cover"
              />
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <p className="text-gray-500">{product.brand}</p>
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
                View Product
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Tailwind-style vertical pagination customization */}
      <style jsx global>{`
        .swiper-pagination {
          @apply left-2 top-1/2 -translate-y-1/2 flex flex-col gap-2;
        }
        .swiper-pagination-bullet {
          @apply bg-gray-400 w-3 h-3 rounded-full;
        }
        .swiper-pagination-bullet-active {
          @apply bg-black;
        }
      `}</style>
    </div>
  );
};

export default ProductSlider;
