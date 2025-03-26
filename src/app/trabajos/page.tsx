"use client";

import Margin from "@/components/Margin";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

// IMAGES
import draywall from "/public/jardines/drywall.jpeg";
import steelFraming from "/public/jardines/constru2.jpeg";
import {
  CASA_JARDINES,
  LA_SONRISA,
  OCEAN_PARK,
  OTROS_SERVICIOS,
  NUEVO_PROYECTO,
} from "@/util/const";
import { Casa } from "@/components/Casa";

export default function Trabajos() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  });

  return (
    <div className="py-[11vh]">
      <Margin>
        <div
          data-aos="fade-right"
          className="flex flex-col items-start gap-5 px-5 py-14 text-start md:items-start md:p-0 md:pt-10"
        >
          <h1 className="text-4xl font-medium tracking-widest md:text-5xl">
            TRABAJOS
          </h1>
          <p className="md:text-xl max-w-5xl text-base font-normal  md:pb-0">
            En cada proyecto de steel framing y drywall aplicamos técnicas de
            construcción en seco que optimizan tiempo y recursos sin comprometer
            la calidad. Trabajamos con precisión en cada estructura, priorizando
            durabilidad, aislamiento térmico y acústico, y acabados impecables,
            ideales para satisfacer tanto exigencias residenciales como
            comerciales e industriales.
          </p>
        </div>

        <div className="bg-primary px-5 text-white md:border-none md:bg-white md:px-0 md:py-20 md:text-black">
          <div className="flex h-full w-full flex-col items-center justify-center py-5 md:flex-row md:justify-between">
            <Image
              src={steelFraming}
              alt="Imagen de un Trabajo"
              className="little-custom-clip-path md:image-custom-clip-path md:w-[50%]"
              data-aos="fade-right"
            />
            <div
              data-aos="fade-left"
              className="border-secondary my-3 h-full border-r-2 px-5 py-5 text-center md:flex md:w-[50%] md:justify-center md:px-10 md:py-[180px]"
            >
              <p className="text-end font-normal md:max-w-lg md:text-center md:text-xl">
                El STEEL FRAMING es una de las formas de construcción más
                eficientes y duraderas. Ofrece estructuras ligeras pero
                extremadamente resistentes, ideales para proyectos modernos.
                Además, permite una construcción rápida, con alta precisión,
                mejor aislamiento térmico y acústico, y un menor impacto
                ambiental, adaptándose a cualquier tipo de diseño
                arquitectónico.
              </p>
            </div>
          </div>
        </div>
      </Margin>

      <div className="md:bg-primary text-black md:text-white">
        <Margin>
          <section className="px-5 md:border-none md:px-0 md:py-20">
            <div className="my-3 flex h-full w-full flex-col items-center justify-center gap-3 py-5 md:flex-row-reverse md:justify-between md:gap-0">
              <Image
                src={draywall}
                alt="Imagen de un Trabajo"
                className="little-custom-clip-path md:image-custom-clip-path md:w-[50%]"
                data-aos="fade-left"
              />
              <div
                data-aos="fade-right"
                className="border-secondary h-full border-l-2 px-5 py-5 text-center md:flex md:w-[50%] md:justify-center md:px-10 md:py-[180px]"
              >
                <p className="text-start font-normal md:max-w-lg md:text-center md:text-xl">
                  El DRYWALL es una solución práctica y moderna para crear
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
          className="flex flex-col items-start gap-2 px-5 pb-5 text-4xl font-medium tracking-widest text-[#1F1F1F] md:flex-row md:items-start  md:gap-5 md:px-0 md:pb-0 md:pt-10 md:text-5xl"
        >
          <span>TRABAJOS</span>
          <span>REALIZADOS</span>
        </h2>
        <div className="flex flex-col gap-2 md:gap-3">
          <Casa infoCasa={OCEAN_PARK[0]} />
          <Casa infoCasa={LA_SONRISA[0]} />
          <Casa infoCasa={CASA_JARDINES[0]} />
          <Casa infoCasa={NUEVO_PROYECTO[0]} />
          <Casa infoCasa={OTROS_SERVICIOS[0]} />
        </div>
        <h3 className="0 mt-20 flex w-full flex-col items-center justify-center gap-2 text-center text-2xl font-semibold text-[#1F1F1F]">
          <span>Por cualquier consulta no dudes en contactarnos</span>
          <span className="font-[400]">(+598) 099 935 209</span>
        </h3>
      </Margin>
    </div>
  );
}
