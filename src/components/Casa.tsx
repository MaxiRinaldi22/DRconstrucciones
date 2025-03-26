"use client";

import { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { StaticImageData } from "next/image";

// Define proper TypeScript interface
export interface CasaInfo {
  title: string;
  description: string[];
  images: StaticImageData[];
  location?: string;
}

interface CasaProps {
  infoCasa: CasaInfo;
  className?: string;
}

export function Casa({ infoCasa, className }: CasaProps) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className={cn("w-full space-y-8 py-4 md:py-8", className)}>
      <div data-aos="fade-up" className="flex flex-col gap-3 px-5 md:px-0">
        {infoCasa.location && (
          <Badge
            variant="outline"
            className="border-secondary w-fit border-2 text-sm text-[#1f1f1f]"
          >
            {infoCasa.location}
          </Badge>
        )}

        <h2 className="text-2xl font-normal tracking-tight md:text-4xl">
          {infoCasa.title}
        </h2>

        <ul className="space-y-4">
          {infoCasa.description.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="bg-secondary h-2.5 w-2.5 flex-shrink-0 rounded-full" />
              <p className="text-base text-[#4a4a4a] md:text-lg">{item}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Carousel */}
      <div data-aos="fade-up" data-aos-delay="200" className="px-5 md:hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {infoCasa.images.map((img, i) => (
              <CarouselItem key={i}>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`${infoCasa.title} - Image ${i + 1}`}
                    width={800}
                    height={500}
                    className="h-[300px] w-full object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>

      {/* Desktop Grid Gallery */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="hidden grid-cols-2 gap-4 md:grid lg:grid-cols-3 lg:gap-6"
      >
        {infoCasa.images.map((img, i) => (
          <div key={i} className="group overflow-hidden">
            <Image
              src={img || "/placeholder.svg"}
              alt={`${infoCasa.title} - Image ${i + 1}`}
              width={800}
              height={600}
              className="little-custom-clip-path h-[350px] w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
