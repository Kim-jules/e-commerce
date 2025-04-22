import React from "react";
import Image from "next/image";
import { CgVercel } from "react-icons/cg";

const NavBar = () => {
  return (
    <div>
      <div className="left">
        <div className="logo bg-black p-4 rounded-full w-15 h-15">
          <Image src="vercel.svg" width={20} height={20} alt="e-commerce" className="w-full h-full" />
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default NavBar;
