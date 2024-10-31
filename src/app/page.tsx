"use client";

import Hero from "@/components/Hero";
import { QuienesSomos } from "@/components/QuienesSomos";
import { TrabajosMain } from "@/components/TrabajosMain";
import animation from "@/util/animation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    animation();
  }, []);

  return (
    <div className="bg-[#1F1F1F]">
      <Hero />
      <QuienesSomos />
      <TrabajosMain />
    </div>
  );
}
