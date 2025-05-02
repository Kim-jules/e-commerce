"use client";

import { useCart } from "@/context/useCart";
import { HiOutlineTrash, HiPlus, HiMinus } from "react-icons/hi";

import { Anton, JetBrains_Mono } from "next/font/google";
import Image from "next/image";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
  display: "swap",
});

export default function CartPage() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity ?? 0),
    0
  );

  return (
    <div className="p-6 max-w-5xl mx-auto mt-32">
      <h1 className={`${anton.className} text-2xl font-black mb-6`}>
        Your Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul className="flex flex-col gap-3">
            {cart.map((item) => (
              <li
                key={item.productId}
                className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm"
              >
                <div className="flex gap-4 items-center">
                  <Image
                    src={item.images[0]}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="w-28h-28 object-cover rounded-md"
                  />
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-600">RWF {item.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => decreaseQuantity(item.productId)}
                    className="bg-gray-200 px-2 py-1 rounded"
                  >
                    <HiMinus />
                  </button>
                  <span className="text-sm font-medium">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.productId)}
                    className="bg-gray-200 px-2 py-1 rounded"
                  >
                    <HiPlus />
                  </button>
                </div>

                <div className="flex items-center gap-4">
                  <span
                    className={`font-bold text-lg ${jetBrainsMono.className}`}
                  >
                    RWF {item.price * (item.quantity || 0)}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.productId)}
                    className="text-white bg-black p-3 rounded-xl flex items-center justify-center hover:bg-blue-700 transition-all duration-200 ease-in-out"
                  >
                    <HiOutlineTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center">
            <div className="div-price">
              <h3>Total: </h3>
              <span
                className={`${jetBrainsMono.className} text-xl font-semibold`}
              >
                RWF {total}
              </span>
            </div>
            <button className="bg-black text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-700 transition">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
