// // app/api/seed/route.ts
// export const runtime = "nodejs"; // Ensures correct Firebase compatibility

// import { NextResponse } from "next/server";
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import products from "@/data/data-with-urls.json";

// export async function POST() {
//   try {
//     const batch = products.map((product: any) =>
//       addDoc(collection(db, "products"), product)
//     );
//     await Promise.all(batch);
//     return NextResponse.json({ message: "Products seeded successfully." });
//   } catch (error) {
//     console.error("Seeding error:", error);
//     return NextResponse.json({ error: "Seeding Failed" }, { status: 500 });
//   }
// }


// app/api/seed/route.ts
// export const runtime = "nodejs";

// import { NextResponse } from "next/server";
// import { db } from "@/lib/firebase-admin";
// import products from "@/data/data-with-urls.json";

// export async function POST() {
//   try {
//     const batch = db.batch();
//     const collectionRef = db.collection("products");

//     products.forEach((product: any) => {
//       const docRef = collectionRef.doc(); // auto-ID
//       batch.set(docRef, product);
//     });

//     await batch.commit();
//     return NextResponse.json({ message: "Products seeded successfully." });
//   } catch (error) {
//     console.error("Seeding error:", error);
//     return NextResponse.json({ error: "Seeding Failed" }, { status: 500 });
//   }
// }


// // app/api/seed-products/route.ts
// import { db } from "@/lib/firebase";
// import { collection, writeBatch, doc } from "firebase/firestore";
// import products from "@/data/data-with-features.json";
// import { NextResponse } from "next/server";

// export async function POST() {
//   try {
//     const batch = writeBatch(db);
//     const collectionRef = collection(db, "products"); // or "quino/products"

//     products.forEach((product: any) => {
//       const docRef = doc(collectionRef); // auto-ID
//       const featureValues = product.features
//         ? Object.values(product.features)
//         : {};

//       const productData = {
//         product_name: product.product_name,
//         description: product.description,
//         brand: product.brand,
//         category: product.category,
//         sub_category: product.sub_category,
//         colors: product.colors,
//         price: product.price,
//         discount: product.discount,
//         style: product.style,
//         gender: product.gender,
//         images: product.images,
//         reviews: product.reviews,
//         ratings: product.ratings,
//         seasons: product.seasons,
//         size: product.size,
//         stock: product.stock,
//         tags: product.tags,
//         similar_products: product.similar_products,
//         dateAdded: product.dateAdded,
//         slug: product.slug,
//         features: featureValues,
//       };

//       console.log('Seeding Data:', productData);

//       batch.set(docRef, productData);
//     });

//     await batch.commit();

//     return NextResponse.json({ message: "Products seeded successfully." });
//   } catch (error) {
//     console.error("Seeding error:", error);
//     return NextResponse.json({ error: "Seeding Failed" }, { status: 500 });
//   }
// }


// app/api/seed-products/route.ts
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import products from "@/data/data-with-features.json";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const collectionRef = collection(db, "products"); // or "quino/products"

    for (const product of products) {
      const featureValues = product.features
        ? Object.values(product.features)
        : {};

      const productData = {
        product_name: product.product_name,
        description: product.description,
        brand: product.brand,
        category: product.category,
        sub_category: product.sub_category,
        colors: product.colors,
        price: product.price,
        discount: product.discount,
        style: product.style,
        gender: product.gender,
        images: product.images,
        reviews: product.reviews,
        ratings: product.ratings,
        seasons: product.seasons,
        size: product.size,
        stock: product.stock,
        tags: product.tags,
        similar_products: product.similar_products,
        dateAdded: product.dateAdded,
        slug: product.slug,
        features: JSON.parse(JSON.stringify(product.features ?? {})),
      };

      console.log("Seeding product:", productData.product_name);
      console.log('Product features:', product.features);


      await addDoc(collectionRef, productData);
    }

    return NextResponse.json({ message: "Products seeded successfully." });
  } catch (error) {
    console.error("Seeding error:", error);
    return NextResponse.json({ error: "Seeding Failed" }, { status: 500 });
  }
}
