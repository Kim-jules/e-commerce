"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  HiOutlineUserCircle,
  HiMagnifyingGlass,
  HiBars3BottomLeft,
  HiXMark,
  HiHome,
  HiSquare3Stack3D,
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
import { Anton, JetBrains_Mono } from "next/font/google";

const anton = Anton({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

// Configurable nav links
const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: HiHome,
  },
  {
    name: "Products",
    href: "/products",
    icon: TbShoe,
  },
  {
    name: "Orders",
    href: "/orders",
    icon: HiSquare3Stack3D,
  },
];

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
        <nav
          className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 sm:px-10 md:px-20 py-4 transition-all duration-300 ${
            scrolled ? "bg-white shadow-md" : "bg-black/10 backdrop-blur-3xl"
          } ${isMenuOpen ? "z-10" : "z-50"}`}
        >
          {/* Left: Hamburger + Logo (Logo centers at md+) */}
          <div className="flex items-center gap-6 sm:gap-4">
            <button
              onClick={toggleMenu}
              className={`text-2xl sm:text-3xl ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              {isMenuOpen ? <HiXMark /> : <HiBars3BottomLeft />}
            </button>
            <h1
              className={`text-2xl sm:text-3xl md:text-4xl font-bold ${
                anton.className
              } ${
                scrolled ? "text-black" : "text-white"
              } md:absolute md:left-1/2 md:-translate-x-1/2`}
            >
              Quino.
            </h1>
          </div>

          {/* Right Side: Search, Cart, Auth */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="relative">
              <button
                onClick={toggleSearch}
                className="text-xl sm:text-2xl bg-black text-white p-3 sm:p-4 w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center rounded-2xl"
              >
                <HiMagnifyingGlass />
              </button>
              {showSearch && (
                <input
                  type="text"
                  placeholder="Search..."
                  className="absolute top-full left-0 mt-2 p-2 border rounded shadow-md w-40 sm:w-56"
                />
              )}
            </div>

            <Cart />

            <div>
              <SignedOut>
                <SignInButton mode="modal">
                  <button
                    className={`py-2 text-xl sm:text-2xl bg-black text-white p-3 sm:p-4 w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center rounded-2xl`}
                  >
                    <HiOutlineUserCircle />
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <div className="flex items-center gap-2 sm:gap-4">
                  <Notifications />
                  <UserButton
                    appearance={{
                      variables: {
                        borderRadius: "1rem",
                      },
                    }}
                  />
                </div>
              </SignedIn>
            </div>
          </div>
        </nav>

        {/* Sidebar Navigation */}
        <div
          className={`fixed rounded-2xl top-5 left-5 bottom-5 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white shadow-lg z-40 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-200"
          }`}
        >
          <div className="m-5 p-3 flex w-32 rounded-xl items-center gap-4 hover:cursor-pointer hover:bg-black hover:text-white bg-gray-100 transition-all duration-300">
            <button onClick={toggleMenu} className="text-xl">
              <HiXMark />
            </button>
            <div className={`${jetBrainsMono.className}`}>Close</div>
          </div>
          <div className="p-6 flex flex-col space-y-2 font-semibold">
            {navLinks.map(({ name, href, icon: Icon }) => (
              <Link
                key={name}
                href={href}
                onClick={toggleMenu}
                className="hover:bg-black hover:text-white p-4 rounded-lg flex items-center bg-gray-100 transition-all duration-300"
              >
                <button className="flex items-center text-lg sm:text-xl">
                  <Icon />
                  <span className="ml-2">{name}</span>
                </button>
              </Link>
            ))}
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
