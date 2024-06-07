"use client";

import React, { useState, useEffect } from "react";
import AutoScroll from "./AutoScroll";

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

const HomeBlue = () => {
  const [activeTab, setActiveTab] = useState("problems");
  const [efficiencyText, setEfficiencyText] = useState("Efficiency");
  const [percentageText, setPercentageText] = useState("90%");
  const [animationClass, setAnimationClass] = useState("expand");

  const efficiencyTexts = [
    "Efficiency",
    "Speed",
    "Delivery",
    "Sprint",
    "Cost-Effectiveness",
    "Quality",
    "Cost-Reduction",
  ];
  const percentageTexts = ["90%", "100%", "100%", "60%", "40%", "25%", "37.5%"];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass("shrink");

      setTimeout(() => {
        index = (index + 1) % efficiencyTexts.length;
        setEfficiencyText(efficiencyTexts[index]);
        setPercentageText(percentageTexts[index]);
        setAnimationClass("expand");
      }, 1000); // Duration of the shrink animation
    }, 4000); // Total duration for one cycle (shrink + pause + expand + pause)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div className="bg-[#000049] w-full h-[859px] rounded-b-[80px] px-20 pt-[300px] z-10 ">
        <p className="font-bold tracking-wide wordSpace font-flyHead text-[64px] leading-[94px] text-[#ffffff] text-center">
          BOOST{" "}
          <span
            className={`animatedText bg-[#004C3F] rounded-[8px] px-4 ${animationClass}`}
          >
            {" "}
            {efficiencyText}
          </span>{" "}
          BY{" "}
          <span
            className={`animatedText bg-[#004C3F] rounded-[8px] px-4 ${animationClass}`}
          >
            {" "}
            {percentageText}{" "}
          </span>
          <br /> WITH DEVBOOST
        </p>
        <p className="font-inter font-normal text-[18px] leading-[23.4px] text-[#ffffff] text-center mt-5">
          DevBoost is an all-in-one engineering intelligence tool that provides
          precise <br />
          predictive analysis, forecasts, personalized recommendations and
          actionable insights to <br />
          mitigate risks and boost productivity across verticals in a tech
          organization.
        </p>
        <div className="flex justify-center items-center">
          <button className="bg-[#1FFFA3] hover:bg-transparent border boder-[#1FFFA3] rounded-[8px] w-[243px] h-[56px] font-bold text-[20px] text-[#000049] hover:text-[#1FFFA3] mt-10 ">
            Request A Demo
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center -mt-[140px]">
        <img src="/Images/Home1.png" alt="" className="w-[517px]" />
        <img src="/Images/Home2.png" alt="" className="w-[517px]" />
      </div>
      <div className=" mt-[150px] mb-2">
        <p className="font-inter font-bold text-[24px] leading-[36px] text-center text-[#000049] ">
          {" "}
          Loved by 100+ Engineering Teams{" "}
        </p>
        <p className="font-inter font-normal text-[20px] leading-[30px] text-center text-[#000049] ">
          {" "}
          At Startups, Unicorns, And IPO Companies
        </p>
      </div>
      <AutoScroll images={images} />

      <div className="csBg">
        <div className="max-container">
          <div className="mt-[80px] px-20">
          <div className="">
            <div className="h-[576px] bg-[#000049] rounded-[20px] px-10 py-14 flex items-start space-x-10 relative">
              <div className="w-[50%] ">
                {activeTab === "problems" && (
                  <img src="/Images/banner1.png" alt="Problems" className="z-20 absolute top-20 w-[520px] backdrop-blur-[10px] bg-opacity-50" />
                )}
                {activeTab === "solutions" && (
                  <img src="/Images/banner2.png" alt="Solutions" className="z-20 absolute top-20 w-[520px] backdrop-blur-[10px] bg-opacity-50"/>
                )}
                <div className="absolute grColor top-28 backdrop-blur-[10px] w-[500px] h-[350px] rounded-full z-10"></div>
              </div>
              <div className="w-[50%]">
                <div className="w-full h-[78px] rounded-[8px] flex items-center bg-white bg-opacity-10 px-3 mb-8">
                  <button
                    className={`w-[50%] h-[50px] rounded-[8px] ${
                      activeTab === "problems"
                        ? "bg-white font-semibold text-[#000049]"
                        : "bg-transparent font-normal text-white"
                    } font-inter text-[16px]`}
                    onClick={() => setActiveTab("problems")}
                  >
                    Problems
                  </button>
                  <button
                    className={`w-[50%] h-[50px] rounded-[8px] ${
                      activeTab === "solutions"
                        ? "bg-white font-semibold text-[#000049]"
                        : "bg-transparent font-normal text-white"
                    } font-inter text-[16px]`}
                    onClick={() => setActiveTab("solutions")}
                  >
                    Solutions
                  </button>
                </div>
                <div className="space-y-5">
                  {activeTab === "problems" && (
                    <>
                      <div className="">
                        <li className="font-inter font-semibold text-[20px] leading-[30px] list-disc text-white">
                          Decrease In Project Visibility
                        </li>
                        <p className="font-inter font-normal text-[16px] leading-[24px] text-white ml-7 mt-2">
                          Lack of clarity for the engineering leader concerning
                          the ground-level performance resulting in
                          unsustainable prioritization and broken developer
                          workflow.
                        </p>
                      </div>
                      <div className="">
                        <li className="font-inter font-semibold text-[20px] leading-[30px] list-disc text-white">
                          Impact On Project Execution
                        </li>
                        <p className="font-inter font-normal text-[16px] leading-[24px] text-white ml-7 mt-2">
                          Dependency issues arise in bigger teams as the entire
                          team gets disrupted even if a single person is
                          disturbed.
                        </p>
                      </div>
                      <div className="">
                        <li className="font-inter font-semibold text-[20px] leading-[30px] list-disc text-white">
                          Diminishing Productivity
                        </li>
                        <p className="font-inter font-normal text-[16px] leading-[24px] text-white ml-7 mt-2">
                          Resource burnout stems from situations ranging from
                          overwhelming ad hoc requests to dysfunctional work
                          conditions. Engineering leaders are not well-informed
                          about the workload and issues faced by developers.
                        </p>
                      </div>
                    </>
                  )}
                  {activeTab === "solutions" && (
                    <>
                      <div className="">
                        <li className="font-inter font-semibold text-[20px] leading-[30px] list-disc text-white">
                          Project Execution Transparency
                        </li>
                        <p className="font-inter font-normal text-[16px] leading-[24px] text-white ml-7 mt-2">
                          Identify data patterns, consolidate program
                          information from multiple software sources and provide
                          360° actionable insights.
                        </p>
                      </div>
                      <div className="">
                        <li className="font-inter font-semibold text-[20px] leading-[30px] list-disc text-white">
                          Forecasting Project Outcomes
                        </li>
                        <p className="font-inter font-normal text-[16px] leading-[24px] text-white ml-7 mt-2">
                          Correlate numerous aspects of agile development
                          metrics from multiple disparate tools and forecast any
                          potential issue that can impact the product.
                        </p>
                      </div>
                      <div className="">
                        <li className="font-inter font-semibold text-[20px] leading-[30px] list-disc text-white">
                          Performance Visibility
                        </li>
                        <p className="font-inter font-normal text-[16px] leading-[24px] text-white ml-7 mt-2">
                          Get better visibility between the engineering leaders
                          and the development team. Tracks KPIs to measure
                          engineering performance as well as any developer
                          issues.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className=" pt-[156px] px-20">
            <p className="font-inter font-normal text-[48px] leading-[58px] text-center text-[#000049]">
              DevBoost Provides{" "}
              <span className="font-semibold"> Holistic View </span> & Clear
              Approach <br />
              To Improve <span className="font-semibold">
                Performance
              </span> & <span className="font-semibold">Delivery</span>
            </p>

            <div className="rounded-[20px] px-10 py-14 flex items-start space-x-10">
              <div className="w-[50%]">
                <img src="/Images/laptop.gif" alt="laptop" className="" />
              </div>
              <div className="w-[50%]">
                <div className="flex items-start">
                  <li className="text-[18px] leading-[27px] text-[#000049] list-disc"></li>
                  <p className="font-inter text-[18px] leading-[27px] text-[#000049] list-disc">
                    Engineering leadership’s biggest challenge{" "}
                    <span className="font-semibold"> (45% of the time)</span> is
                    ensuring everyone is focused on the highest priority work.
                  </p>
                </div>
                <div className="flex items-start mt-4">
                  <li className="text-[18px] leading-[27px] text-[#000049] list-disc"></li>
                  <p className="font-inter text-[18px] leading-[27px] text-[#000049] list-disc">
                    DevBoost provides the solution to this by enabling the
                    required{" "}
                    <span className="font-semibold">transparency.</span>
                  </p>
                </div>
                <div className="flex items-start mt-4">
                  <li className="text-[18px] leading-[27px] text-[#000049] list-disc"></li>
                  <p className="font-inter text-[18px] leading-[27px] text-[#000049] list-disc">
                    It correlates multiple signals from various tools and
                    provides
                    <span className="font-semibold">
                      accurate health risks.
                    </span>
                  </p>
                </div>
                <button className="ml-6 bg-[#1FFFA3] hover:bg-transparent border hover:border-[#000049] rounded-[8px] w-[243px] h-[56px] font-bold text-[20px] text-[#000049] mt-10">
                  Tour The Product
                </button>
              </div>
            </div>

            <p className="font-inter font-normal text-[48px] leading-[58px] text-center text-[#000049] pt-[156px]">
              Transforming{" "}
              <span className="font-semibold">Engineering Leaders</span> Into{" "}
              <br /> <span className="font-semibold"> Business Leaders</span>
            </p>

            <div className="grid grid-cols-3 gap-x-5 mt-[50px]">
              <div className="h-[519px] w-full bg-[#004C3F] p-7 rounded-[12px] ">
                <img src="/Images/engineering.png" alt="" />
                <p className="font-inter font-semibold text-[24px] text-[#FFFFFF] mt-6">
                  Engineering Lead
                </p>
                <p className="font-inter font-normal text-[16px] text-[#FFFFFF] leading-[24px] mt-3">
                  Assess the quality and current status of work, collaboration,
                  team health and process adherence. Analyze past delivery
                  trends and align engineering strategy with business needs.
                </p>
                <div className="font-inter font-semibold text-[16px] text-[#1FFFA3] mt-4 flex items-center cursor-pointer space-x-2 hover:space-x-3 transition-all duration-100 w-[140px]">
                  <p className="">Learn More </p>
                  <img src="/Images/moreArr.png" alt="" className="" />
                </div>
              </div>
              <div className="h-[519px] w-full bg-[#8F2758] p-7 rounded-[12px] ">
                <img src="/Images/project.png" alt="" />
                <p className="font-inter font-semibold text-[24px] text-[#FFFFFF] mt-6">
                  Project Manager
                </p>
                <p className="font-inter font-normal text-[16px] text-[#FFFFFF] leading-[24px] mt-3">
                  Monitor the status of delivery execution and perform root
                  cause analysis in case of delays. Check on data hygiene
                  quality, and identify blockers in SDLC and top 5 complex tasks
                  to optimize performance.
                </p>
                <div className="font-inter font-semibold text-[16px] text-[#1FFFA3] mt-4 flex items-center cursor-pointer space-x-2 hover:space-x-3 transition-all duration-100 w-[140px]">
                  <p className="">Learn More </p>
                  <img src="/Images/moreArr.png" alt="" className="" />
                </div>
              </div>
              <div className="h-[519px] w-full bg-[#000049] p-7 rounded-[12px] ">
                <img src="/Images/teamLeader.png" alt="" />
                <p className="font-inter font-semibold text-[24px] text-[#FFFFFF] mt-6">
                  Team Leader
                </p>
                <p className="font-inter font-normal text-[16px] text-[#FFFFFF] leading-[24px] mt-3">
                  Evaluate sprint progress, task completion, performance trends,
                  time allocation, task changes, and utilization levels.
                  Identify and fix spillovers, bug origins and sprint blockers.
                </p>
                <div className="font-inter font-semibold text-[16px] text-[#1FFFA3] mt-4 flex items-center cursor-pointer space-x-2 hover:space-x-3 transition-all duration-100 w-[140px]">
                  <p className="">Learn More </p>
                  <img src="/Images/moreArr.png" alt="" className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlue;
