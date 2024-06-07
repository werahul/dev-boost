"use client";
import { useState, useEffect } from "react";

const testimonials = [
  {
    text: "This was the first time I had seen a solution that encompassed all pieces of information and mapping it to existing industry KPIs. That is great, but also having the ability to predict and forecast as well as plot against an existing trendline.",
    author: "Girish Premachandran",
    position: "Chief Technology Officer, Zuzu Hospitality",
  },
  {
    text: "We signed up for DevBoost and instantly started seeing substantial results. We were able to improve the team's productivity to a great extent. At the end of the 3-month pilot, we ended up saving about 40% on effort and delivery costs.",
    author: "Vijay Talreja",
    position: "Chief Technology Officer, Enrich Beauty Salons",
  },
  {
    text: "What sets DevBoost apart is its forecasting algorithm. The tool easily integrates with all other tools being used by various teams and then utilizes multiple algorithms to accommodate almost every possible scenario.",
    author: "Ajay Soni",
    position: "Senior VP, Head of Cloud & Data Services, Writer Information",
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
    <div className="py-[156px] px-20">
      <div
        className="w-full h-[437px] mx-auto p-6 border border-[#000049] rounded-lg bg-white shadow-md flex items-center justify-between px-14 py-8"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="text-left w-[60%]">
          <img src="/Images/quotes.png" alt="" />
          <p className="font-inter font-normal text-[17px] leading-[26px] mb-4 text-[#000049] mt-[25px]">
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
          <div className="w-[340px] h-[340px] bg-gray-300"></div>
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? " w-[60px] h-[8px] bg-[#000049]" : "bg-transparent w-[8px] h-[8px] border border-[#000049]"
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
