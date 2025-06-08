"use client";

import { useParams } from "next/navigation";
import { useData } from "@/context/DataContext";
import { JetBrains_Mono } from "next/font/google";
import { HiMinus, HiPlus, HiStar } from "react-icons/hi";
import { useState } from "react";
import { useCart } from "@/context/useCart";

const jetBrainsMono = JetBrains_Mono({
  weight: "200",
  subsets: ["latin"],
  display: "swap",
});

export default function ProductDetails() {
  const { cart, addToCart, increaseQuantity, decreaseQuantity } = useCart();
  const [quantity, setQuantity] = useState<number>(0);
  const { slug } = useParams();
  const { data } = useData();
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const product = data.find((p) => p.slug === slug);

  if (!product) {
    return <p className="p-4 mt-24">Loading or Product not found...</p>;
  }

  return (
    <div className="mt-24 px-6 lg:px-20 py-10">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
        {/* Product Info */}
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-3xl md:text-5xl font-bold capitalize">
            {product.slug}
          </h1>
          <p className="text-gray-700 text-base md:text-lg">
            {product.description}
          </p>

          <div className="font-semibold  flex gap-3">
            <span className="normal text-lg md:text-xl">Brand:</span>
            <p className="italic text-lg md:text-lg">{product.brand}</p>
          </div>

          {/* <p className="text-sm text-gray-500">Category: {product.category}</p> */}

          <div className={`${jetBrainsMono.className} text-2xl md:text-2xl`}>
            {product.discount ? (
              <>
                <span className="text-2xl md:text-2xl line-through text-gray-500">
                  RWF {product.price.toFixed(2)}
                </span>
                <span className="text-black">|</span>
                <span className="text-lg text-black">
                  RWF {product.discount.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-2xl md:text-3xl text-black">
                RWF {product.price.toFixed(2)}
              </span>
            )}
          </div>

          <div className="flex text-yellow-500 text-xl md:text-2xl">
            {[...Array(5)].map((_, i) => (
              <HiStar
                key={i}
                className={
                  i < Math.round(product.ratings || 0)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
          </div>

          {/* Colors */}
          <div className="colors flex gap-3 mt-4 items-center">
            {/* <p className="text-sm text-gray-600"></p> */}
            {product.colors.map((color: string, i: number) => (
              <button
                key={i}
                title={color}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border-2 ${
                  selectedColor === color
                    ? "border-black scale-110"
                    : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          {/* Sizes (now horizontal and responsive) */}
          <div className="flex flex-wrap gap-3">
            {product.size.map((size: string, i: number) => (
              <span
                key={i}
                className="w-10 h-10 border flex items-center justify-center text-sm"
              >
                {size}
              </span>
            ))}
          </div>

          {/* Increase and decrease */}
          <div className="increase-decrease">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="bg-gray-200 px-2 py-1 rounded"
              >
                <HiMinus />
              </button>
              <span className="text-sm font-medium">{quantity}</span>
              <button
                onClick={() =>
                  setQuantity((prev) =>
                    product.stock && prev < product.stock ? prev + 1 : prev
                  )
                }
                className="bg-gray-200 px-2 py-1 rounded"
              >
                <HiPlus />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-bold mt-4">
            <button
              className={`p-4 border-black border-2 ${jetBrainsMono.className} hover:cursor-pointer hover:bg-black hover:text-white hover:shadow-2xl transition-all ease-in-out duration-300 bg-white`}
            >
              Buy now
            </button>
            <button
              className={`p-4 bg-black text-white ${jetBrainsMono.className} hover:cursor-pointer hover:bg-white hover:border-2 hover:text-black hover:shadow-2xl transition-all ease-in-out duration-300`}
              onClick={() => addToCart(product)}
            >
              Add to cart
            </button>
          </div>
        </div>

        {/* Images */}
        <div className="flex-1">
          {product.images?.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {product.images.map((src: string, idx: number) => (
                <img
                  key={idx}
                  src={src}
                  alt={product.name}
                  className="rounded-lg object-cover w-full h-40 sm:h-48 lg:h-56"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
