import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo.png";

function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <Image src={logo} alt="logo" />
      </div>
      <div className="flex justify-center items-center gap-2">
        <div className=" bg-[#1D1D1D] px-[3.7rem] py-[1.7rem] rounded-[3.2rem]">
          <ul className="flex justify-center items-center gap-[3.7rem] text-[#B8B8B8] text-[1.6rem]">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Products</li>
          </ul>
        </div>
        <button className="px-[2.5rem] py-[1.3rem] rounded-[3.2rem] bg-[#8639FB] text-white font-medium text-[1.8rem]">
          Book A Session
        </button>
      </div>
    </div>
  );
}

export default Navbar;
