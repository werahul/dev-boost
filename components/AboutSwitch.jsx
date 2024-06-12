import { useState } from "react";

const AboutSwitch = () => {
  const [selectedTab, setSelectedTab] = useState("Vision");

  const renderContent = () => {
    switch (selectedTab) {
      case "Vision":
        return (
          <>
            <div className="">
              <img src="/Images/aboutVision.png" alt="Vision" />
            </div>
            <div className="w-[70%] ">
              <p className="font-inter font-normal text-[16px] leading-[24px] text-[#ffffff]">
                Our vision is to bridge the divide between technology leadership
                and business leadership, ensuring seamless collaboration and
                strategic alignment. We aim to become the premier engineering
                intelligence platform for small and medium-sized enterprises
                (SMEs), providing the insights and tools necessary for informed
                decision-making, for innovation for thriving in a competitive
                landscape by realizing their full potential through advanced
                engineering intelligence solutions.
              </p>
            </div>
          </>
        );
      case "Mission":
        return (
          <>
            <div className="">
              <img src="/Images/aboutMission.png" alt="Mission" />
            </div>
            <div className="w-[60%] ">
              <p className="font-inter font-normal text-[16px] leading-[24px] text-[#ffffff]">
                Our mission is to harness the power of data analytics to
                streamline business operations and processes across various
                industry verticals. By improving developers' efficiency and
                productivity, we enable tech companies to meet and exceed their
                performance goals. Our engineering intelligence SaaS tool
                provides actionable insights, optimizing workflows and fostering
                innovation. We are committed to empowering businesses with the
                information they need to make informed decisions, drive growth,
                and deliver exceptional value to their customers.
              </p>
            </div>
          </>
        );
      case "Values":
        return (
          <>
            <div className="">
              <img src="/Images/aboutValues.png" alt="Values" />
            </div>
            <div className="w-[60%] ">
              <p className="font-inter font-normal text-[16px] leading-[24px] text-[#ffffff]">
                Our team is driven by a commitment to innovation rooted in the
                core principles of simplification and transparency. We believe
                that by streamlining complex processes and providing clear,
                straightforward insights, we can empower our users to make more
                informed decisions.
              </p>

              <div className="grid grid-cols-2 gap-x-10 gap-y-10 mt-10">
                <div className=" flex items-center space-x-2">
                  <img src="/Images/ab1.png" alt="" />
                  <p className="font-inter font-medium text-[16px] text-white">
                    Transparency
                  </p>
                </div>
                <div className=" flex items-center space-x-2">
                  <img src="/Images/ab2.png" alt="" />
                  <p className="font-inter font-medium text-[16px] text-white">
                    Agility
                  </p>
                </div>
                <div className=" flex items-center space-x-2">
                  <img src="/Images/ab3.png" alt="" />
                  <p className="font-inter font-medium text-[16px] text-white">
                    Innovation
                  </p>
                </div>
                <div className=" flex items-center space-x-2">
                  <img src="/Images/ab4.png" alt="" />
                  <p className="font-inter font-medium text-[16px] text-white">
                    Team Work
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="h-[594px] bg-[#000049] rounded-[20px] px-10 py-14 relative">
      <div className="bg-[#ffffff] bg-opacity-15 w-full p-3 rounded-[8px] flex items-center justify-between">
        <div
          className={`cursor-pointer ${
            selectedTab === "Vision"
              ? "bg-[#ffffff] text-[#000049] font-semibold"
              : "bg-transparent text-white font-normal opacity-70"
          } px-6 h-[88px] w-[300px] rounded-[8px] flex items-center space-x-3 text-[21px]`}
          onClick={() => setSelectedTab("Vision")}
        >
          <img src="/Images/abVision.png" alt="Vision" />
          <p>Vision</p>
        </div>
        <div
          className={`cursor-pointer ${
            selectedTab === "Mission"
              ? "bg-[#ffffff] text-[#000049] font-semibold"
              : "bg-transparent text-white font-normal opacity-70"
          } px-6 h-[88px] w-[300px] rounded-[8px] flex items-center space-x-3 text-[21px]`}
          onClick={() => setSelectedTab("Mission")}
        >
          <img src="/Images/abMission.png" alt="Mission" />
          <p>Mission</p>
        </div>
        <div
          className={`cursor-pointer ${
            selectedTab === "Values"
              ? "bg-[#ffffff] text-[#000049] font-semibold"
              : "bg-transparent text-white font-normal opacity-70"
          } px-6 h-[88px] w-[300px] rounded-[8px] flex items-center space-x-3 text-[21px]`}
          onClick={() => setSelectedTab("Values")}
        >
          <img src="/Images/abValues.png" alt="Values" />
          <p>Values</p>
        </div>
      </div>
      <div className="visionContent flex items-center space-x-20 px-10 py-5">
        {renderContent()}
      </div>
    </div>
  );
};

export default AboutSwitch;
