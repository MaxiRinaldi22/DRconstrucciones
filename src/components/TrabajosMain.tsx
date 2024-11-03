"use client";

import { useEffect } from "react";
import Margin from "./Margin";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { IMG_HOME_WORK } from "@/util/const";
import Image from "next/image";

export function TrabajosMain() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  });

  return (
    <section className="bg-white py-10">
      <Margin>
        <div
          data-aos="fade-right"
          className="flex flex-col items-center gap-2 md:items-start"
        >
          <h2 className="flex flex-col items-center gap-5 text-4xl font-semibold text-[#1F1F1F] md:flex-row md:items-start md:gap-10 md:text-5xl">
            <span>N U E S T R O S</span>
            <span>T R A B A J O S</span>
          </h2>

          <button
            data-aos="fade-right"
            className="transform pl-1 text-xl md:justify-start"
          >
            <Link
              href="/trabajos"
              className="flex items-center gap-2 transition-transform duration-300 will-change-transform hover:scale-105"
            >
              <span>VER MAS</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={25}
                  height={25}
                  fill="currentColor"
                >
                  <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                </svg>
              </span>
            </Link>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-10 px-5 py-10 md:hidden">
          {IMG_HOME_WORK.map((item, id) => (
            <div
              data-aos={id % 2 === 0 ? "fade-right" : "fade-left"}
              className="flex flex-col items-center justify-center"
              key={id}
            >
              <Image
                src={item.img}
                alt="Imagenes de trabajos realizados"
                className="image-custom-clip-path h-[300px] w-[400px] object-cover"
              />
              <p className="font-semibold">{item.title}</p>
            </div>
          ))}
        </div>

        <div className="hidden grid-cols-3 gap-10 md:py-20 px-5 py-10 md:grid">
          {IMG_HOME_WORK.map((item, id) => (
            <div
              data-aos="fade-up"
              className="flex flex-col gap-2 items-center justify-center"
              key={id}
            >
              <Image
                src={item.img}
                alt="Imagenes de trabajos realizados"
                className="image-custom-clip-path h-[300px] w-[400px] object-cover"
              />
              <p className="font-semibold">{item.title}</p>
            </div>
          ))}
        </div>
      </Margin>
    </section>
  );
}
