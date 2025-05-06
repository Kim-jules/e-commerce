import ProductGrid from "@/components/ProductGrid";
import Search from "@/components/Search";
import Image from "next/image";
import React from "react";
import img1 from "../../../public/images/11.jpg";

const Products = () => {
  return (
    <div className="mt-24">
      <div className="heading">
        <div className="image w-full h-[600px] ">
          <div className="w-full h-[600px] absolute bg-black z-30 backdrop-blur-2xl"></div>
          <Image
            src={img1}
            alt="Fashion Products"
            className="w-full h-full object-cover"
          />
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
