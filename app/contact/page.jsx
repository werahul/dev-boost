"use client"
import ContactBlue from "@/components/ContactBlue";
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
      <ContactBlue />
      <Footer />
    </div>
  );
};

export default Page;
