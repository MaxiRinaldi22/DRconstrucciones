"use client";

import Image from "next/image";
import heroImg from "/public/foto.jpeg";
import Icons from "@/util/Icons";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";

export default function Hero() {
  const buttonRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  });

  useEffect(() => {
    gsap.to(buttonRef.current, {
      y: -20,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 0.5,
    });
  }, []);

  const handleScrollPC = () => {
    window.scrollBy({
      top: 850, 
      behavior: "smooth",
    });
  };
  const handleScrollMOBILE = () => {
    window.scrollBy({
      top: 650, 
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-[#1F1F1F] pb-10 md:pr-10">
      <Image
        width={1920}
        height={1080}
        src={heroImg}
        quality={75}
        priority
        alt=""
        className="custom-clip-path h-[calc(100vh-140px)] w-screen bg-[#1F1F1F] object-cover"
      />
      <div className="custom-clip-path absolute inset-0 h-[calc(100vh-140px)] bg-black opacity-50 md:mr-10"></div>

      <h1
        data-aos="fade-down"
        className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white md:items-start md:px-20"
      >
        <span className="text-3xl font-[400] md:px-1 lg:text-6xl">
          CONSTRUYENDO UN
        </span>
        <span className="text-5xl font-semibold lg:text-8xl">M E J O R</span>
        <span className="text-3xl font-[400] md:px-1 lg:text-6xl">FUTURO</span>
      </h1>

      <div
        onClick={handleScrollPC}
        data-aos="fade-right"
        className="absolute inset-0 hidden items-end justify-start px-20 py-20 md:flex"
      >
        <button className="group flex h-[60px] w-[300px] items-start justify-between rounded-md bg-[#3476F1] px-5 text-white">
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

      <div className="absolute inset-0 flex items-end justify-start px-5 py-[80px] md:hidden">
        <div
          onClick={handleScrollMOBILE}
          ref={buttonRef}
          className="flex h-10 w-10 items-center justify-center rounded-md bg-[#3476F1]"
        >
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
