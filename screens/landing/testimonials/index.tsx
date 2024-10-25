"use client";
import React, { Component } from "react";
import ResponsiveCarousel from "./carousel";
function LandingTestimonials() {
  return (
    <div className="mt-32">
      <div>
        <div className="flex flex-row items-center justify-center mb-6">
          <img
            src="https://res.cloudinary.com/damm9iwho/image/upload/v1729783305/Div_framer-3TZmM_fdpvnr.svg"
            alt=""
          />
        </div>
        <p className="text-center text-5xl max-lg:text-4xl max-md:text-2xl font-semibold">
          Working with our clients partners
        </p>
        <div className="flex flex-row items-center justify-center mb-8 mt-5 px-60 max-lg:px-32 max-md:px-8">
          <p className="md:w-1/2 text-center content-center">
            Grateful for the opportunity to collaborate and forge lasting
            connections.
          </p>
        </div>
      </div>
      <div>
        <ResponsiveCarousel />
      </div>
    </div>
  );
}

export default LandingTestimonials;
