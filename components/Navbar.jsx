import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo.png";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex justify-between items-center sticky top-0 z-[1000]">
      <div>
        <Image src={logo} alt="logo" />
      </div>
      <div className="hidden lg:flex justify-center items-center gap-2">
        <div className=" bg-[#1D1D1D] px-[3.7rem] py-[1.7rem] rounded-[3.2rem]">
          <ul className="flex justify-center items-center gap-[3.7rem] text-[#B8B8B8] text-[1.6rem]">
            <a href="#home"><li>Home</li></a>
            <a href="#about"><li>About</li></a>
            <a href="#services"><li>Services</li></a>
            <a href="#products"><li>Products</li></a>
            <a href="#contact"><li>Contact</li></a>
          </ul>
        </div>
        <Link href="https://api.whatsapp.com/send?phone=2349027278911&text=Hello%20there!%0AMy%20name%20is%20______________%0AI%27d%20like%20to%20______________" target="_blank">
          <button className="px-[2.5rem] py-[1.3rem] rounded-[3.2rem] bg-[#8639FB] text-white font-medium text-[1.8rem]">
            Book A Session
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
