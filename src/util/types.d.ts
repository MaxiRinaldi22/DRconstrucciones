import { StaticImageData } from "next/image";
import React from "react";

export type IconsType = {
  path: React.ReactNode;
  href: string;
};

export type DATA = {
  title: string;
  description: string[];
  images: StaticImageData[];
};

export type INFO_CASAS = {
  infoCasa: DATA;
};

export type IMAGES = {
  images: StaticImageData[];
};
