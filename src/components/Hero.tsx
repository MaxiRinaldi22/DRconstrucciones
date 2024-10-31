"use client";

import Image from "next/image";
import heroImg from "/public/foto.jpeg";
import Icons from "@/util/Icons";
import { useEffect } from "react";
import animation from "@/util/animation";

export default function Hero() {
  useEffect(() => {
    animation();
  }, []);

  return (
    <section className="relative bg-[#1F1F1F] pb-10 md:pr-10">
      <Image
        width={1920}
        height={1080}
        src={heroImg}
        alt=""
        className="custom-clip-path h-[calc(100vh-40px)] w-screen bg-[#1F1F1F] object-cover"
      />
      <div className="absolute inset-0 h-[calc(100vh-40px)] md:mr-10 custom-clip-path bg-black opacity-50"></div>

      <h1 className="top-animation absolute inset-0 flex flex-col items-center justify-center gap-3 text-white md:items-start md:px-20">
        <span className="text-3xl font-[400] md:px-1 lg:text-6xl">
          CONSTRUYENDO UN
        </span>
        <span className="text-5xl font-semibold lg:text-8xl">M E J O R</span>
        <span className="text-3xl font-[400] md:px-1 lg:text-6xl">FUTURO</span>
      </h1>

      <div className="absolute inset-0 hidden items-end justify-start px-20 py-20 md:flex">
        <button className="left-animation group flex h-[60px] w-[300px] items-start justify-between rounded-md bg-[#3476F1] px-5 text-white">
          <div className="flex h-full flex-col items-start justify-center">
            <p className="font-semibold">MAS</p>
            <p className="font-semibold">INFORMACION</p>
          </div>
          <div className="flex h-full transform items-center justify-center transition duration-500 ease-in-out group-hover:rotate-90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="36"
              height="36"
              fill="rgba(255,255,255,1)"
            >
              <path d="M13.1717 12.0007L8.22192 7.05093L9.63614 5.63672L16.0001 12.0007L9.63614 18.3646L8.22192 16.9504L13.1717 12.0007Z"></path>
            </svg>
          </div>
        </button>
      </div>

      <div className="absolute inset-0 flex items-end justify-start px-5 py-16 md:hidden">
        <div className="left-animation left-animation flex h-10 w-10 items-center justify-center rounded-md bg-[#3476F1]">
          <Icons
            path={
              <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
            }
            width={32}
          />
        </div>
      </div>
    </section>
  );
}
