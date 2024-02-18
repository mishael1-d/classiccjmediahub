import Image from "next/image";
import React from "react";
import image5 from "@/public/images/image5.png";

function About() {
  return (
    <div className="my-[14rem] flex flex-col lg:flex-row justify-between gap-[3.1rem]" id="about">
      <div>
        <Image src={image5} />
      </div>
      <div className="max-w-full lg:max-w-[55.3rem] h-fit text-white bg-[#FFF] bg-opacity-[8%] p-[2.6rem] rounded-[1.6rem] border border-[#FFFFF] border-opacity-[18%]">
        <h3 className="uppercase text-[6.4rem] oswald">our story</h3>
        <p className="text-[1.6rem]">
          With years of experience in photography and branding, We know what it
          takes to create a stellar brand that stands out in a crowded market. I
          bring my skills to the table, combining high-quality imagery with
          thoughtful brand strategy to create campaigns that resonate with the
          target audience. Whether it’s a branding project, my team and I have
          the expertise to deliver results that align with your business goals.
        </p>
      </div>
    </div>
  );
}

export default About;
