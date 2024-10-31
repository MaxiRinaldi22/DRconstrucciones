import ScrollReveal from "scrollreveal";

export default function animation() {
  ScrollReveal().reveal(".left-animation", {
    origin: "left",
    distance: "150%",
    duration: 1000,
    delay: 80,
    
  });

  ScrollReveal().reveal(".right-animation", {
    origin: "right",
    distance: "80%",
    duration: 1000,
    delay: 80,
    
  });
  ScrollReveal().reveal(".top-animation", {
    origin: "top",
    distance: "150%",
    duration: 1000,
    delay: 80,
    
  });

  ScrollReveal().reveal(".bottom-animation", {
    origin: "bottom",
    distance: "150%",
    duration: 1000,
    delay: 80,
    
  });
}
