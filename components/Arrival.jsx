import Image from "next/image";
import image10 from "@/public/images/image10.png";
import image11 from "@/public/images/image11.png";
import image12 from "@/public/images/image12.png";
import Link from "next/link";

function Arrival() {
  return (
    <div className="my-[14.1rem] flex justify-between gap-[4.9rem]">
      <div className="flex flex-col justify-center items-center gap-[2rem]">
        <div className="flex justify-center gap-[2rem]">
          <div className="bg-[#FFF] bg-opacity-[8%] py-[2rem] px-[1rem] rounded-[1.6rem] border border-[#FFFFF] border-opacity-[18%] w-[26.1rem] h-[26.8rem] flex flex-col justify-center items-center">
            <Image src={image10} />
            <p className="oswald text-[2rem] mt-2 text-center text-white">
              Hoodie
            </p>
          </div>
          <div className="bg-[#FFF] bg-opacity-[8%] py-[2rem] px-[1rem] rounded-[1.6rem] border border-[#FFFFF] border-opacity-[18%] w-[26.1rem] h-[26.8rem] flex flex-col justify-center items-center">
            <Image src={image11} />
            <p className="oswald text-[2rem] mt-2 text-center text-white">
              T-Shirt
            </p>
          </div>
        </div>
        <div className="bg-[#FFF] bg-opacity-[8%] py-[2rem] px-[1rem] rounded-[1.6rem] border border-[#FFFFF] border-opacity-[18%] w-[26.1rem] h-[26.8rem] flex flex-col justify-center items-center">
          <Image src={image12} />
          <p className="oswald text-[2rem] mt-2 text-center text-white">Cap</p>
        </div>
      </div>
      <div>
        <h3 className="uppercase oswald text-[6.4rem] text-white leading-[5.8rem] mb-[4rem]">
          Explore Our New arrivals
        </h3>
        <p className="text-[1.6rem] text-white">
          We pride ourselves on offering high-quality, custom-made apparel that
          reflects your individuality. Our latest collection is designed to
          elevate your wardrobe with fresh, fashion-forward pieces that are
          tailor-made just for you.
        </p>
        <Link href="https://api.whatsapp.com/send?phone=2349027278911&text=Hello%20there!%0AMy%20name%20is%20______________%0AI%27d%20like%20to%20______________">
          <button className="px-[2.5rem] py-[1.3rem] rounded-[3.2rem] bg-[#8639FB] text-white font-medium text-[1.8rem] mt-[1.1rem]">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Arrival;
