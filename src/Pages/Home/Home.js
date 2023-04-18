import React from "react";
import "./Home.css";
import BrandCarousel from "../Shared/BrandCarousel/BrandCarousel";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="background"></div>
      <div className="absolute top-1/3 transform translate-y-[-33%] left-56 w-1/3 text-white">
        <h1 className="text-7xl mb-8">COX'S BAZAR</h1>
        <p className="text-xl tracking-wider line-clamp-3 leading-7">
          Cox's Bazar is a city, fishing port, tourism centre and district
          headquarters in southeastern Bangladesh. It is famous mostly for its
          long natural sandy beach, and it ...
        </p>
      </div>
      <div className="absolute top-64 w-2/4 right-0">
        <BrandCarousel></BrandCarousel>
      </div>
      <div className="absolute bottom-[16%] right-[38%] flex items-center gap-5">
        <FaRegArrowAltCircleLeft className="text-5xl bg-white hover:bg-[rgba(255,255,255,0.5)] duration-500 rounded-full"></FaRegArrowAltCircleLeft>
        <FaRegArrowAltCircleRight className="text-5xl bg-white hover:bg-[rgba(255,255,255,0.5)] duration-500 rounded-full"></FaRegArrowAltCircleRight>
      </div>
    </>
  );
};

export default Home;
