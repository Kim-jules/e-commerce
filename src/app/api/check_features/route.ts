// app/api/check-features/route.ts
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Reference to the products collection
    const collectionRef = collection(db, "products");

    // Query to fetch all documents
    const querySnapshot = await getDocs(collectionRef);

    // Initialize a list to store products that are missing the features field
    const missingFeatures: { id: string; product_name: string; missingFeature: boolean }[] = [];

    // Loop through each document
    querySnapshot.forEach((doc) => {
      const productData = doc.data();

      // Check if the 'features' field exists
      if (!productData.features) {
        missingFeatures.push({
          id: doc.id,
          product_name: productData.product_name,
          missingFeature: true,
        });
      }
    });

    // Log products with missing features
    console.log('Products with missing features:', missingFeatures);

    return NextResponse.json({
      message: "Query completed successfully.",
      missingFeatures: missingFeatures,
    });
  } catch (error) {
    console.error("Error querying documents:", error);
    return NextResponse.json({ error: "Query Failed" }, { status: 500 });
  }
}
