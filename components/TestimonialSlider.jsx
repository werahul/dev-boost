"use client";
import { useState, useEffect } from "react";

const testimonials = [
  {
    text: "Within just 6 months of using DevBoost, we were able to improve quality from 70% to 95%, reduce the spillover rate to almost 0%, and increase the efficiency by needing only 5 resources instead of 8 resources.",
    author: "Swapnil Tawar",
    position: "CEO, Infeon Technology",
  },
  {
    text: "DevBoost enabled us to improve delivery quality and timeline by 100%, reduce sprint spillover from 60% to almost 0%, and also helped me identify the underutilized resources which can now be used in other projects in case of delay.",
    author: "Vikas More",
    position: "Engineering Lead, Keva Consultancy",
  },
  {
    text: "Over the last 2 months, it has almost helped me save 2 extra resource cost by pinpointing the cause of feature delay, whilst also ensuring that I can get the feature release before the due date.",
    author: "Naren Singh",
    position: "CTO, Fracto",
  },
  // Add more testimonials here if needed
];

const TestimonialSlider = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <div className="py-[156px] px-20 max-container">
      <div className="text-center font-inter font-normal text-[48px] text-[#000049] mb-10">
        See Why <span className="font-semibold"> Engineering Leaders</span> Love
        DevBoost
      </div>
      <div
        className="w-full h-[363px] mx-auto py-[48px] border border-[#000049] rounded-lg bg-white shadow-md flex flex-col items-center justify-between px-14"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col items-center  w-[100%]">
          <img src="/Images/quotes.png" alt="" />
          <p className="font-inter font-normal text-[17px] leading-[26px] mb-4 text-[#000049] text-center mt-[25px]">
            {testimonials[currentTestimonial].text}
          </p>
          <p className="font-inter font-bold text-[25px] leading-[37px]  text-[#000049] mt-[25px]">
            {testimonials[currentTestimonial].author}
          </p>
          <p className="font-inter font-normal text-[20px] leading-[29px]  text-[#000049] mt-[4px]">
            {testimonials[currentTestimonial].position}
          </p>
        </div>
        <div className="">
          {/*<div className="w-[340px] h-[340px] bg-gray-300"></div>*/}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "w-[60px] h-[8px] bg-[#000049]"
                    : "bg-transparent w-[8px] h-[8px] border border-[#000049]"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
