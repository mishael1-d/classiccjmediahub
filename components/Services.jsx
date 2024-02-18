import Image from "next/image";
import image6 from "@/public/images/image6.png";
import image7 from "@/public/images/image7.png";
import image8 from "@/public/images/image8.png";
import image9 from "@/public/images/image9.png";

function Services() {
  return (
    <div id="services">
      <h3 className="uppercase oswald text-[4.8rem] lg:text-[6.4rem] text-center lg:text-left mb-[2.6rem] text-white">
        our services
      </h3>
      <div className="flex flex-col lg:flex-row justify-end gap-[2.8rem] mb-[2.6rem]">
        <div className="max-w-[43.1rem] text-white bg-[#FFF] bg-opacity-[8%] py-[2rem] px-[1rem] rounded-[1.6rem] border border-[#FFFFF] border-opacity-[18%]">
          <Image src={image6} />
          <p className="mt-[1.3rem] mb-[.7rem] text-[2rem] font-bold">
            Photography
          </p>
          <p className="text-[1.2rem] lg:text-[1.4rem]">
            Capture Your Moments with Precision. Our professional photography
            services guarantee high-quality images for weddings, corporate
            events, or product shoots. Trust our experienced team for stunning
            results
          </p>
        </div>
        <div className="max-w-[43.1rem] text-white bg-[#FFF] bg-opacity-[8%] py-[2rem] px-[1rem] rounded-[1.6rem] border border-[#FFFFF] border-opacity-[18%]">
          <Image src={image7} />
          <p className="mt-[1.3rem] mb-[.7rem] text-[2rem] font-bold">
            Studio Rentals
          </p>
          <p className="text-[1.2rem] lg:text-[1.4rem]">
            Unlock Creativity: Rent Our Professional Studio Space. Ideal for
            photographers, artists, and filmmakers, our fully equipped studio
            provides a versatile environment for your next project. Bring your
            vision to life effortlessly.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-start gap-[2.8rem] mb-[2.6rem]">
        <div className="max-w-[43.1rem] text-white bg-[#FFF] bg-opacity-[8%] py-[2rem] px-[1rem] rounded-[1.6rem] border border-[#FFFFF] border-opacity-[18%]">
          <Image src={image8} />
          <p className="mt-[1.3rem] mb-[.7rem] text-[2rem] font-bold">
            Print Branding
          </p>
          <p className="text-[1.2rem] lg:text-[1.4rem]">
            Enhance Your Brand Presence: Discover Exceptional Printing Services.
            Our comprehensive offerings encompass everything from business cards
            and paper bag designs to cap and shirt branding, all featuring
            premium quality. Browse through our merchandise and engage with our
            skilled graphic designers to create compelling designs that align
            seamlessly with your brand message.
          </p>
        </div>
        <div className="max-w-[43.1rem] text-white bg-[#FFF] bg-opacity-[8%] py-[2rem] px-[1rem] rounded-[1.6rem] border border-[#FFFFF] border-opacity-[18%]">
          <Image src={image9} />
          <p className="mt-[1.3rem] mb-[.7rem] text-[2rem] font-bold">
            Graphic/Web design
          </p>
          <p className="text-[1.2rem] lg:text-[1.4rem]">
            Elevate Your Brand: Explore Top-Notch Printing Services. From
            business cards to shirt branding, we offer a range of premium
            products. Shop our merchandise and collaborate with our graphic
            designers for eye-catching designs that resonate with your brand
            message
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
