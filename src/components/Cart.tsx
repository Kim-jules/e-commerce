"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HiOutlineShoppingBag,
  HiOutlineTrash,
  HiPlusSm,
  HiMinusSm,
} from "react-icons/hi";
import { useCart } from "@/context/useCart";

const Cart: React.FC = () => {
  const [showCart, setShowCart] = useState(false);
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  return (
    <div className="relative z-50">
      {/* Cart Icon */}
      <div className="icon text-2xl  flex items-center justify-center rounded-2xl cursor-pointer">
        <button
          onClick={() => setShowCart(!showCart)}
          className="text-white relative p-3 sm:p-4 w-12 sm:w-14 h-12 sm:h-14 bg-black rounded-2xl cursor-pointer"
        >
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 text-md bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px]">
              {cart.length}
            </span>
          )}
          <HiOutlineShoppingBag />
        </button>
      </div>

      {/* Cart Panel */}
      {showCart && (
        <div className="absolute right-0 top-16 w-full sm:w-[28rem] bg-gray-100  p-4 sm:p-6 rounded-2xl shadow-2xl transition-all duration-300 max-h-[90vh] overflow-y-auto">
          <h2 className="font-bold text-lg sm:text-xl mb-3">Shopping Cart</h2>

          {cart.length === 0 ? (
            <p className="text-sm text-gray-500">Your cart is empty</p>
          ) : (
            <ul className="flex flex-col gap-3">
              {cart.slice(0, 5).map((product) => (
                <li
                  key={product.productId}
                  className="flex justify-between gap-3 sm:gap-4 items-center hover:bg-gray-200 bg-white p-2 sm:p-3 rounded-xl"
                >
                  <div className="flex items-center gap-2 sm:gap-3 flex-1">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-lg"
                    />
                    <div className="flex flex-col text-sm w-full">
                      <span className="font-semibold line-clamp-1">
                        {product.name}
                      </span>
                      <span className="text-blue-500 text-xs sm:text-sm">
                        RWF {product.price}
                      </span>
                      <div className="flex items-center gap-1 mt-1">
                        <button
                          onClick={() => decreaseQuantity(product.productId)}
                          className="px-2 bg-gray-200 rounded hover:bg-gray-300 text-sm"
                        >
                          <HiMinusSm />
                        </button>
                        <span className="mx-2 text-sm">{product.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(product.productId)}
                          className="px-2 bg-gray-200 rounded hover:bg-gray-300 text-sm"
                        >
                          <HiPlusSm />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(product.productId)}
                    className="text-white bg-blue-500 p-2 rounded-lg hover:bg-blue-600"
                  >
                    <HiOutlineTrash />
                  </button>
                </li>
              ))}
            </ul>
          )}

          {cart.length > 5 && (
            <Link
              href="/cart"
              className="hover:underline text-sm font-medium"
              onClick={() => setShowCart(false)}
            >
              <div className="mt-4 text-center bg-black text-white p-2 rounded-xl">
                View all products
              </div>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
