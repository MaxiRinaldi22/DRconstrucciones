"use client";

import Margin from "@/components/Margin";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

import img1 from "/public/foto2.jpg";

export default function Trabajos() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  });

  return (
    <div className="py-[14vh]">
      <Margin>
        <div
          data-aos="fade-down"
          className="flex flex-col items-center gap-5 px-5 pb-5 md:items-start md:p-0"
        >
          <h1 className="left-animation text-4xl font-bold md:text-5xl">
            T R A B A J O S
          </h1>
          <p className="max-w-6xl text-center text-xl md:text-start">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here, content
            here, making it look like readable English.
          </p>
        </div>

        <section className="px-5 md:border-none md:px-0 md:py-20">
          <div className="flex h-full w-full flex-col items-center justify-center py-5 md:flex-row md:justify-between">
            <Image
              src={img1}
              alt="Imagen de un Trabajo"
              className="image-custom-clip-path md:w-[50%]"
              data-aos="fade-right"
            />
            <div
              data-aos="fade-left"
              className="h-full py-5 text-center md:flex md:w-[50%] md:justify-center px-5 my-3 border-r-2 border-[#3476F1] md:px-10 md:py-[180px]"
            >
              <p className="font-[400] md:max-w-lg md:text-xl">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here, making it look like readable English.
              </p>
            </div>
          </div>
        </section>
      </Margin>
      <div className="bg-[#1F1F1F]">
        <Margin>
          <section className=" px-5 md:border-none md:px-0 md:py-20">
            <div className="flex h-full w-full flex-col items-center justify-center py-5 my-3 md:flex-row-reverse md:justify-between">
              <Image
                src={img1}
                alt="Imagen de un Trabajo"
                className="image-custom-clip-path md:w-[50%]"
                data-aos="fade-left"
              />
              <div
                data-aos="fade-right"
                className="h-full py-5 text-center md:flex md:w-[50%] md:justify-center border-l-2 border-[#3476F1] px-5 md:px-10 md:py-[180px]"
              >
                <p className="font-[400] md:max-w-lg md:text-xl text-white">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using Content
                  here, content here, making it look like readable English.
                </p>
              </div>
            </div>
          </section>
        </Margin>
      </div>
    </div>
  );
}
