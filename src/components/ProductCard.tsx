"use client";

import React, { useState } from "react";
import { HiShoppingCart, HiStar } from "react-icons/hi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/useCart";
import { JetBrains_Mono } from "next/font/google";

export interface Product {
  product_id: string;
  product_name: string;
  images: string[];
  slug: string;
  description: string;
  brand: string;
  category: string;
  sub_category: string;
  colors: string[];
  price: number;
  discount: number;
  style: string;
  gender: string;
  reviews: Array<{
    userId: string;
    review: string;
    rating: number;
    date: string;
  }>;
  ratings: number;
  seasons: string[];
  size: string[];
  stock: { [key: string]: number };
  tags: string[];
  similar_products: string[];
  dateAdded: string;
}

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

interface ProductProps {
  data: Product;
}

const ProductTile: React.FC<ProductProps> = ({ data }) => {
  const { addToCart } = useCart();
  const [liked, setLiked] = useState(false);

  const toggleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLiked(!liked);
  };

  const addToCartHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(data);
  };

  return (
    <div className="cursor-pointer select-none hover:transition-all hover:z-10 ease-in-out duration-100">
      <section className="bg-white shadow-2xl h-full flex flex-col gap-4 rounded-xl">
        {/* Image Section */}
        <div className="relative w-full h-72">
          <Link href={`/products/${data.slug}`}>
            <Image
              src={data.images[0]}
              alt={data.product_name}
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-t-xl"
            />
          </Link>

          {/* Like button */}
          <button
            onClick={toggleLike}
            className="absolute top-2 left-2 bg-white p-2 rounded-full shadow-md hover:scale-105 transition"
          >
            {liked ? (
              <FaHeart className="text-red-500 text-lg" />
            ) : (
              <FaRegHeart className="text-gray-400 text-lg" />
            )}
          </button>
        </div>

        {/* Product Details */}
        <div className="flex justify-between items-start gap-3 p-4">
          <div className="flex flex-col gap-2 w-full">
            <Link href={`/products/${data.slug}`}>
              <h1 className="font-bold text-xl hover:underline">
                {data.product_name}
              </h1>
              <p className="text-gray-500 text-sm line-clamp-1">
                {data.description}
              </p>
            </Link>

            <div className="flex items-center gap-2 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <HiStar
                  key={i}
                  className={
                    i < Math.round(data.ratings || 0)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
              <span className="text-sm text-gray-600">
                ({data.ratings?.toFixed(1) || "0"})
              </span>
            </div>

            <div
              className={`${jetBrainsMono.className} text-slate-500 font-black`}
            >
              {data.discount ? (
                <>
                  <span className="line-through text-gray-500 mr-2">
                    RWF {data.price.toFixed(2)}
                  </span>
                  <span className="text-black">|</span>
                  <span className="text-lg text-black">
                    RWF {data.discount.toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="text-lg text-black">
                  RWF {data.price.toFixed(2)}
                </span>
              )}
            </div>
          </div>

          {/* Cart Button */}
          <button
            onClick={addToCartHandler}
            className="text-white bg-black p-3 rounded-xl flex items-center justify-center hover:bg-blue-700 transition-all duration-200 ease-in-out"
          >
            <HiShoppingCart className="text-xl" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductTile;
