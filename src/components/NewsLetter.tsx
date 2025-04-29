import React from "react";
import { Anton, JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import img1 from "../../public/images/2.jpg";

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

const NewsLetter = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between bg-white">
      {/* Left Side */}
      <div className="w-full md:w-1/2 h-full space-y-5 py-10 flex flex-col items-start justify-center px-6 md:px-10">
        <p className="text-slate-600 text-sm md:text-base">
          Discover more about Quino.
        </p>
        <h2
          className={`${anton.className} text-4xl text-black md:text-5xl font-bold leading-tight`}
        >
          Subscribe to our <br /> News Letter
        </h2>
        <div className="form w-full">
          <form
            action=""
            method="post"
            className="flex flex-col sm:flex-row w-full gap-3"
          >
            <input
              type="email"
              required
              className={`flex-1 bg-slate-200 p-4 px-5 outline-none text-slate-600 ${jetBrainsMono.className}`}
              placeholder="youremail@gmail.com"
            />
            <button className="bg-black p-4 text-white hover:bg-gray-800 transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 h-[300px] md:h-[500px] overflow-hidden flex items-center justify-center">
        <Image
          src={img1}
          alt="Quino fashions."
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default NewsLetter;
