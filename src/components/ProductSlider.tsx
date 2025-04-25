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
    image:
      "https://images.unsplash.com/photo-1582735684126-6b6f85c609b5?auto=format&fit=crop&w=800&q=80",
    name: "Classic Leather Jacket",
    brand: "Fashionista",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600180758890-6f3d22b7c47c?auto=format&fit=crop&w=800&q=80",
    name: "Retro Sneakers",
    brand: "UrbanStyle",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1622553986175-93029a7f51a1?auto=format&fit=crop&w=800&q=80",
    name: "Designer Handbag",
    brand: "ChicTrend",
  },
];

const ProductSlider = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center bg-white">
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
            <div className="flex flex-col items-center justify-center text-center space-y-4 max-h-screen">
              <div className="relative w-[300px] h-[300px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="rounded-xl object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <p className="text-gray-500">{product.brand}</p>
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
                View Product
              </button>
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
          width: 12px;
          height: 12px;
          background: #cbd5e1; /* Tailwind gray-400 */
          border-radius: 9999px;
          transition: background 0.3s;
        }
        .swiper-pagination-bullet-active {
          background: #000; /* Tailwind black */
        }
      `}</style>
    </div>
  );
};

export default ProductSlider;
