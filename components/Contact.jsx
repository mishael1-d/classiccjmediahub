import React from "react";

function Contact() {
  return (
    <div className="w-full lg:w-[99.1rem] mx-auto pt-[6.7rem] text-white" id="contact">
      <h3 className="text-[3.6rem] mb-[1rem] text-center">Contact us</h3>
      <form action="" className="w-full">
        <div className="mb-[2.5rem]">
          <label htmlFor="" className="block text-[1.6rem] mb-[.8rem]">
            Name
          </label>
          <input
            type="text"
            className="w-full rounded-[.8rem] border border-[#8D8D8D] bg-white bg-opacity-[9%] h-[4.6rem] text-[1.6rem] px-4 outline-none"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[4rem] w-full mb-[2.5rem]">
          <div className="">
            <label htmlFor="" className="block text-[1.6rem] mb-[.8rem]">
              Phone Number
            </label>
            <input
              type="text"
              className="w-full rounded-[.8rem] border border-[#8D8D8D] bg-white bg-opacity-[9%] h-[4.6rem] text-[1.6rem] px-4 outline-none"
            />
          </div>
          <div className="">
            <label htmlFor="" className="block text-[1.6rem] mb-[.8rem]">
              Email Address
            </label>
            <input
              type="text"
              className="w-full rounded-[.8rem] border border-[#8D8D8D] bg-white bg-opacity-[9%] h-[4.6rem] text-[1.6rem] px-4 outline-none"
            />
          </div>
        </div>
        <div className="mb-[4rem]">
          <label htmlFor="" className="block text-[1.6rem] mb-[.8rem]">
            Message
          </label>
          <textarea
            type="text"
            className="w-full rounded-[.8rem] border border-[#8D8D8D] bg-white bg-opacity-[9%] h-[15rem] text-[1.6rem] p-4 outline-none resize-none"
          />
          <div className="flex justify-end">
            <button className="px-[2.5rem] py-[1rem] rounded-[3.2rem] bg-[#8639FB] text-white font-medium text-[1.6rem] mt-[1.1rem]">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
