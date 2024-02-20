import Image from "next/image";
import Link from "next/link";
import React from "react";
import tempResume from "public/assets/example-resume.webp";
import Sparkles from "components/Sparkles";

export default function Banner() {
  return (
    <div className="px-4 py-10 lg:px-8 lg:py-16 w-full h-full flex flex-col items-center md:items-start">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary text-center">
        Welcome to orb
      </h1>
      <p className="text-2xl px-2 text-slate-600 lg:ml-2 mt-6 text-center">
        Magical <strong>orb</strong> - makes résumé sparkle✨
      </p>

      <div className="w-full lg:ml-3 flex flex-col items-center lg:flex-row lg:items-start justify-between gap-10">
        <div className="mt-16 flex flex-col justify-center gap-2 w-max">
          <Link className="w-max btn-primary" href={"/new"}>
            <div className="text-xl lg:text-base bw-max rounded-full text-slate-100 font-medium">
              {"Create résumé "} &rarr;
            </div>
          </Link>
          <span className="text-center text-sm text-slate-400">
            No sign-up required
          </span>
        </div>
        {/* Sample resume */}
        <div className="w-full h-full mt-16 lg:flex justify-end">
          <div className="lg:w-4/5 flex flex-col justify-center items-center">
            <Sparkles respwanPeriod={350}>
              <Image
                src={tempResume}
                alt="Example resume"
                className="h-full w-full rounded-tl-2xl rounded-bl-2xl"
                priority
              />
            </Sparkles>
          </div>
        </div>
      </div>
    </div>
  );
}
