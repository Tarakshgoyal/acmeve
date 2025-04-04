"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { Phone, Copyright } from "lucide-react";

export function SparklesPrevieww() {
  return (
    <>
    <div className="h-auto w-full bg-black flex flex-col items-center justify-center md:mt-0 overflow-hidden rounded-md py-10 px-4">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center text-white relative z-20">
        Reach Out to Us
      </h1>

      {/* Animated Sparkles */}
      <div className="w-full max-w-[90%] sm:max-w-[40rem] h-40 relative mt-4">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Sparkles Effect */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>

      {/* Conveners Section */}
      <div className="text-2xl font-sans font-semibold mt-10 mb-6 text-center text-white">
        Our Conveners
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-70 text-center">
        {[
          { name: "Kinjal", phone: "+91 9580436405" },
          { name: "Devanshi", phone: "+91 9306757301" },
          { name: "Tanay", phone: "+91 7070170217" },
        ].map((convener, index) => (
          <div key={index} className="flex flex-col items-center bg-gray-900 p-4 rounded-lg w-full max-w-xs">
            <h1 className="text-lg font-sans font-medium text-white">{convener.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <Phone className="h-6 w-6 text-white" />
              <h1 className="text-white font-sans">{convener.phone}</h1>
            </div>
          </div>
        ))}
      </div>

      {/* Copyright Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center text-center gap-2 mt-20 px-4">
        <Copyright className="h-6 w-6 text-white" />
        <h1 className="text-sm font-sans text-white">
          Copyright 2025 All Rights Reserved by UPES ACM and ACM-W Student
          Chapter
        </h1>
      </div>
    </div>
    </>
  );
}
