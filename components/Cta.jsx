import React from "react";
import Link from "next/link";

const Cta = () => {
  return (
    <div className="bg-[#F5F3F6]">
      <div className="px-20 py-[156px] max-container">
        <div className="gradient-border">
          <div className="h-full w-full bg-[#eeeeee] rounded-[20px] absolute top-0 left-0 py-16 px-8 flex items-center">
            <div className=" flex items-start justify-between space-x-10">
              <div className="w-[54%]">
                <p className="font-normal text-[48px] leading-[56px] text-[#000049] font-flyHead">
                  READY TO LEAD WITH <br /> ENGINEERING INTELLIGENCE <br />{" "}
                  INNOVATION?
                </p>
                <p className="font-inter font-normal text-[18px] leading-[27px] mt-5 text-[#000049]">
                  Multiple teams across Asia are boosting their revenue with
                  DevBoost! You too can join this growth journey.
                </p>

                <div className="flex space-x-3 mt-7">
                  <div>
                    <Link href="/">
                      <p className="border border-[#00ffba] hover:border-[#000049] rounded w-[197px] h-[45px] flex items-center justify-center transition-colors bg-[#00ffba] text-[#000049] hover:bg-transparent font-bold font-inter boxShadowButton">
                        Request A Demo
                      </p>
                    </Link>
                  </div>
                  <div>
                    <Link href="/">
                      <p className="border border-[#0e0131] hover:border-[#00ffba] rounded w-[230px] h-[45px] flex items-center justify-center text-[#0e0131] transition-colors hover:bg-[#00ffba] hover:text-[#0e0131] font-bold font-inter boxShadowButton">
                        Try The Free Version
                      </p>
                    </Link>
                  </div>
                  <div>
                    <Link href="/">
                      <p className="border border-[#0e0131] hover:border-[#00ffba] rounded w-[211px] h-[45px] flex items-center justify-center text-[#0e0131] transition-colors hover:bg-[#00ffba] hover:text-[#0e0131] font-bold font-inter boxShadowButton">
                        Explore Paid Plans
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-[50%]">
                <img src="/Images/laptopIm.png" alt="" className="w-[650px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
