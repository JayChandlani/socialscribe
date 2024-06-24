"use client";
import dynamic from "next/dynamic";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import ChartTwo from "../Charts/ChartTwo";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import CardDataStats from "../CardDataStats";
import Link from "next/link";

const MapOne = dynamic(() => import("@/components/Maps/MapOne"), {
  ssr: false,
});

const ChartThree = dynamic(() => import("@/components/Charts/ChartThree"), {
  ssr: false,
});

const LandingPage: React.FC = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-wrap items-center">
        <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            <span className="mb-1.5 block font-medium">A Social Media Machine Trained On You,
              Your Industry And Marketing Best Practices
              YOU WILL BE IMPRESSED!</span>
            <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
              Fully Autonomous
              Social Media
              Relationship Builder
            </h2>

            <p>SOME OF OUR HOTTEST FEATURES🔥</p>
            <p>Content Calendar | AI Written Posts That Match Specifically Your Style</p>
            <p>Enhanced Cross Platform | Optimizes Your Efforts Across All Your Social Platforms</p>
            <p>Lead Generator | Locates High-Intent Buyers Across Social media</p>
            <Link
              href="/auth/signin"
              className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-4 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10 mt-4"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2 p-4">
          <video autoPlay loop muted className=" rounded-2xl">
            <source src="images/hero-video.mp4"  />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
