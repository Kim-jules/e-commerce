// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Thumbs } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";

// import { HiShoppingCart, HiStar } from "react-icons/hi";
// import { useCart } from "@/context/useCart";
// import { JetBrains_Mono } from "next/font/google";
// import { Product } from "@/components/ProductTile"; // Adjust path based on your file structure

// const jetBrainsMono = JetBrains_Mono({
//   subsets: ["latin"],
//   weight: ["400"],
//   display: "swap",
// });

// interface ProductDetailsProps {
//   product: Product;
// }

// const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
//   const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
//   const [selectedSize, setSelectedSize] = useState<string | null>(null);
//   const [selectedColor, setSelectedColor] = useState<string | null>(null);
//   const [quantity, setQuantity] = useState<number>(1);
//   const { addToCart } = useCart();

//   const handleAddToCart = () => {
//     if (!product.inStock) return;
//     addToCart(product);
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-4 grid md:grid-cols-2 gap-8">
//       {/* Image Section */}
//       <div className="w-full">
//         <Swiper
//           modules={[Navigation, Thumbs]}
//           navigation
//           thumbs={{ swiper: thumbsSwiper }}
//           className="w-full h-[450px] mb-4 rounded-xl overflow-hidden"
//         >
//           {product.images.map((img, index) => (
//             <SwiperSlide key={index}>
//               <Image
//                 src={img}
//                 alt={`Image ${index + 1}`}
//                 width={800}
//                 height={600}
//                 className="w-full h-full object-cover rounded-xl"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {product.images.length > 1 && (
//           <Swiper
//             onSwiper={setThumbsSwiper}
//             slidesPerView={4}
//             spaceBetween={10}
//             modules={[Thumbs]}
//             className="w-full"
//           >
//             {product.images.map((img, index) => (
//               <SwiperSlide key={index}>
//                 <Image
//                   src={img}
//                   alt={`Thumb ${index + 1}`}
//                   width={100}
//                   height={100}
//                   className="w-full h-24 object-cover rounded-lg border hover:border-black"
//                 />
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         )}
//       </div>

//       {/* Details Section */}
//       <div className="flex flex-col gap-6">
//         <h1 className="text-3xl font-bold">{product.name}</h1>

//         <div className="flex items-center gap-2 text-yellow-400">
//           {[...Array(5)].map((_, i) => (
//             <HiStar
//               key={i}
//               className={
//                 i < Math.round(product.rating || 0)
//                   ? "text-yellow-400"
//                   : "text-gray-300"
//               }
//             />
//           ))}
//           <span className="text-sm text-gray-600">
//             ({product.rating?.toFixed(1) || "0"})
//           </span>
//         </div>

//         <div className={`${jetBrainsMono.className} text-xl`}>
//           {product.discountPrice ? (
//             <>
//               <span className="line-through text-gray-500 mr-2">
//                 RWF {product.price.toFixed(2)}
//               </span>
//               <span className="text-black">|</span>
//               <span className="ml-2 text-red-600">
//                 RWF {product.discountPrice.toFixed(2)}
//               </span>
//             </>
//           ) : (
//             <span>RWF {product.price.toFixed(2)}</span>
//           )}
//         </div>

//         <p className="text-gray-600 text-sm">{product.description}</p>

//         {product.sizes?.length > 0 && (
//           <div className="flex flex-col gap-2">
//             <p className="text-sm font-medium">Available Sizes</p>
//             <div className="flex gap-2">
//               {product.sizes.map((size) => (
//                 <button
//                   key={size}
//                   onClick={() => setSelectedSize(size)}
//                   className={`px-3 py-1 border rounded ${
//                     selectedSize === size
//                       ? "border-black bg-black text-white"
//                       : "border-gray-300"
//                   }`}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {product.colors?.length > 0 && (
//           <div className="flex flex-col gap-2">
//             <p className="text-sm font-medium">Available Colors</p>
//             <div className="flex gap-2">
//               {product.colors.map((color) => (
//                 <button
//                   key={color}
//                   onClick={() => setSelectedColor(color)}
//                   className={`w-8 h-8 rounded-full border-2 ${
//                     selectedColor === color ? "border-black" : "border-gray-300"
//                   }`}
//                   style={{ backgroundColor: color }}
//                 ></button>
//               ))}
//             </div>
//           </div>
//         )}

//         <div className="flex items-center gap-4">
//           <p className="text-sm font-medium">Quantity</p>
//           <input
//             type="number"
//             min={1}
//             value={quantity}
//             onChange={(e) => setQuantity(Number(e.target.value))}
//             className="w-16 border border-gray-300 rounded px-2 py-1"
//           />
//         </div>

//         <button
//           onClick={handleAddToCart}
//           disabled={!product.inStock}
//           className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-blue-700 transition"
//         >
//           <HiShoppingCart className="text-lg" />
//           {product.inStock ? "Add to Cart" : "Out of Stock"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
