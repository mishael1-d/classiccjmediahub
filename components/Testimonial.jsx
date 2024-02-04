import Image from "next/image";
import image13 from "@/public/images/image13.png";

function Testimonial() {
  return (
    <div className="bg-white rounded-[3.2rem] mx-[2%] relative  pt-[6.7rem] ">
      <div className="mx-[8rem] flex justify-between">
        <h3 className="uppercase oswald text-[6.4rem] mb-[2.6rem] max-w-[50.9rem] leading-[6.9rem]">
          What Our Clients are Saying
        </h3>
        <Image src={image13} className="w-[40rem] relative top-[-14rem]" />
      </div>
      <div className="mx-[1rem]">
<div>
    
</div>
      </div>
    </div>
  );
}

export default Testimonial;
