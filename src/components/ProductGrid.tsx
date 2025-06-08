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

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

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
      <h3 className={`lg:text-3xl font-extrabold lg:px-24 px-8 text-xl`}>
        Suggested Products
      </h3>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 lg:mx-20">
        {currentProducts.map((product: any) => (
          <ProductTile
            key={product.id || product.slug || product.name}
            data={product}
          />
        ))}
      </section>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center border-t border-gray-200 px-4 py-3 sm:px-6 mt-6">
        <div className="flex flex-1 justify-center sm:hidden">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
          >
            Next
          </button>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
          <div className="flex items-center justify-between">
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm bg-white"
              aria-label="Pagination"
            >
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
              >
                <span className="sr-only">Previous</span>
                <HiChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>

              {/* Dynamically generated page buttons */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    aria-current={page === currentPage ? "page" : undefined}
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset focus:z-20 focus:outline-offset-0 ${
                      page === currentPage
                        ? "z-10 bg-black text-white focus-visible:outline-2 focus-visible:outline-black"
                        : "text-gray-900 ring-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
              >
                <span className="sr-only">Next</span>
                <HiChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
