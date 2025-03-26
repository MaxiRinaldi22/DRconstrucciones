import { DATA } from "./types";

// IMAGENES
import divisores from "/public/divisor.jpg";
import cielo from "/public/cielo.jpeg";
import revestimiento from "/public/revestimiento.jpeg";
import steel from "/public/steel.jpeg";

export const IMG_HOME_WORK = [
  {
    title: "Casas 100% en STEEL",
    img: steel,
  },
  {
    title: "Tabiques divisorios",
    img: divisores,
  },
  {
    title: "Cielo rasos",
    img: cielo,
  },
  {
    title: "Revestimiento",
    img: revestimiento,
  },
];

// OCEAN PARK IMAGENES
import ocean1 from "/public/ocean-park/ocean1.jpeg";
import ocean2 from "/public/ocean-park/ocean2.png";
import ocean3 from "/public/ocean-park/ocean3.png";
import ocean4 from "/public/ocean-park/ocean4.png";
import ocean5 from "/public/ocean-park/ocean5.png";
import ocean6 from "/public/ocean-park/ocean6.png";
import ocean7 from "/public/ocean-park/ocean7.png";
import ocean8 from "/public/ocean-park/ocean8.png";
import ocean9 from "/public/ocean-park/ocean9.png";
import ocean10 from "/public/ocean-park/ocean10.png";

export const OCEAN_PARK: CasaInfo[] = [
  {
    location: "Ocean Park",
    title: "Casa 100% en STEEL",
    description: [
      "Cubierta de steel con chapa ondulada",
      "Sistema eifs (alta eficiencia térmica",
      "Aberturas de pvc doble vidrio",
    ],
    images: [
      ocean1,
      ocean2,
      ocean3,
      ocean4,
      ocean5,
      ocean6,
      ocean7,
      ocean8,
      ocean9,
      ocean10,
    ],
  },
];

// LA SONRISA IMAGENES
import sonrisa1 from "/public/la-sonrisa/sonrisa1.jpeg";
import sonrisa2 from "/public/la-sonrisa/sonrisa2.jpeg";
import sonrisa3 from "/public/la-sonrisa/sonrisa3.jpeg";
import sonrisa4 from "/public/la-sonrisa/sonrisa4.jpeg";
import sonrisa5 from "/public/la-sonrisa/sonrisa5.jpeg";
import sonrisa6 from "/public/la-sonrisa/sonrisa6.jpeg";
import sonrisa7 from "/public/la-sonrisa/sonrisa7.jpeg";
import sonrisa8 from "/public/la-sonrisa/sonrisa8.jpeg";
import sonrisa9 from "/public/la-sonrisa/sonrisa9.jpeg";
import sonrisa10 from "/public/la-sonrisa/sonrisa10.jpeg";

export const LA_SONRISA: CasaInfo[] = [
  {
    location: "La Sonrisa",
    title: "Casa 100% en STEEL",
    description: [
      "Casa 100% en STEEL",
      "Cubierta de STEEL y chapa acanalada",
      "Sistema siding machiembrado  ",
      "Aberturas en pvc doble vidrio",
    ],
    images: [
      sonrisa1,
      sonrisa2,
      sonrisa3,
      sonrisa4,
      sonrisa5,
      sonrisa6,
      sonrisa7,
      sonrisa8,
      sonrisa9,
      sonrisa10,
    ],
  },
];

// CASA EN JARDINES DE COORDOBA
import constru0 from "/public/jardines/constru0.jpeg";
import constru1 from "/public/jardines/constru1.jpeg";
import constru2 from "/public/jardines/constru2.jpeg";
import constru3 from "/public/jardines/constru3.jpeg";
import constru4 from "/public/jardines/constru4.jpeg";
import constru5 from "/public/jardines/constru5.jpeg";
import constru6 from "/public/jardines/constru6.jpeg";
import constru7 from "/public/jardines/constru7.jpeg";
import constru8 from "/public/jardines/constru8.jpeg";
import constru9 from "/public/jardines/constru9.jpeg";
import constru10 from "/public/jardines/constru10.jpeg";

export const CASA_JARDINES: CasaInfo[] = [
  {
    location: "Jardines de cordoba",
    title: "Casa 100% en STEEL",
    description: [
      "Muros 100% steel",
      "Cubierta isopanel 15cm",
      "Sistema eifs con basecoat (alta eficiencia térmica)",
      "Aberturas pvc doble vidrio",
    ],
    images: [
      constru0,
      constru7,
      constru1,
      constru2,
      constru3,
      constru4,
      constru5,
      constru6,
      constru8,
      constru9,
      constru10,
    ],
  },
];

import punta1 from "/public/punta/punta1.jpeg";
import punta2 from "/public/punta/punta2.jpeg";

export const NUEVO_PROYECTO: CasaInfo[] = [
  {
    location: "Punta ballena",
    title: "Nuevo proyecto confirmado",
    description: ["Proximamente..."],
    images: [punta1, punta2],
  },
];

import otros1 from "/public/otros/otros1.jpeg";
import otros2 from "/public/otros/otros2.png";
import otros3 from "/public/otros/otros3.jpeg";
import otros4 from "/public/otros/otros4.jpeg";
import { CasaInfo } from "@/components/Casa";

export const OTROS_SERVICIOS: DATA[] = [
  {
    title: "Otros servicios",
    description: ["Cielo raso", "Tabiques divisorios", "Revestimiento"],
    images: [otros1, otros2, otros3, otros4, revestimiento],
  },
];
