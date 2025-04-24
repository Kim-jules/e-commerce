'use client'

// import axios from "axios";
// // import { HiShoppingCart, HiStar } from "react-icons/hi";

// interface Product {
//   name: string;
//   price: number;
//   description: string;
//   image: string;
// }

// interface ProductProps {
//   id: number;
//   data: Product;
//   addToCart: (product: Product) => void;
// }

// const ProductTile: React.FunctionComponent<ProductProps> = ({
//   data,
//   addToCart,
// }) => {
//   const sendNotification = async (data: Product) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/send/notification",
//         {
//           title: data.name,
//           body: "New product was added successfully",
//         }
//       );
//       console.log("Notification sent:", response.data);
//     } catch (error) {
//       console.error("Error sending notification:", error);
//     }
//   };

//   const handleClick = (data: Product) => {
//     addToCart(data);
//     sendNotification(data);
//   };

//   return (
//     <div className="cursor-pointer select-none hover:transition-all hover:z-10 ease-in-out duration-100">
//       <ul>
//         <li>
//           <section className="bg-white p-4 lg:p-3 rounded-3xl shadow-2xl h-full flex justify-between gap-6 flex-col">
//             <div className="image w-full h-72">
//               <img
//                 src={data.image}
//                 alt={data.name}
//                 className="w-full h-full object-cover rounded-xl"
//               />
//             </div>

//             <div className="lower-part max-w-full flex items-center justify-between">
//               <div className="data flex flex-col justify-center gap-2">
//                 <h1 className="font-black text-xl lg:text-base">{data.name}</h1>
//                 <div className="other flex  justify-start gap-2">
//                   <i className="text-orange-400"><HiStar /></i>
//                 <p className="text-gray-600 text-sm line-clamp-1 w-52 lg:w-28">
//                   {data.description}
//                 </p>
//                 </div>
//               </div>

//               <div className="flex flex-col justify-between items-end gap-3 h-full font-jetbrains font-bold text-blue-500">
//                 <span className="font-bold text-lg lg:text-sm">
//                   RWF{" "}
//                   {isNaN(Number(data.price))
//                     ? "0"
//                     : Number(data.price).toFixed(2)}
//                 </span>

//                 <button
//                   onClick={() => handleClick(data)}
//                   className="text-white bg-blue-500 p-3 lg:p-2 flex gap-2 items-center justify-center font-light text-sm rounded-xl md:w-full"
//                 >
//                   <div className="hidden md:flex md:gap-2">
//                     <span className="text-lg">
//                       <HiShoppingCart />
//                     </span>
//                     <p className="lg:text-[11px]">Add to cart</p>
//                   </div>

//                   <div className="block md:hidden ">
//                     <span className="text-lg">
//                       <HiShoppingCart />
//                     </span>
//                   </div>
//                 </button>
//               </div>
//             </div>
//           </section>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default ProductTile;
