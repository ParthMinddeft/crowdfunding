"use client";
import React, { useContext } from "react";
import { NavBar, Footer } from "../../Components";
import {
  CrowdFundingContext,
  CrowdFundingProvider,
} from "../../Context/CrowdFunding";

const page = () => {
  // const { titleData } = useContext(CrowdFundingContext);
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
