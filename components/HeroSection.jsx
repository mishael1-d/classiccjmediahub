import Image from "next/image";
import image1 from "@/public/images/image1.png";
import image2 from "@/public/images/image2.png";
import image3 from "@/public/images/image3.png";
import image4 from "@/public/images/image4.png";

function HeroSection() {
  return (
    <div className="mt-[6rem] text-white text-center">
      <h1 className="text-[9.7rem] leading-[97%] oswald max-w-[118.1rem] mx-auto uppercase mb-[1.9rem]">
        Explore Limitless Creativity with Classicc j media hub
      </h1>
      <p className="max-w-[63rem] mx-auto text-[1.6rem] text-[#ECECEC]">
        Your One-Stop Hub for Exceptional Photography, Custom Prints, Studio
        Rentals, and Web & Graphic Design,Where Every Image Tells a Unique Story
      </p>
      <button className="px-[2.5rem] py-[1.3rem] rounded-[3.2rem] bg-[#8639FB] text-white font-medium text-[1.8rem] mt-[1.1rem]">
        Book A Session
      </button>
      <div className="flex mt-[5.1rem] gap-[2rem]">
        <Image src={image1} />
        <Image src={image2} className="relative top-[3.4rem]" />
        <Image src={image3} />
        <Image src={image4} className="relative top-[3.4rem]" />
      </div>
    </div>
  );
}

export default HeroSection;