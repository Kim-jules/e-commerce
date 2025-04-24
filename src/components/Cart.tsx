// import React from "react";
import { HiOutlineShoppingBag, HiOutlineTrash } from "react-icons/hi";
// import { useCart } from "../context/CartContext";
import { useState } from "react";

const Cart = () => {
//   const { cart, removeFromCart } = useCart();
  const [showCart, setShowCart] = useState<boolean>(false);

  return (
    <div>
      <div className="icon text-2xl md:text-2xl bg-gray-100 p-4 w-14 h-14 lg:w-12 lg:h-12 flex items-center justify-center rounded-2xl">
        <button onClick={() => setShowCart(!showCart)}>
          <span className="translate-x-5 -translate-y-7 absolute text-xs bg-red-500 text-white rounded-full flex items-center justify-center w-2 h-2 font-jetbrains">
          </span>
          <HiOutlineShoppingBag />
        </button>
      </div>
      {showCart && (
        <div className="transition-all duration-500 ease-in-out content absolute z-50 bg-white p-4 rounded-2xl shadow-2xl flex items-start justify-center md:justify-start md:translate-x-[400px] left-1/2">
          <ul className="absolute w-80 bg-white p-4 rounded-2xl shadow-2xl flex flex-col gap-4">
            <div className="header">
              <h2 className="font-semibold md:font-bold text-base">
                Shopping Cart
              </h2>
            </div>
            <div className="data">
              {/* {cart.length === 0 && (
                <p className="text-sm text-gray-500">Your cart is empty</p>
              )}
              {cart.map((product, index) => (
                <li
                  key={index}
                  className="flex justify-between gap-4 hover:bg-gray-100 p-3 rounded-xl items-center"
                  onClick={() => removeFromCart(product.name)}
                >
                  <div className="left flex flex-col">
                    <span className="font-bold">{product.name}</span>
                    <span className="font-jetbrains text-sm text-blue-500">
                      RWF {product.price}
                    </span>
                  </div>
                  <div className="right">
                    <button className="bg-blue-500 text-white p-2 rounded-lg">
                      <HiOutlineTrash />
                    </button>
                  </div>
                </li>
              ))} */}
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;
