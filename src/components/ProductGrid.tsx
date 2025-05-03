"use client";

import React from "react";
import ProductTile from "./ProductCard";
import { useData } from "@/context/DataContext"; // Adjust import path if needed
import { Anton } from "next/font/google";

// Fonts
const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const ProductGrid = () => {
  const { data, loading, error } = useData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading products: {error}</div>;

  const products = data || []; // Accessing products from the fetched data

  return (
    <div>
      <h3 className={`text-4xl font-extrabold px-10`}>Suggested Products</h3>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((product: any) => (
          <ProductTile
            key={product.slug} // Use slug as key (unique identifier)
            id={product.slug} // Or use productId if it exists in the data
            data={product}
          />
        ))}
      </section>
    </div>
  );
};

export default ProductGrid;
