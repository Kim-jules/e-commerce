"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineUserCircle,
  HiMagnifyingGlass,
  HiBars3BottomLeft,
  HiXMark,
  HiOutlineHome,
  HiOutlineSquare3Stack3D,
} from "react-icons/hi2";
import { TbShoe } from "react-icons/tb";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import Cart from "./Cart";
import Notifications from "./Notifications";
import { Anton } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const NavBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleSearch = () => setShowSearch((prev) => !prev);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ClerkProvider>
      <header className="z-50">
        {/* Navbar */}
        <nav
          className={`fixed top-0 left-0 w-full flex justify-between items-center px-20 py-4 transition-all duration-300 z-50 ${
            scrolled
              ? "bg-white shadow-md text-black"
              : "bg-black/10 backdrop-blur-3xl"
          }`}
        >
          {/* Hamburger Menu */}
          <div>
            <button onClick={toggleMenu} className="text-3xl">
              {isMenuOpen ? <HiXMark /> : <HiBars3BottomLeft />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            {/* <Image src="/logo.png" alt="Logo" width={50} height={50} /> */}
            <h1 className={`ml-2 text-4xl font-bold ${anton.className}`}>
              Quino.
            </h1>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <button
                onClick={toggleSearch}
                className="text-2xl bg-gray-100 p-4 w-14 h-14 flex items-center justify-center rounded-2xl cursor-pointer"
              >
                <HiMagnifyingGlass />
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
            <div>
              <Cart />
            </div>

            {/* Auth Buttons */}
            <div>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="py-2 rounded text-3xl">
                    <HiOutlineUserCircle />
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <div className="flex items-center gap-4">
                  <Notifications />
                  <UserButton />
                </div>
              </SignedIn>
            </div>
          </div>
        </nav>

        {/* Sidebar Menu */}
        <div
          className={`fixed pt-24 top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6 flex flex-col space-y-2 font-semibold">
            <Link
              href="/"
              onClick={toggleMenu}
              className="hover:bg-green-200 p-4 rounded-lg flex items-center bg-gray-100 transition-all duration-300 ease-in-out"
            >
              <button className="flex items-center">
                <span>
                  <HiOutlineHome />
                </span>
                <span className="ml-2">Home</span>
              </button>
            </Link>
            <Link
              href="/products"
              onClick={toggleMenu}
              className="hover:bg-green-200 p-4 rounded-lg flex items-center bg-gray-100 transition-all duration-300 ease-in-out"
            >
              <button className="flex items-center">
                <span>
                  <TbShoe />
                </span>
                <span className="ml-2">Products</span>
              </button>
            </Link>
            <Link
              href="/orders"
              onClick={toggleMenu}
              className="hover:bg-green-200 p-4 rounded-lg flex items-center bg-gray-100 transition-all duration-300 ease-in-out"
            >
              <button className="flex items-center">
                <span>
                  <HiOutlineSquare3Stack3D />
                </span>
                <span className="ml-2">Orders</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Backdrop Blur */}
        {isMenuOpen && (
          <div
            onClick={toggleMenu}
            className="fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm z-30"
          />
        )}
      </header>
    </ClerkProvider>
  );
};

export default NavBar;
