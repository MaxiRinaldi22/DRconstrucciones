"use client";

import Margin from "@/components/Margin";
import animation from "@/util/animation";
import { useEffect } from "react";

export default function Trabajos() {
  useEffect(() => {
    animation();
  }, []);

  return (
    <div className="py-[12vh]">
      <Margin>
        <h1 className="left-animation text-4xl font-bold">T R A B A J O S</h1>
      </Margin>
    </div>
  );
}
