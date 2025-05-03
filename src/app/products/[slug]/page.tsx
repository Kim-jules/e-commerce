// app/products/[slug]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { useData } from "@/context/DataContext";

export default function ProductDetails() {
  const { slug } = useParams();
  const { data } = useData();

  const product = data.find((p) => p.slug === slug);

  if (!product) {
    return <p className="p-4 mt-24">Loading or Product not found...</p>;
  }

  return (
    <div className="mt-24 p-6 space-y-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-700">{product.description}</p>
      <p className="font-semibold">Price: ${product.price}</p>
      <p className="text-sm text-gray-500">Category: {product.category}</p>

      {product.images?.length > 0 && (
        <div className="grid grid-cols-2 gap-4 mt-4">
          {product.images.map((src: string, idx: number) => (
            <img
              key={idx}
              src={src}
              alt={product.name}
              className="rounded-lg"
            />
          ))}
        </div>
      )}

      {/* Add more fields like rating, reviews, etc. */}
    </div>
  );
}
