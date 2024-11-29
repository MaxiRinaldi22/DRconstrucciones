"use client";

import { useEffect } from "react";
import Margin from "./Margin";
import AOS from "aos";
import "aos/dist/aos.css";
import { IMG_HOME_WORK } from "@/util/const";
import Image from "next/image";
import { VerMasBtn } from "./ui/VerMasBtn";
import { useIsMobile } from "@/hooks/useIsMobile";

export function TrabajosMain() {
  const mobile = useIsMobile();

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

          <h2
            data-aos="fade-right"
            className="flex w-full flex-col items-start gap-5 px-5 pt-10 text-4xl font-[700] text-[#1F1F1F] md:flex-row md:gap-10 md:px-0 md:text-5xl"
          >
            S E R V I C I O S
          </h2>
          <VerMasBtn hide={mobile ? true : false} />
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

        <div className="hidden grid-cols-4 gap-10 px-5 py-10 md:grid md:py-20">
          {IMG_HOME_WORK.map((item, id) => (
            <div
              data-aos="fade-up"
              className="flex flex-col items-center justify-center gap-2"
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

        <div className="flex w-full items-center justify-center">
          <VerMasBtn hide={mobile ? false : true} />
        </div>
      </Margin>
    </section>
  );
}
