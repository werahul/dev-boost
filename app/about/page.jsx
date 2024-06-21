"use client"
import AboutBlue from "@/components/AboutBlue";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, []);

  return (
    <div>
      <Navbar />
      <AboutBlue />
      <Cta />
      <Footer />
    </div>
  );
};

export default Page;
