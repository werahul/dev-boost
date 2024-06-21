import React from "react";

const HomeBlogs = () => {
  return (
    <div className="bg-[#000049] px-20 pt-20 pb-[100px]">
      <div className="max-container">
        <p className="font-inter font-normal text-[48px] leading-[58px] text-center text-white">
          Our <span className="font-bold">Blogs</span>{" "}
        </p>

        <div className="grid grid-cols-3 gap-x-5 mt-[50px]">
          <div className="h-auto rounded-[8px] w-full bg-white bg-opacity-15 relative">
            <img src="/Images/HBlog1.png" alt="Blog1" className="w-full" />
            <div className="text-white p-7">
              <p className="font-inter text-[16px] font-normal flex items-center opacity-60">
                DevBoost{" "}
                <span className="mx-3">
                  {" "}
                  <svg
                    width="5"
                    height="5"
                    viewBox="0 0 5 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
                  </svg>
                </span>{" "}
                May 18, 2024
              </p>
              <p className="font-inter text-[24px] font-semibold leading-[30px] mt-3">
                New-age Practices: <br /> Engineering Investment and <br />{" "}
                Business Alignment
              </p>
              <p className="font-inter text-[16px] font-normal leading-[24px] mt-3 opacity-90">
                How DevBoost helps clients move <br /> towards data-driven
                conversations.
              </p>
              <div className="font-inter font-semibold text-[16px] text-[#1FFFA3] mt-4 flex items-center cursor-pointer space-x-2 hover:space-x-3 transition-all duration-100 w-[140px]  bottom-7 left-7">
                <p className="">Read More </p>
                <img src="/Images/moreArr.png" alt="" className="" />
              </div>
            </div>
          </div>
          <div className="h-auto rounded-[8px] w-full bg-white bg-opacity-15 relative">
            <img src="/Images/HBlog2.png" alt="Blog2" className="w-full" />
            <div className="text-white p-7">
              <p className="font-inter text-[16px] font-normal flex items-center opacity-60">
                DevBoost{" "}
                <span className="mx-3">
                  {" "}
                  <svg
                    width="5"
                    height="5"
                    viewBox="0 0 5 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
                  </svg>
                </span>{" "}
                May 13, 2024
              </p>
              <p className="font-inter text-[24px] font-semibold leading-[30px] mt-3">
                Best Practices For Team <br /> Health Improvement
              </p>
              <p className="font-inter text-[16px] font-normal leading-[24px] mt-3 opacity-90">
                How clients use DevBoost to analyze <br /> data points and drive
                key business <br /> outcomes.
              </p>
              <div className="font-inter font-semibold text-[16px] text-[#1FFFA3] mt-[20px] flex items-center cursor-pointer space-x-2 hover:space-x-3 transition-all duration-100 w-[140px]  bottom-7 left-7">
                <p className="">Read More </p>
                <img src="/Images/moreArr.png" alt="" className="" />
              </div>
            </div>
          </div>
          <div className="h-auto rounded-[8px] w-full bg-white bg-opacity-15 relative">
            <img src="/Images/HBlog3.png" alt="Blog3" className="w-full" />
            <div className="text-white p-7 ">
              <p className="font-inter text-[16px] font-normal flex items-center opacity-60">
                DevBoost{" "}
                <span className="mx-3">
                  {" "}
                  <svg
                    width="5"
                    height="5"
                    viewBox="0 0 5 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
                  </svg>
                </span>{" "}
                May 09, 2024
              </p>
              <p className="font-inter text-[24px] font-semibold leading-[30px] mt-3">
                Latest Techniques <br /> For  Strategy & <br /> Planning
              </p>
              <p className="font-inter text-[16px] font-normal leading-[24px] mt-3 opacity-90">
                Top 5 challenges that engineering <br /> managers are facing
                today.
              </p>
              <div className="font-inter font-semibold text-[16px] text-[#1FFFA3] mt-4 flex items-center cursor-pointer space-x-2 hover:space-x-3 transition-all duration-100 w-[140px]  bottom-7 left-7">
                <p className="">Read More </p>
                <img src="/Images/moreArr.png" alt="" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlogs;
