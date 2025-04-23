import React from "react";
import Image from "next/image";
import { HiOutlineUserCircle, HiOutlineShoppingCart } from "react-icons/hi2";
import { HiSearch } from "react-icons/hi";
import Link from "next/link";

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const NavBar = () => {
  return (
    <ClerkProvider>
      <header>
        <nav className="flex justify-between items-center p-4">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
            <h1 className="ml-2 text-xl font-bold">Trequmo</h1>
          </div>
          <div className="flex space-x-4">
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
            <Link href="/products" className="hover:text-gray-400">
              Products
            </Link>
            <Link href="/orders" className="hover:text-gray-400">
              Orders
            </Link>
            {/* <a href="/contact" className="hover:text-gray-400">Contact</a> */}
          </div>
          <div className="buttons flex items-center space-x-6">
            <div className="search">
            <button className="py-2 rounded text-3xl">
                  <HiSearch className="inline-block" />
                </button>
            </div>
            <div className="shopping-cart">
              <Link href="/cart" className="hover:text-gray-400">
                <button className="py-2 rounded text-3xl">
                  <HiOutlineShoppingCart className="inline-block" />
                </button>
              </Link>
            </div>

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

{
  /* <header>
   */
}
