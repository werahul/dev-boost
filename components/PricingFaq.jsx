"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "How does DevBoost count the licenses?",
    answer:
      "DevBoost counts licenses based on the engineers who actively contribute code to the Git repository. These are the individuals who are directly involved in the development process. Other team members such as product managers, QA professionals, and engineering leads can still access the product but will not be included in the license count.",
  },
  {
    question: "What is the pricing model for DevBoost?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  },
  {
    question: "How does DevBoost count the licenses?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  },
  {
    question: "What is the pricing model for DevBoost?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
  },
];

const PricingFaq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="py-[156px] px-20 max-container">
      <p className="text-center font-inter font-semibold text-[48px] text-[#000049]">
        FAQ’s
      </p>

      <div className="mt-10">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              onClick={() => toggleAccordion(index)}
              className={`w-full h-auto py-10 px-8 border border-[#000049] rounded-lg flex justify-between mb-7 transition-opacity duration-300 cursor-pointer ${
                isOpen ? "opacity-100" : "opacity-70"
              }`}
            >
              <div className="w-[70%]">
                <p className="questions font-inter font-semibold text-[24px] text-[#000049]">
                  {faq.question}
                </p>
                {isOpen && (
                  <p className="answer font-inter text-[18px] leading-[27px] text-[#000049] opacity-90 mt-3">
                    {faq.answer}
                  </p>
                )}
              </div>
              <div className="">
                <div
                  onClick={() => toggleAccordion(index)}
                  className={`w-[50px] h-[50px] rounded-full border border-[#000049] flex items-center justify-center cursor-pointer ${
                    isOpen ? "bg-[#000049]" : ""
                  }`}
                >
                  <img
                    src={
                      isOpen
                        ? "/Images/openFaqIcon.png"
                        : "/Images/downFaqIcon.png"
                    }
                    alt="Toggle FAQ"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingFaq;
