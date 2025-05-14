"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, writeBatch, doc } from "firebase/firestore";
import products from "@/data/data-with-urls.json";

export default function SeedProductsPage() {
  const [status, setStatus] = useState("idle");
  const [checkFeaturesStatus, setCheckFeaturesStatus] = useState("idle");
  const [productsWithoutFeatures, setProductsWithoutFeatures] = useState<any[]>(
    []
  );

  const seedProducts = async () => {
    setStatus("seeding");
    try {
      const batch = writeBatch(db);
      const collectionRef = collection(db, "products");

      products.forEach((product: any) => {
        const docRef = doc(collectionRef); // auto-ID
        batch.set(docRef, product);
      });

      await batch.commit();
      setStatus("success");
    } catch (error) {
      console.error("Seeding error:", error);
      setStatus("error");
    }
  };

  const checkFeatures = async () => {
    setCheckFeaturesStatus("loading");
    try {
      const response = await fetch("/api/check-features"); // Make sure this is the correct URL for your backend
      const data = await response.json();

      if (data && data.productsWithoutFeatures) {
        setProductsWithoutFeatures(data.productsWithoutFeatures);
      }
      setCheckFeaturesStatus("done");
    } catch (error) {
      console.error("Error checking features:", error);
      setCheckFeaturesStatus("error");
    }
  };

  return (
    <div className="p-4 mt-24 flex items-center justify-center flex-col">
      <button onClick={seedProducts} className="bg-black text-white px-4 py-4">
        Seed Products
      </button>
      <p className="mt-2">
        {status === "idle" && "Click to start seeding."}
        {status === "seeding" && "Seeding in progress..."}
        {status === "success" && "✅ Products seeded successfully!"}
        {status === "error" && "❌ Error occurred while seeding."}
      </p>

      <button
        onClick={checkFeatures}
        className="bg-blue-500 text-white px-4 py-4 mt-4"
      >
        Check Products Without Features
      </button>
      <p className="mt-2">
        {checkFeaturesStatus === "idle" && "Click to check products."}
        {checkFeaturesStatus === "loading" && "Checking products..."}
        {checkFeaturesStatus === "done" &&
          productsWithoutFeatures.length === 0 &&
          "✅ All products have features."}
        {checkFeaturesStatus === "done" &&
          productsWithoutFeatures.length > 0 && (
            <>
              <p>❌ Products missing features:</p>
              <ul>
                {productsWithoutFeatures.map((product: any) => (
                  <li key={product.id}>{product.product_name}</li>
                ))}
              </ul>
            </>
          )}
        {checkFeaturesStatus === "error" &&
          "❌ Error occurred while checking features."}
      </p>
    </div>
  );
}
