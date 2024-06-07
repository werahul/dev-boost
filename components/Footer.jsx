import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#000049] text-white py-8  font-inter">
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
                <li className="mb-2">
                  <Link href="/product">Product</Link>
                </li>
                <li className="mb-2">
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li className="mb-2">
                  <Link href="/blog">Blog</Link>
                </li>
              </ul>
            </div>
            <div className="w-full mb-6 md:mb-0">
              <h3 className="text-[24px] font-semibold mb-4">Company</h3>
              <ul className="text-[18px] opacity-90">
                <li className="mb-2">
                  <Link href="/about">About Us</Link>
                </li>
                <li className="mb-2">
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="w-full mb-6 md:mb-0">
              <h3 className="text-[24px] font-semibold mb-4">Solutions For</h3>
              <ul className="text-[18px] opacity-90">
                <li className="mb-2">
                  <Link href="/solutions/engineering-lead">
                    Engineering Lead
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/solutions/project-manager">Project Manager</Link>
                </li>
                <li className="mb-2">
                  <Link href="/solutions/team-leader">Team Leader</Link>
                </li>
              </ul>
            </div>
            <div className="w-full mb-6 md:mb-0">
              <h3 className="text-[24px] font-semibold mb-4">Case Studies</h3>
              <ul className="text-[18px] opacity-90">
                <li className="mb-2">
                  <Link href="/case-studies/case-study-1">Case Study 1</Link>
                </li>
                <li className="mb-2">
                  <Link href="/case-studies/case-study-2">Case Study 2</Link>
                </li>
                <li className="mb-2">
                  <Link href="/case-studies/case-study-3">Case Study 3</Link>
                </li>
                <li className="mb-2">
                  <Link href="/case-studies/case-study-4">Case Study 4</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white mt-8">
          <div className="max-container mt-0 pt-4 flex justify-between px-20 font-inter font-medium text-[16px]">
            <p>&copy; Copyright 2024 DEVBOOST. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-conditions">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
