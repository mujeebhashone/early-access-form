import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import logo from "@/images/Smartox-Logo-01.png";

const EarlyAccess = () => {
  return (
    <div className="min-h-screen bg-black text-white relative font-poppins">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-transparent opacity-50"></div>
      <div className="absolute inset-0 bg-[url('/dots.png')] opacity-20"></div>

      {/* Content wrapper */}
      <div className="relative">
        {/* Header Section */}
        <header className="py-4 sm:py-6 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <Image
              src={logo}
              alt="logo"
              width={120}
              height={80}
              className="w-[100px] sm:w-[120px] md:w-[150px]"
              style={{
                filter: "invert(1)",
              }}
            />
          </div>
        </header>

        {/* Hero Section */}
        <main className="container mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-16 min-h-[calc(100vh-120px)] flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
            {/* Left Section */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <Button
                  variant="outline"
                  className="bg-black/50 text-blue-500 border-blue-500 hover:bg-black/70 hover:text-blue-500 gap-2 text-sm sm:text-base"
                >
                  Team Management{" "}
                  <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </Button>

                <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-medium leading-[1.1] tracking-[-0.02em]">
                  Get More Clients By Scaling Your Cold{" "}
                  <span className="text-blue-500 italic font-light block sm:inline">
                    More Clients By Scaling
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-white font-light leading-relaxed max-w-xl">
                  Accelerate team success effortlessly with our solution.
                  Streamline team building processes and achieve optimal
                  collaboration for faster and easier project outcomes.
                </p>
              </div>

              {/* Email Input Section */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0 w-full max-w-xl h-auto sm:h-[4.5rem] rounded-full bg-black/50 p-2 md:border border-blue-500">
                <Input
                  type="email"
                  placeholder="Your Email"

                  className="h-12 sm:h-full w-full bg-transparent border-0 text-white placeholder:text-white font-light text-base sm:text-lg focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button className="h-12 sm:h-full w-full sm:w-auto px-6 sm:px-8 rounded-full bg-blue-500 text-white font-medium text-base sm:text-lg hover:bg-blue-500/90 transition-all duration-300">
                  Request Demo
                </Button>
              </div>
            </div>

            {/* Right Section */}
            <div className="space-y-6 relative mt-8 lg:mt-0">
              {/* Main Image */}
              <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
                  alt="AI System Visualization"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
                  priority
                  className="object-cover"
                  style={{
                    filter: "brightness(1.6) contrast(1.2) saturate(1.5)",
                  }}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>

              {/* Project Card */}
              <div className="md:absolute top-[60%] sm:top-[40%] left-4 right-4 sm:left-auto sm:right-10 z-30 w-auto sm:w-[320px] border border-white/10 rounded-xl p-4 sm:p-6 backdrop-blur-md bg-black/60">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                    <h3 className="text-lg sm:text-xl font-semibold tracking-wide">
                      #AI-System
                    </h3>
                  </div>
                  <span className="text-xs sm:text-sm font-light text-blue-400">
                    Processing
                  </span>
                </div>
                <div className="space-y-4">
                  {/* System Stats */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-blue-500/10 relative overflow-hidden flex items-center justify-center">
                        <Image
                          src="https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80"
                          alt="AI System"
                          fill
                          sizes="(max-width: 640px) 32px, 40px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium tracking-wide text-sm sm:text-base">
                          System Core
                        </p>
                        <p className="text-xs sm:text-sm font-light text-blue-400">
                          ML Processing
                        </p>
                      </div>
                    </div>
                    <div className="w-16 sm:w-24 h-1.5 bg-black/50 rounded-full overflow-hidden">
                      <div
                        className="w-3/4 h-full bg-blue-500 rounded-full animate-pulse"
                        style={{
                          animation:
                            "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Additional Stats */}
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <div className="bg-black/30 rounded-lg p-2 sm:p-3">
                      <p className="text-[10px] sm:text-xs text-blue-400">
                        Processing Rate
                      </p>
                      <p className="text-base sm:text-lg font-semibold">
                        98.5%
                      </p>
                    </div>
                    <div className="bg-black/30 rounded-lg p-2 sm:p-3">
                      <p className="text-[10px] sm:text-xs text-blue-400">
                        Active Nodes
                      </p>
                      <p className="text-base sm:text-lg font-semibold">
                        1,234
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EarlyAccess;
