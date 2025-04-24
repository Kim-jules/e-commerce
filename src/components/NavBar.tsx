"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  HiOutlineUserCircle,
  HiOutlineShoppingCart,
  HiMagnifyingGlass,
  HiBars3BottomLeft,
  HiXMark,
} from "react-icons/hi2";
import Link from "next/link";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import Cart from "./Cart";

const NavBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <ClerkProvider>
      <header>
        <nav className="flex justify-between items-center p-4 px-20 bg-white">
          {/* Logo Section */}
          <div className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
            <h1 className="ml-2 text-3xl font-bold">Quino</h1>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-3xl">
              {isMenuOpen ? <HiXMark /> : <HiBars3BottomLeft />}
            </button>
          </div>

          {/* Links Section */}
          <div
            className={`flex-col lg:flex-row lg:flex lg:space-x-4 absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-md lg:shadow-none p-4 lg:p-0 ${
              isMenuOpen ? "flex" : "hidden"
            }`}
          >
            <Link href="/" className="hover:text-gray-400 block lg:inline">
              Home
            </Link>
            <Link
              href="/products"
              className="hover:text-gray-400 block lg:inline"
            >
              Products
            </Link>
            <Link
              href="/orders"
              className="hover:text-gray-400 block lg:inline"
            >
              Orders
            </Link>
          </div>

          {/* Buttons Section */}
          <div className="buttons flex items-center space-x-6">
            {/* Search */}
            <div className="search relative">
              <button onClick={toggleSearch} className="py-2 rounded text-3xl">
                <HiMagnifyingGlass className="inline-block" />
              </button>
              {showSearch && (
                <input
                  type="text"
                  placeholder="Search..."
                  className="absolute top-full left-0 mt-2 p-2 border rounded shadow-md"
                />
              )}
            </div>

            {/* Shopping Cart */}
            <div className="shopping-cart">
              {/* <Link href="/cart" className="hover:text-gray-400">
                <button className="py-2 rounded text-3xl">
                  <HiOutlineShoppingCart className="inline-block" />
                </button>
              </Link> */}
              <Cart />
            </div>

            {/* Login/Account */}
            <div className="login">
              <SignedOut>
                <div className="flex justify-end py-2">
                  <SignInButton mode="modal">
                    <button className="py-2 rounded text-3xl">
                      <HiOutlineUserCircle className="inline-block" />
                    </button>
                  </SignInButton>
                </div>
              </SignedOut>
              <SignedIn>
                <div className="flex justify-end py-2">
                  <UserButton />
                </div>
              </SignedIn>
            </div>
          </div>
        </nav>
      </header>
    </ClerkProvider>
  );
};

export default NavBar;
