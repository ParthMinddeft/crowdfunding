"use client";
import React from "react";
import { NavBar, Footer } from "../../Components";
import { CrowdFundingProvider } from "../../Context/CrowdFunding";

const page = () => {
  return (
    <>
      <CrowdFundingProvider>
        <NavBar />
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <Footer />
      </CrowdFundingProvider>
    </>
  );
};

export default page;
