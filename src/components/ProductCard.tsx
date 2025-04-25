"use client";

import React from "react";
import { HiShoppingCart, HiStar } from "react-icons/hi";
import Image from "next/image";
import { useCart } from "@/context/useCart";

export interface Product {
  productId: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  brand: string;

  price: number;
  discountPrice?: number;
  inStock: boolean;

  images: string[];
  rating?: number;

  sizes?: string[];
  colors?: string[];

  createdAt: string;
  updatedAt: string;
}

interface ProductProps {
  id: string;
  data: Product;
}

const ProductTile: React.FC<ProductProps> = ({ data }) => {
  const { addToCart } = useCart();

  const handleClick = (product: Product) => {
    addToCart(product);
  };

  return (
    <div className="cursor-pointer select-none hover:transition-all hover:z-10 ease-in-out duration-100">
      <ul>
        <li>
          <section className="bg-white p-4 rounded-3xl shadow-2xl h-full flex flex-col gap-4">
            <div className="w-full h-72">
              <Image
                src={data.images[0]}
                alt={data.name}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-2 w-full">
                <h1 className="font-bold text-xl">{data.name}</h1>
                <p className="text-gray-500 text-sm line-clamp-2">
                  {data.description}
                </p>

                <div className="flex items-center gap-2 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <HiStar
                      key={i}
                      className={
                        i < Math.round(data.rating || 0)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                  <span className="text-sm text-gray-600">
                    ({data.rating?.toFixed(1) || "0"})
                  </span>
                </div>

                <div className="text-blue-600 font-semibold">
                  {data.discountPrice ? (
                    <>
                      <span className="line-through text-gray-500 mr-2">
                        RWF {data.price.toFixed(2)}
                      </span>
                      <span className="text-lg">
                        RWF {data.discountPrice.toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span className="text-lg">RWF {data.price.toFixed(2)}</span>
                  )}
                </div>
              </div>

              <button
                onClick={() => handleClick(data)}
                className="text-white bg-blue-600 p-3 rounded-xl flex items-center justify-center hover:bg-blue-700"
              >
                <HiShoppingCart className="text-xl" />
              </button>
            </div>
          </section>
        </li>
      </ul>
    </div>
  );
};

export default ProductTile;
