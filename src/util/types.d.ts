import { StaticImageData } from "next/image";

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
