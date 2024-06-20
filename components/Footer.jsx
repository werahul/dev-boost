import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#000049] text-white pt-8 pb-28  font-inter">
      <div className="">
        <div className="flex flex-row justify-between px-20 max-container">
          <div className="w-[40%] mb-6 md:mb-0">
            <img
              src="/Images/devBoostLogo.png"
              alt=""
              className="w-[290px] -ml-5"
            />
            <p className="text-[24px] font-semibold">Social Media</p>
            <div className="flex space-x-4 mt-2">
              <a href="#" aria-label="Facebook">
                <img
                  src="/Images/fbIcon.png"
                  alt="Facebook"
                  className="w-[30px] h-[30px]"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <img
                  src="/Images/instaIcon.png"
                  alt="Instagram"
                  className="w-[30px] h-[30px]"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-row space-x-24 whitespace-nowrap">
            <div className="w-full mb-6 md:mb-0">
              <h3 className="text-[24px] font-semibold mb-4">Quick Links</h3>
              <ul className="text-[18px] opacity-90">
                <li className="mb-2 hover:text-[#1FFFA3]">
                  <Link href="/product">Product</Link>
                </li>
                <li className="mb-2 hover:text-[#1FFFA3]">
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li className="mb-2 hover:text-[#1FFFA3]">
                  <Link href="/blogs">Blog</Link>
                </li>
              </ul>
            </div>
            <div className="w-full mb-6 md:mb-0">
              <h3 className="text-[24px] font-semibold mb-4">Company</h3>
              <ul className="text-[18px] opacity-90">
                <li className="mb-2 hover:text-[#1FFFA3]">
                  <Link href="/about">About Us</Link>
                </li>
                <li className="mb-2 hover:text-[#1FFFA3]">
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="w-full mb-6 md:mb-0">
              <h3 className="text-[24px] font-semibold mb-4">Solutions For</h3>
              <ul className="text-[18px] opacity-90">
                <li className="mb-2 hover:text-[#1FFFA3]">
                  <Link href="/engineering-lead">
                    Engineering Lead
                  </Link>
                </li>
                <li className="mb-2 hover:text-[#1FFFA3]">
                  <Link href="/project-manager">Project Manager</Link>
                </li>
                <li className="mb-2 hover:text-[#1FFFA3]">
                  <Link href="/team-leader">Team Leader</Link>
                </li>
              </ul>
            </div>
            <div className="w-full mb-6 md:mb-0">
              <h3 className="text-[24px] font-semibold mb-4">Case Studies</h3>
              <ul className="text-[18px] opacity-90">
                <li className="mb-2 hover:text-[#1FFFA3]">
                  <Link href="case-study-one">Case Study 1</Link>
                </li>
                <li className="mb-2 hover:text-[#1FFFA3]">
                  <Link href="#">Case Study 2</Link>
                </li>
                <li className="mb-2 hover:text-[#1FFFA3]">
                  <Link href="#">Case Study 3</Link>
                </li>
                <li className="mb-2 hover:text-[#1FFFA3]">
                  <Link href="#">Case Study 4</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white mt-8">
          <div className="max-container mt-0 pt-4 flex justify-between px-20 font-inter font-medium text-[16px]">
            <p>&copy; Copyright {currentYear} DEVBOOST. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link href="/privacy-policy" className="cursor-pointer hover:text-[#1FFFA3]">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="cursor-pointer hover:text-[#1FFFA3]">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
