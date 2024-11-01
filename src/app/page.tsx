

import Hero from "@/components/Hero";
import { QuienesSomos } from "@/components/QuienesSomos";
import { TrabajosMain } from "@/components/TrabajosMain";


export default function Home() {

 
  return (
    <div className="bg-[#1F1F1F]">
      <Hero />
      <QuienesSomos />
      <TrabajosMain />
    </div>
  );
}
