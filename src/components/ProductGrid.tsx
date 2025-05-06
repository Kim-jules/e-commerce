"use client";

import React, { useState } from "react";
import ProductTile from "./ProductCard";
import { useData } from "@/context/DataContext";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const ITEMS_PER_PAGE = 12; // Set how many products per page

const ProductGrid = () => {
  const { data, loading, error } = useData();
  const [currentPage, setCurrentPage] = useState(1);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading products: {error}</div>;

  const products = data || [];
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = products.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  return (
    <div>
      <h3 className={`text-3xl font-extrabold px-24`}>Suggested Products</h3>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 mx-20">
        {currentProducts.map((product: any) => (
          <ProductTile key={product.slug} id={product.slug} data={product} />
        ))}
      </section>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          className="px-4 py-2 border rounded disabled:opacity-50"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="px-4 py-2 border rounded disabled:opacity-50"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
