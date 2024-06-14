import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PricingBlue from "@/components/PricingBlue";
import PricingFaq from "@/components/PricingFaq";
import PricingPlan from "@/components/PricingPlan";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <PricingBlue />
      <PricingPlan />
      <PricingFaq />
      <Cta />
      <Footer />
    </div>
  );
};

export default page;
