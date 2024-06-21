import React from "react";

const ContactBlue = () => {
  return (
    <div>
      <div className="pricingBg w-full h-[641px] rounded-b-[80px] px-20 pt-[300px] z-10 ">
        <p className="tracking-wide font-flyHead text-[64px] leading-[74px] text-[#ffffff] text-center uppercase">
          Have a question about DevBoost? <br /> Contact us today!
        </p>
        <p className="font-inter font-normal text-[18px] leading-[23.4px] text-[#ffffff] text-center mt-5">
          Learn how DevBoost is the ‘Smartest Engineering Intelligence Platform’
          that empowers <br /> engineering leaders with transparency and
          precise, actionable insights.
        </p>
        {/*<div className="flex justify-center items-center">
      <button className="bg-[#1FFFA3] hover:bg-transparent border boder-[#1FFFA3] rounded-[8px] w-[243px] h-[56px] font-bold text-[20px] text-[#000049] hover:text-[#1FFFA3] mt-10 ">
        Request A Demo
      </button>
    </div>*/}
      </div>

      <div className="max-container">
        <div className="px-20 py-[156px]">
          <div className="w-full  border border-[#004C3F] rounded-[20px] flex">
            <div className="w-[45%] bg-[#004C3F] h-full p-10 rounded-l-[20px]">
              <p className="font-inter font-semibold text-[32px] text-white">
                Contact Information
              </p>
              <p className="font-inter  text-[16px] text-white mt-4">
                Want to talk to our team? <br />
                You can either complete the form or directly reach out to us
                with the below-mentioned contact details.
              </p>
              <div className="space-y-[28px] mt-7">
                <div className="flex items-center space-x-4">
                  <div className="">
                    <img src="/Images/mailIcon.png" alt="mail" />
                  </div>
                  <div className="font-inter text-[18px] text-white">
                    <a href="mailto:tushar.doshi@itechgenicglobal.com">
                      <p>Tushar.doshi@itechgenicglobal.com</p>
                    </a>
                    <a href="mailto:aninda.mukherjee@itechgenicglobal.com">
                      <p>Aninda.mukherjee@itechgenicglobal.com</p>
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="">
                    <img src="/Images/phoneIcon.png" alt="mail" />
                  </div>
                  <div className="font-inter text-[18px] text-white">
                    <a href="tel:9433781602">
                      <span>9433781602 </span>,
                    </a>
                    <a href="tel+6596336714">
                      <span> +65 9633 6714</span>,
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="">
                    <img src="/Images/locationIcon.png" alt="mail" />
                  </div>
                  <div className="font-inter text-[18px] text-white">
                    <a href="tel:9433781602">
                      <span>
                        1 Marina Blvd, Level 20, <br /> Singapore 018989{" "}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-[18px]">
                <img src="/Images/contactImg.png" alt="contact" />
              </div>
            </div>
            <div className="p-10 w-[55%]">
              <form className="">
                <div className="space-y-6">
                  <div className="">
                    <p className="font-inter text-[#000049] mb-2">
                      Your Full Name
                    </p>
                    <input
                      type="text"
                      placeholder="E.g. Pihu shah"
                      className="border font-inter text-[16px] px-5 placeholder-[#000049] border-[#000049] rounded-[8px] h-[64px] w-full"
                    />
                  </div>
                  <div className="">
                    <p className="font-inter text-[#000049] mb-2">
                      Your Email Id
                    </p>
                    <input
                      type="email"
                      placeholder="E.g. pihu1340@gmail.com"
                      className="border font-inter text-[16px] px-5 placeholder-[#000049] border-[#000049] rounded-[8px] h-[64px] w-full"
                    />
                  </div>
                  <div className="">
                    <p className="font-inter text-[#000049] mb-2">
                      Your Phone No.
                    </p>
                    <input
                      type="tel"
                      placeholder="E.g. XXX XXX 2541"
                      className="border font-inter text-[16px] px-5 placeholder-[#000049] border-[#000049] rounded-[8px] h-[64px] w-full"
                    />
                  </div>
                  <div className="">
                    <p className="font-inter text-[#000049] mb-2">
                      Your Message
                    </p>
                    <input
                      type="text"
                      className="border font-inter text-[16px] px-5 placeholder-[#000049] border-[#000049] rounded-[8px] h-[140px] w-full"
                    />
                  </div>
                </div>

                <button className="mt-10 rounded-[8px] font-inter text-[20px] hover:bg-[#000049] hover:text-[#1FFFA3] text-[#000049] font-semibold w-[149px] h-[60px] border border-[#000049]">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="px-20 pb-[156px]">
          <p className="font-inter text-[48px] text-[#000049] text-center">
            <span className="font-semibold">Locate Us</span> Here
          </p>

          <div className="mapBg lg:block hidden lg:w-[100%] mt-6 lg:mt-9  p-8 mx-auto h-[500px] lg:rounded-[8px] ">
            <div className="bg-[#000049] text-white hidden  lg:space-x-10 justify-between lg:flex flex-col lg:flex-row lg:w-[461px] p-6 lg:rounded-[8px] ">
              <a
                href="https://www.google.com/maps/dir//1+Marina+Blvd,+Level+20,+Singapore+018989/@1.2821991,103.7702493,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31da19d2163f639f:0x251b930f8b4bce85!2m2!1d103.8526418!2d1.2821856?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="space-y-3">
                  <h3 className="font-bold font-inter text-2xl ">DevBoost</h3>
                  <p>
                    1 Marina Blvd, Level 20, Singapore <br /> 018989
                  </p>
                  <p className="text-xl flex items-center space-x-2">
                    <span>4.2</span>{" "}
                    <img
                      src="/Images/ratings.png"
                      alt="4 stars"
                      className="w-[68px]"
                    />
                  </p>

                  <button className="underline text-white font-medium cursor-pointer">
                    View larger map
                  </button>
                </div>
              </a>
              <div className="">
                <img
                  src="/Images/direction.png"
                  alt=""
                  className="w-[24px] mx-auto"
                />
                <p className="text-center text-white">Directions</p>
              </div>
            </div>
          </div>
          <div className="bg-[#f5f5f5] lg:hidden lg:space-x-4 flex flex-col lg:w-[461px] py-6 lg:rounded-[8px] ">
            <div className="">
              <img src="" alt="" className="w-full" />
            </div>
            <div className="px-5 mt-5">
              <a
                href="https://www.google.com/maps/dir//1+Marina+Blvd,+Level+20,+Singapore+018989/@1.2821991,103.7702493,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31da19d2163f639f:0x251b930f8b4bce85!2m2!1d103.8526418!2d1.2821856?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="space-y-3 shadow-2xl bg-[#f5f5f5] p-3 relative">
                  <h3 className="font-bold text-lg lg:text-2xl ">DevBoost</h3>
                  <p className="text-[12px] lg:text-base w-[70%]">
                    Lorem ipsum dolor sit amet <br /> consectetur. Phasellus
                    ante donec <br /> quis erat Tortor
                  </p>
                  <p className="text-xl flex items-center space-x-2">
                    <span>4.2</span>{" "}
                    <img
                      src="/Images/ratings.png"
                      alt="4 stars"
                      className="w-[68px]"
                    />
                  </p>
                  <button className="underline text-[12px] lg:text-base text-[#000049] font-medium cursor-pointer">
                    View larger map
                  </button>

                  <div className=" absolute top-2 right-5">
                    <img
                      src="/Images/direction.png"
                      alt=""
                      className="w-[18px] lg:w-[24px] mx-auto"
                    />
                    <p className="text-center text-[12px] lg:text-base  text-[#000049]">
                      Directions
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBlue;
