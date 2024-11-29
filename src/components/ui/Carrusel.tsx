"use client";

import { IMAGES } from "@/util/types";
import { Carousel, CustomFlowbiteTheme } from "flowbite-react";
import Image from "next/image";

export function CarruselComponent({ images }: IMAGES) {
  const CustomTheme: CustomFlowbiteTheme["carousel"] = {
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
      snap: "snap-x",
    },
  };

  return (
    <div className="block h-56 sm:h-64 md:hidden xl:h-96 2xl:h-96">
      <Carousel theme={CustomTheme}>
        {images.map((img, i) => (
          <Image
            key={i}
            src={img}
            alt="Foto de una casa construida en steel por DR construcciones en seco"
            className="h-[225px] w-full "
            height={225}
          />
        ))}
      </Carousel>
    </div>
  );
}
