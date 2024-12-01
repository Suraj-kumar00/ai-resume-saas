import React from "react";
import { Cover } from "@/components/ui/cover";
import { Spotlight } from "@/components/ui/spotlight";
import ShineButton from "@/components/ShineButton";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div>
        <ShineButton />
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="gray"
        />
      </div>

      <div className="top-16 px-4">
        <h1 className="text-5xl md:text-5xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-24 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Build amazing websites <br /> at <Cover>warp speed</Cover>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center px-4 mt-12 space-y-8 md:space-y-0 md:space-x-12">
        <div className="text-center md:text-left">
          <p className="text-2xl font-medium mb-6 text-neutral-700 dark:text-white">
            Make AI Resume Instantly
          </p>
          <Button className="bg-gradient-to-r from-gray-400 to-cyan-700 hover:from-cyan-500 hover:to-cyan-700">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Resume Screenshot Section with Default Tilt on the Container and Hover Effect */}
        <div className="w-full max-w-md transform rotate-6 transition-all duration-300 hover:scale-105 hover:rotate-3 hover:shadow-xl">
          <div className="bg-white border border-neutral-200 p-4 rounded-xl overflow-hidden">
            <Image
              src="/suraj-resume.png"
              width={800}
              height={600}
              alt="Resume Screenshot"
              className="w-full h-auto rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:rotate-3 hover:rotate-x-3 hover:rotate-y-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
