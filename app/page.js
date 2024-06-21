"use client"
import Cta from "@/components/Cta";
import DevBoostIntegration from "@/components/DevBoostIntegration";
import Footer from "@/components/Footer";
import HomeBlogs from "@/components/HomeBlogs";
import HomeBlue from "@/components/HomeBlue";
import HomeHolisticView from "@/components/HomeHolisticView";
import Navbar from "@/components/Navbar";
import TestimonialSlider from "@/components/TestimonialSlider";
import React, { useEffect } from "react";

const page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, []);
  return (
    <div>
      <Navbar />
      <HomeBlue/>
      <HomeHolisticView/>
      <DevBoostIntegration/>
      <TestimonialSlider/>
      <HomeBlogs/>
      <Cta/>
      <Footer/>
    </div>
  );
};

export default page;
