import { INFO_CASAS } from "@/util/types";
import { CarruselComponent } from "./ui/Carrusel";
import Image from "next/image";
import { useEffect } from "react";
import Aos from "aos";

export function Casa({ infoCasa }: INFO_CASAS) {

  useEffect(() => {
    Aos.init({
      duration: 1200
    })
  }, [])

  return (
    <section className="flex w-full flex-col gap-3">
      <div data-aos="fade-right" className="flex flex-col gap-5 px-5 md:px-0">
        <h3 className="mt-8 text-2xl font-[500] tracking-wider md:text-4xl">
          {infoCasa.title}
        </h3>
        <ul className="flex w-full flex-col items-start justify-start gap-3">
          {infoCasa.description.map((item, index) => (
            <li key={index} className="flex w-full items-center gap-2">
              <div className="relative flex items-center">
                <div
                  className="mt-[0.125rem] h-2 flex items-center w-2 rounded-full bg-[#438CAF]"
                  style={{
                    alignSelf: "center",
                  }}
                ></div>
              </div>
              <p className="md:text-xl">{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="block md:hidden">
        <CarruselComponent images={infoCasa.images} />
      </div>

      <div className="mt-10 hidden grid-cols-3 gap-6 md:grid">
        {infoCasa.images.slice(0, 9).map((img, i) => (
          <Image
            src={img}
            alt={infoCasa.title}
            key={i}
            height={400}
            className="h-[400px] w-full object-cover little-custom-clip-path"
          />
        ))}
      </div>
    </section>
  );
}
