"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import Image from "next/image";

export function SparklesPreview() {
  return (
    <div className="h-[46rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="flex items-center justify-between overflow-hidden ml-10 rounded-md absolute top-0 left-0 right-0 z-10">
        <Image src={"/acmlogoo.png"} width={100} height={100} alt={"logo"}/>
        <Image src={"/ACM.png"} width={180} height={100} alt={"logo"}/>
        
      </div>
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="h-full md:h-[90rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        <div className="p-4 relative z-10 w-full text-center">
            <div className="flex flex-col items-center justify-center overflow-hidden rounded-md">
                  <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
                    <Image src={"/ODYSSEY.png"} width={400} height={100} alt={"logo"}/>
                  </h1>
                  <div className="w-[40rem] h-10 relative">
                    {/* Gradients */}
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
            
                    {/* Core component */}
                    
                    {/* Radial Gradient to prevent sharp edges */}
                    <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                  </div>
            
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            Seven Events, Infinite Possibilities — Welcome to Odessey! 
            </p>
        </div>
      </div>
    </div>
    </div>
  );
}
