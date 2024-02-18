import Image from "next/image";
import image13 from "@/public/images/image13.png";
import star from "@/public/images/star.png";
star;

function Testimonial() {
  return (
    <div className="bg-white rounded-[3.2rem] mx-0 lg:mx-[2%] relative  pt-[6.7rem] " id="testimonial">
      <div className="lg:mx-[8rem] flex flex-col lg:flex-row justify-between">
        <h3 className="uppercase oswald text-[4.8rem] lg:text-[6.4rem] text-center lg:text-left mb-[2.6rem] max-w-full lg:max-w-[50.9rem] leading-[6.9rem] h-fit">
          What Our Clients are Saying
        </h3>
        <Image src={image13} className="w-[80%] lg:w-[40rem] mx-auto relative lg:top-[-14rem]" />
      </div>
      <div className="mx-[1rem] relative lg:top-[-10rem] grid grid-cols-1 lg:grid-cols-3 gap-4 gap-y-8">
        <TestimonialCards />
        <TestimonialCards />
        <TestimonialCards />
        <TestimonialCards />
        <TestimonialCards />
        <TestimonialCards />
      </div>
    </div>
  );
}

export default Testimonial;

const TestimonialCards = () => {
  return (
    <div className="border w-fit rounded-[1.6rem] p-4">
      <div className="flex items-center gap-2">
        <div className="w-[4rem] h-[4rem] bg-[#7F39FB] text-white flex justify-center items-center rounded-full text-[1.6rem]">
          AF
        </div>
        <div>
          <p className="text-[1.6rem] oswald">Mishael Dada</p>
          <div className="flex gap-1">
            <Image src={star} />
            <Image src={star} />
            <Image src={star} />
            <Image src={star} />
            <Image src={star} />
          </div>
        </div>
      </div>
      <p className="text-[1.6rem] mt-1">Everything went as planned, i enjoyed the arthmospepre </p>
    </div>
  );
};
