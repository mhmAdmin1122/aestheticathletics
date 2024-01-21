import React from "react";
import Layout from "./components/Layout";
import HeroBanner from "./components/HeroBanner";
import SectionOne from "./components/SectionOne";

const HomePage = () => {
  return (
    <Layout>
      <div className="homePage-Box w-full">
        <HeroBanner />
        <div className="px-24 py-20">
          <SectionOne />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
