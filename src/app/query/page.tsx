"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, writeBatch, doc } from "firebase/firestore";
import products from "@/data/data-with-urls.json";

export default function SeedProductsPage() {
  const [status, setStatus] = useState("idle");

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
    </div>
  );
}
