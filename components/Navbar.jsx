"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div
        className={`w-full flex justify-center z-50 ${
          isScrolled ? "fixed bottom-0" : "fixed top-10"
        }`}
      >
        <nav
          className={`mx-auto max-w-[1200px]  z-50  p-4 flex items-center lg:h-[140px] rounded-[20px]  ${
            isScrolled
              ? "lg:h-[96px] bg-[#19196F] w-[900px] space-x-10"
              : "lg:h-[140px] bg-[#ffffff36] w-full space-x-16 border-b border-[#1FFFA3]"
          } transition-all duration-300`}
        >
          {!isScrolled && (
            <div className="text-[#00ffba] text-2xl font-bold">
              <Link href="/">
                <img src="/Images/devBoostLogo.png" alt="Logo" />
              </Link>
            </div>
          )}
          <div className="block lg:hidden" onClick={toggleMenu}>
            <div
              className={`w-6 h-0.5 bg-[#00ffba] mb-1 transition-transform ${
                isOpen ? "transform rotate-45 translate-y-2" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-[#00ffba] mb-1 transition-opacity ${
                isOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-[#00ffba] transition-transform ${
                isOpen ? "transform -rotate-45 -translate-y-2" : ""
              }`}
            ></div>
          </div>
          <ul
            className={`lg:flex lg:items-center lg:space-x-6 ${
              isOpen ? "block" : "hidden"
            } lg:block bg-[#0e0131] lg:bg-transparent `}
          >
          {isScrolled ? (<p className="text-white font-inter">Home</p>) : "" }
            <li className="text-white p-4 lg:p-0 text-center flex items-center space-x-2">
              <p>Product</p>
              <svg
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.43912 6.04625C5.44537 6.03875 5.44788 6.02875 5.45412 6.02125L9.81787 1.2C10.0616 0.92875 10.0616 0.48875 9.81787 0.2175C9.81538 0.215 9.81288 0.21375 9.81038 0.2125C9.75614 0.146819 9.68822 0.0937731 9.61136 0.0570691C9.5345 0.020365 9.45055 0.000888367 9.36538 0H0.636625C0.54989 0.00140152 0.464521 0.0218309 0.386548 0.0598454C0.308575 0.09786 0.2399 0.152532 0.185375 0.22L0.182875 0.2175C0.0649129 0.353982 0 0.528354 0 0.70875C0 0.889145 0.0649129 1.06352 0.182875 1.2L4.55663 6.04625C4.61107 6.11008 4.67872 6.16133 4.7549 6.19648C4.83108 6.23162 4.91398 6.24982 4.99788 6.24982C5.08177 6.24982 5.16467 6.23162 5.24085 6.19648C5.31703 6.16133 5.38468 6.11008 5.43912 6.04625Z"
                  fill="white"
                />
              </svg>
            </li>
            <li className="text-white p-4 lg:p-0 text-center flex items-center space-x-2">
              <p>Solutions</p>
              <svg
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.43912 6.04625C5.44537 6.03875 5.44788 6.02875 5.45412 6.02125L9.81787 1.2C10.0616 0.92875 10.0616 0.48875 9.81787 0.2175C9.81538 0.215 9.81288 0.21375 9.81038 0.2125C9.75614 0.146819 9.68822 0.0937731 9.61136 0.0570691C9.5345 0.020365 9.45055 0.000888367 9.36538 0H0.636625C0.54989 0.00140152 0.464521 0.0218309 0.386548 0.0598454C0.308575 0.09786 0.2399 0.152532 0.185375 0.22L0.182875 0.2175C0.0649129 0.353982 0 0.528354 0 0.70875C0 0.889145 0.0649129 1.06352 0.182875 1.2L4.55663 6.04625C4.61107 6.11008 4.67872 6.16133 4.7549 6.19648C4.83108 6.23162 4.91398 6.24982 4.99788 6.24982C5.08177 6.24982 5.16467 6.23162 5.24085 6.19648C5.31703 6.16133 5.38468 6.11008 5.43912 6.04625Z"
                  fill="white"
                />
              </svg>
            </li>
            <li className="text-white p-4 lg:p-0 text-center">
              <Link href="/pricing">
                <p>Pricing</p>
              </Link>
            </li>
            <li className="text-white p-4 lg:p-0 text-center flex items-center space-x-2">
              <p>Company</p>
              <svg
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.43912 6.04625C5.44537 6.03875 5.44788 6.02875 5.45412 6.02125L9.81787 1.2C10.0616 0.92875 10.0616 0.48875 9.81787 0.2175C9.81538 0.215 9.81288 0.21375 9.81038 0.2125C9.75614 0.146819 9.68822 0.0937731 9.61136 0.0570691C9.5345 0.020365 9.45055 0.000888367 9.36538 0H0.636625C0.54989 0.00140152 0.464521 0.0218309 0.386548 0.0598454C0.308575 0.09786 0.2399 0.152532 0.185375 0.22L0.182875 0.2175C0.0649129 0.353982 0 0.528354 0 0.70875C0 0.889145 0.0649129 1.06352 0.182875 1.2L4.55663 6.04625C4.61107 6.11008 4.67872 6.16133 4.7549 6.19648C4.83108 6.23162 4.91398 6.24982 4.99788 6.24982C5.08177 6.24982 5.16467 6.23162 5.24085 6.19648C5.31703 6.16133 5.38468 6.11008 5.43912 6.04625Z"
                  fill="white"
                />
              </svg>
            </li>
            <li className="text-white p-4 lg:p-0 text-center">
              <Link href="/blogs">
                <p>Blogs</p>
              </Link>
            </li>
          </ul>
          <div>
            <Link href="/">
              <p className="border border-[#00ffba] rounded-[8px] w-[243px] h-[60px] flex items-center justify-center text-[#00ffba] transition-colors hover:bg-[#00ffba] hover:text-[#0e0131] font-bold font-inter boxShadowButton glowEffect">
                Request A Demo
              </p>
            </Link>
          </div>
        </nav>
      </div>
      <div className="">
        <img
          src="/Images/navGra.png"
          alt=""
          className={`fixed top-[170px] 2xl:left-[150px] left-14  ${
          isScrolled ? "hidden" : "block"
        }`}
        />
      </div>
    </div>
  );
};

export default Navbar;
