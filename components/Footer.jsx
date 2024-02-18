import Image from "next/image";
import logo from "@/public/images/logo.png";
import ig from "@/public/images/ig.png";
import facebook from "@/public/images/facebook.png";
import w from "@/public/images/w.png";
import Link from "next/link";

function Footer() {
  return (
    <div
      className="text-[#9B9B9B] w-full lg:w-[107.2rem] mx-auto flex flex-col lg:flex-row justify-between
     items-start text-[1.6rem] py-[10rem] gap-8 lg:gap-0"
    >
      <div>
        <Image src={logo} />
        <p>No 90 4th avenue, Gwarimpa, Abuja Nigera</p>
      </div>
      <ul className="space-y-3">
      <a href="#home"><li>Home</li></a>
            <a href="#about"><li>About</li></a>
            <a href="#services"><li>Services</li></a>
            <a href="#products"><li>Products</li></a>
            <a href="#contact"><li>Contact</li></a>
      </ul>
      <div className="flex flex-col gap-2">
        <a href="mailto:Classiccjmediahubng1@gmail.com">
          Classiccjmediahubng1@gmail.com
        </a>
        <a href="tel:+2348164618589">+2348164618589</a>
        <a href="tel:+2349167922031">+2349167922031</a>
      </div>
      <div>
        <p>Follow us at</p>
        <span className="flex gap-4 mt-2">
          <Link
            href="https://www.instagram.com/classiccj_mediahub_ng/"
            target="_blank"
          >
            <Image src={ig} />
          </Link>
          <Link
            href="https://web.facebook.com/classicc.j.mediahub.ng"
            target="_blank"
          >
            <Image src={facebook} />
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=2349027278911&text=Hello%20there!%0AMy%20name%20is%20______________%0AI%27d%20like%20to%20______________"
            target="_blank"
          >
            <Image src={w} width={30} height={30} />
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Footer;
