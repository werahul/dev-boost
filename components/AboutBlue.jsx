"use client";

import React, { useState, useEffect } from "react";
import AutoScroll from "./AutoScroll";
import AboutSwitch from "./AboutSwitch";
import TeamSection from "./TeamSection";
import Cta from "./Cta";
import Footer from "./Footer";

const images = [
  "/Images/auto1.png",
  "/Images/auto2.png",
  "/Images/auto3.png",
  "/Images/auto4.png",
  "/Images/auto5.png",
  "/Images/auto6.png",
  "/Images/auto7.png",
  "/Images/auto8.png",
  "/Images/auto9.png",
  "/Images/auto10.png",
];

const AboutBlue = () => {
  const [activeTab, setActiveTab] = useState("problems");
  const [efficiencyText, setEfficiencyText] = useState("Efficiency");
  const [percentageText, setPercentageText] = useState("90%");
  const [animationClass, setAnimationClass] = useState("expand");

  // const efficiencyTexts = [
  //   "Efficiency",
  //   "Speed",
  //   "Delivery",
  //   "Sprint",
  //   "Cost-Effectiveness",
  //   "Quality",
  //   "Cost-Reduction",
  // ];
  // const percentageTexts = ["90%", "100%", "100%", "60%", "40%", "25%", "37.5%"];
  // let index = 0;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setAnimationClass("shrink");

  //     setTimeout(() => {
  //       index = (index + 1) % efficiencyTexts.length;
  //       setEfficiencyText(efficiencyTexts[index]);
  //       setPercentageText(percentageTexts[index]);
  //       setAnimationClass("expand");
  //     }, 1000);
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    const linkedinIcons = document.querySelectorAll(".linkedin-icon");

    linkedinIcons.forEach((icon) => {
      const handleMouseOver = () => {
        icon.src = "/Images/linkedinIcon.svg";
      };

      const handleMouseOut = () => {
        icon.src = "/Images/linkedinIconWhite.png";
      };

      icon.addEventListener("mouseover", handleMouseOver);
      icon.addEventListener("mouseout", handleMouseOut);

      // Cleanup event listeners on component unmount
      return () => {
        icon.removeEventListener("mouseover", handleMouseOver);
        icon.removeEventListener("mouseout", handleMouseOut);
      };
    });
  }, []);
  return (
    <div className="">
      <div className="pricingBg w-full h-[641px] rounded-b-[80px] px-20 pt-[300px] z-10 ">
        <p className="tracking-wide font-flyHead text-[64px] leading-[74px] text-[#ffffff] text-center">
          TAKING ENGINEERING INTELLIGENCE <br />
          TO THE NEXT LEVEL
        </p>
        <p className="font-inter font-normal text-[18px] leading-[23.4px] text-[#ffffff] text-center mt-5">
          Our dedicated team is empowering Engineering Leaders with cutting-edge{" "}
          <br />
          analytics and enabling them to make efficient business decisions.
        </p>
        {/*<div className="flex justify-center items-center">
          <button className="bg-[#1FFFA3] hover:bg-transparent border boder-[#1FFFA3] rounded-[8px] w-[243px] h-[56px] font-bold text-[20px] text-[#000049] hover:text-[#1FFFA3] mt-10 ">
            Request A Demo
          </button>
        </div>*/}
      </div>
      <div className="max-container">
        <div className="flex items-center px-20 space-x-20 py-[156px]">
          <div className="w-[50%]">
            <p className="font-inter text-[48px] text-[#000000]">
              Our <span className="font-semibold"> Story </span>
            </p>
            <p className="font-inter text-[18px] leading-[27px] text-[#000049] mt-2">
              “Building software doesn’t have to be a black box.” Working per
              this motto, the DevBoost team makes engineering work transparent,
              provides real-time insights, offers detailed analytics and thus
              helps engineering teams achieve the right balance between speed
              and quality.
            </p>
          </div>
          <div className="">
            <img
              src="/Images/aboutVideoOutput.png"
              alt="video"
              className="w-[664px]"
            />
          </div>
        </div>
        <div className="px-20">
          <AboutSwitch />
        </div>
        <div className="py-[156px] px-20">
          <p className="font-inter text-[48px] text-[#000049] text-center">
            Our <span className="font-semibold"> Founders </span>
          </p>

          <div className="grid grid-cols-2 gap-x-6 mt-10">
            <div className="w-full  border-2 border-[#8F2758] bg-[#8F2758] rounded-[8px] flex ">
              <div className="bg-gray-300 w-[263px]">
                <img
                  src="/Images/tushar.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className=" w-[70%] p-7">
                <p className=" font-inter font-semibold text-[24px] text-white ">
                  Tushar Doshi
                </p>
                <p className=" font-inter text-[16px] text-white">
                  Co-Founder, ED & CEO
                </p>
                <a
                  href="https://www.linkedin.com/in/tushar-p-doshi-21962519"
                  target="_blank"
                >
                  <img
                    src="/Images/linkedinIconWhite.png"
                    alt="LinkedInIcon"
                    className="linkedin-icon my-4"
                  />
                </a>

                <p className="font-inter text-white text-[16px] leading-[24px] border-t border-white pt-4">
                  Ex-Independent Director, Digi Life Technologies Ltd (SGX
                  listed). Former Global Independent Distributor (American
                  Manufacturer - Health & Wellness Industry) & Advisor
                  (India-based travel tech startup).
                </p>
              </div>
            </div>
            <div className="w-full  border-2 border-[#004C3F] bg-[#004C3F] rounded-[8px] flex ">
              <div className="bg-gray-300 w-[263px]">
                <img
                  src="/Images/aninda.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className=" w-[70%] p-7">
                <p className=" font-inter font-semibold text-[24px] text-white ">
                  Aninda
                </p>
                <p className=" font-inter text-[16px] text-white">
                  Co-Founder, Director, COO, CPTO
                </p>
                <a
                  href="https://www.linkedin.com/in/aninda-mukherjee-83319036/"
                  target="_blank"
                >
                  <img
                    src="/Images/linkedinIconWhite.png"
                    alt="LinkedInIcon"
                    className="linkedin-icon my-4"
                  />
                </a>

                <p className="font-inter text-white text-[16px] leading-[24px] border-t border-white pt-4">
                  Former Engineering Manager - Accenture. <br />
                  Formerly managed companies including but not limited to
                  Commonwealth Bank of Australia and Telstra. Also founded
                  Plannero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wtColor py-20">
        <p className="font-inter text-[48px] text-[#ffffff] text-center">
          Our <span className="font-semibold"> Leadership Team </span>
        </p>

        <TeamSection />
      </div>
    </div>
  );
};

export default AboutBlue;
