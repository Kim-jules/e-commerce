import ProductGrid from "@/components/ProductGrid";
import Search from "@/components/Search";
import Image from "next/image";
import React from "react";
import img1 from "../../../public/images/11.jpg";
import { Anton, JetBrains_Mono } from "next/font/google";

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
const Products = () => {
  return (
    <div className="mt-24">
      <div className="heading relative w-full h-[600px]">
        {/* Background image */}
        <Image
          src={img1}
          alt="Fashion Products"
          className="w-full h-full object-cover"
        />

        {/* Blurred overlay */}
        <div className="absolute inset-0 backdrop-blur-xs bg-black/30 z-10 flex flex-col gap-5 px-30 py-40">
          <h1 className={`text-white text-5xl font-bold`}>
            Life isn’t perfect but your <br /> outfit can be.
          </h1>
          <p className="italic text-gray-100">
            Discover fashion that empowers your individuality. From everyday{" "}
            <br />
            essentials to standout pieces, our curated collections help you look{" "}
            <br />
            and feel your best—no matter the moment. <br />
          </p>
        </div>
      </div>

      <div className="products">
        <div className="filters"></div>
        <div className="list-of-products"></div>
      </div>
    </div>
  );
};

export default Products;
