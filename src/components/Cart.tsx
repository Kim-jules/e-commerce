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
      <div className="icon text-2xl bg-gray-100 p-4 w-14 h-14 flex items-center justify-center rounded-2xl cursor-pointer">
        <button onClick={() => setShowCart(!showCart)}>
          {cart.length > 0 && (
            <span className="absolute top-1 right-1 text-xs bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
              {cart.length}
            </span>
          )}
          <HiOutlineShoppingBag />
        </button>
      </div>

      {showCart && (
        <div className="absolute right-0 top-16 w-96 bg-white p-4 rounded-2xl shadow-2xl transition-all duration-300 max-h-[90vh] overflow-y-auto">
          <h2 className="font-bold text-lg mb-3">Shopping Cart</h2>

          {cart.length === 0 ? (
            <p className="text-sm text-gray-500">Your cart is empty</p>
          ) : (
            <ul className="flex flex-col gap-4">
              {cart.slice(0, 10).map((product) => (
                <li
                  key={product.productId}
                  className="flex justify-between gap-4 items-center hover:bg-gray-100 p-3 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="flex flex-col text-sm">
                      <span className="font-semibold line-clamp-1">
                        {product.name}
                      </span>
                      <span className="text-blue-500 text-xs">
                        RWF {product.price}
                      </span>
                      <div className="flex items-center gap-1 mt-1">
                        <button
                          onClick={() => decreaseQuantity(product.productId)}
                          className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                        >
                          <HiMinusSm />
                        </button>
                        <span className="mx-2">{product.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(product.productId)}
                          className="px-2 bg-gray-200 rounded hover:bg-gray-300"
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

          {cart.length > 10 && (
            <div className="mt-4 text-center">
              <Link
                href="/cart"
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                View all products
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
