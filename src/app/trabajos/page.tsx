"use client";

import Margin from "@/components/Margin";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

// IMAGES
import draywall from "/public/en-construccion/constru9.jpeg";
import steelFraming from "/public/en-construccion/constru2.jpeg";
import {
  CASA_EN_CONSTRUCCION,
  LA_SONRISA,
  OCEAN_PARK,
  OTROS_SERVICIOS,
} from "@/util/const";
import { Casa } from "@/components/Casa";

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
            En cada proyecto de steel framing y drywall aplicamos técnicas de
            construcción en seco que optimizan tiempo y recursos sin comprometer
            la calidad. Trabajamos con precisión en cada estructura, priorizando
            durabilidad, aislamiento térmico y acústico, y acabados impecables,
            ideales para satisfacer tanto exigencias residenciales como
            comerciales e industriales.
          </p>
        </div>

        <section className="px-5 md:border-none md:px-0 md:py-20">
          <div className="flex h-full w-full flex-col items-center justify-center py-5 md:flex-row md:justify-between">
            <Image
              src={steelFraming}
              alt="Imagen de un Trabajo"
              className="image-custom-clip-path md:w-[50%]"
              data-aos="fade-right"
            />
            <div
              data-aos="fade-left"
              className="my-3 h-full border-r-2 border-[#438CAF] px-5 py-5 text-center md:flex md:w-[50%] md:justify-center md:px-10 md:py-[180px]"
            >
              <p className="font-[400] md:max-w-lg md:text-xl">
                El steel framing es una de las formas de construcción más
                eficientes y duraderas. Ofrece estructuras ligeras pero
                extremadamente resistentes, ideales para proyectos modernos.
                Además, permite una construcción rápida, con alta precisión,
                mejor aislamiento térmico y acústico, y un menor impacto
                ambiental, adaptándose a cualquier tipo de diseño
                arquitectónico.
              </p>
            </div>
          </div>
        </section>
      </Margin>
      <div className="bg-[#1F1F1F]">
        <Margin>
          <section className="px-5 md:border-none md:px-0 md:py-20">
            <div className="my-3 flex h-full w-full flex-col items-center justify-center py-5 md:flex-row-reverse md:justify-between">
              <Image
                src={draywall}
                alt="Imagen de un Trabajo"
                className="image-custom-clip-path md:w-[50%]"
                data-aos="fade-left"
              />
              <div
                data-aos="fade-right"
                className="h-full border-l-2 border-[#438CAF] px-5 py-5 text-center md:flex md:w-[50%] md:justify-center md:px-10 md:py-[180px]"
              >
                <p className="font-[400] text-white md:max-w-lg md:text-xl">
                  El drywall es una solución práctica y moderna para crear
                  espacios interiores de alta calidad. Su instalación rápida y
                  limpia permite lograr divisiones y acabados versátiles,
                  ideales para cualquier diseño. Además, ofrece excelentes
                  propiedades de aislamiento acústico y térmico, siendo perfecto
                  para transformar espacios de forma eficiente y profesional.
                </p>
              </div>
            </div>
          </section>
        </Margin>
      </div>

      <Margin>
        <h2
          data-aos="fade-right"
          className="flex flex-col items-start gap-5 px-5 text-4xl font-semibold text-[#1F1F1F] md:flex-row md:items-start md:gap-10 md:px-0 md:pt-10 md:text-5xl"
        >
          <span>T R A B A J O S</span>
          <span className="pl-4 md:pl-0">R E A L I Z A D O S</span>
        </h2>
        <div className="flex flex-col gap-12">

        <Casa infoCasa={OCEAN_PARK[0]} />
        <Casa infoCasa={LA_SONRISA[0]} />
        <Casa infoCasa={CASA_EN_CONSTRUCCION[0]} />
        <Casa infoCasa={OTROS_SERVICIOS[0]} />

        </div>
        <h3 className="flex flex-col items-center text-center gap-2 justify-center w-full mt-20 text-2xl font-semibold text-[#1F1F1F] 0">
          <span >Por cualquier consulta no dudes en contactarnos</span>
          <span className="font-[400]">(+598) 099 935 209</span>
        </h3>
      </Margin>
    </div>
  );
}
