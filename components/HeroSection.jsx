import Image from "next/image";
import image1 from "@/public/images/image1.png";
import image2 from "@/public/images/image2.png";
import image3 from "@/public/images/image3.png";
import image4 from "@/public/images/image4.png";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="mt-[6rem] text-white text-center" id="home">
      <h1 className="text-[3.8rem] lg:text-[9.7rem] leading-[97%] oswald max-w-full lg:max-w-[118.1rem] mx-auto uppercase mb-[1.9rem]">
        Explore Limitless Creativity with Classicc j media hub
      </h1>
      <p className="max-w-full lg:max-w-[63rem] mx-auto text-[1.2rem] lg:text-[1.6rem] text-[#ECECEC]">
        Your One-Stop Hub for Exceptional Photography, Custom Prints, Studio
        Rentals, and Web & Graphic Design,Where Every Image Tells a Unique Story
      </p>
      <Link href="https://api.whatsapp.com/send?phone=2349027278911&text=Hello%20there!%0AMy%20name%20is%20______________%0AI%27d%20like%20to%20______________" target="_blank">
        <button className="px-[2.5rem] py-[1.3rem] rounded-[3.2rem] bg-[#8639FB] text-white font-medium text-[1.8rem] mt-[1.1rem]">
          Book A Session
        </button>
      </Link>
      <div className="flex flex-row justify-center mt-[5.1rem] gap-[2rem]">
        <Image src={image1} className="hover:scale-125 duration-200 w-[15.8rem] lg:w-auto" />
        <Image
          src={image2}
          className="relative top-[3.4rem] hover:scale-125 duration-200 w-[15.8rem] lg:w-auto"
        />
        <Image src={image3} className="hover:scale-125 duration-200 hidden lg:block w-[15.8rem] lg:w-auto" />
        <Image
          src={image4}
          className="relative top-[3.4rem] hover:scale-125 duration-200 hidden lg:block w-[15.8rem] lg:w-auto"
        />
      </div>
    </div>
  );
}

export default HeroSection;
