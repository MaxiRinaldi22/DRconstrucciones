"use client";

import Image from "next/image";
import Margin from "./Margin";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// IMAGENES
import logo from "/public/logoW.png";

export function QuienesSomos() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  });

  return (
    <div className="pb-10">
      <Margin>
        <section className="h-full border-l-4 border-[#438CAF] px-5 pt-20 md:border-l-2 md:p-0 md:px-0">
          <Margin>
            <div className="flex w-full flex-col items-center justify-center gap-5 md:h-[50vh] md:flex-row">
              <h2
                data-aos="fade-right"
                className="flex w-full flex-col items-center gap-5 text-4xl font-semibold text-white md:text-6xl"
              >
                <span>Q U I E N E S</span>
                <span>S O M O S</span>
              </h2>
              <p
                data-aos="fade-left"
                className="text-center text-white md:w-[90%] md:text-lg"
              >
                Somos un equipo de profesionales en construcción especializada
                en steel framing y drywall, enfocados en ofrecer soluciones
                modernas, eficientes y sostenibles. Con años de experiencia en
                el sector, transformamos ideas en estructuras sólidas y
                funcionales, adaptándonos a las necesidades de cada cliente. Nos
                comprometemos con la calidad en cada detalle, utilizando
                materiales de alta durabilidad y técnicas innovadoras que
                optimizan el tiempo de construcción sin sacrificar la
                resistencia ni el diseño. Nuestro objetivo es superar
                expectativas, brindando resultados que combinan estética y
                funcionalidad, ideal para proyectos residenciales, comerciales e
                industriales. Con nosotros, tu proyecto está en buenas manos.
              </p>
            </div>
            <div
              data-aos="fade-up"
              className="flex w-full items-center justify-center pt-10 md:h-[50vh] md:pb-20"
            >
              <Image
                src={logo}
                alt="..."
                width={400}
                height={400}
                className="w-[400px] md:w-[450px]"
              />
            </div>
          </Margin>
        </section>
      </Margin>
    </div>
  );
}
