"use client";

import { useCart } from "@/context/useCart";
import { HiOutlineTrash, HiPlus, HiMinus } from "react-icons/hi";

export default function CartPage() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity ?? 0),
    0
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul className="flex flex-col gap-6">
            {cart.map((item) => (
              <li
                key={item.productId}
                className="flex items-center justify-between border p-4 rounded-xl shadow-sm"
              >
                <div className="flex gap-4 items-center">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
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
                  <span className="font-semibold">
                    RWF {item.price * (item.quantity || 0)}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.productId)}
                    className="text-red-500"
                  >
                    <HiOutlineTrash />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center">
            <h3 className="text-lg font-semibold">Total: RWF {total}</h3>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold hover:bg-blue-700 transition">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
