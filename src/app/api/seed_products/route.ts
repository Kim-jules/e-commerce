import { NextResponse } from "next/server";
import { setDoc, doc, addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import products from "@/data/data.json"; // Ensure tsconfig allows this

function generateId() {
  return crypto?.randomUUID?.() || Math.random().toString(36).substring(2, 10);
}

export async function POST() {
    try {
      const batch = products.map(async (product: any) => {
        // Add the product to the "products" collection with an auto-generated ID
        await addDoc(collection(db, "products"), product);
      });
  
      await Promise.all(batch);
      return NextResponse.json({ message: "Products seeded successfully." });
    } catch (error) {
      console.error("Seeding error:", error);
      return NextResponse.json({ error: "Seeding Failed" }, { status: 500 });
    }
  }
