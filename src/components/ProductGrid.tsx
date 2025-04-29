import React from "react";
import ProductTile from "./ProductCard";
import { products } from "@/data/data"; // Adjust import path as needed
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const ProductGrid = () => {
  return (
    <div>
      <h3 className={`text-4xl font-extrabold px-10`}>Suggested Products</h3>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <ProductTile
            key={product.productId}
            id={product.productId}
            data={product}
          />
        ))}
      </section>
    </div>
  );
};

export default ProductGrid;
