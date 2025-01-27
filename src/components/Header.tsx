// "use client";

// import { useEffect, useRef, useState } from "react";
// import { usePathname } from "next/navigation";
// import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import Link from "next/link";
// import Icons from "@/util/Icons";
// import { iconsConst } from "@/util/const";
// import Image from "next/image";
//
// import { gsap } from "gsap";

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//
//   const underlineRef = useRef(null);

//   const pathname = usePathname();

//   const isActive = (path: string) => {
//     return pathname === path;
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop =
//         window.pageYOffset || document.documentElement.scrollTop;
//       setIsScroll(scrollTop > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const animation = (position: number, width: number) => {
//       gsap.to(underlineRef.current, {
//         x: position,
//         width: `${width}%`,
//         duration: 1.2,
//         ease: "slow",
//         onComplete: () => {
//           gsap.set(underlineRef.current, { x: position });
//           gsap.to(underlineRef.current, { opacity: 1, duration: 0.5 });
//         },
//       });
//     };

//     if (pathname === "/") {
//       animation(-10, 50);
//     } else if (pathname === "/trabajos") {
//       animation(70, 60);
//     }
//   }, [pathname]);

//   return (
//     <header
//       className={
//         mobileMenuOpen
//           ? "z-999 absolute left-0 top-0"
//           : `fixed left-0 top-0 z-50 flex h-[8vh] w-full items-center justify-between py-10 text-white ${isScroll ? "bg-[#1F1F1F] shadow-md shadow-gray-950" : isActive("/trabajos") ? "bg-[#1F1F1F] shadow-md shadow-gray-950" : "bg-transparent"}`
//       }
//     >
//       <nav className="mx-auto flex w-full items-center justify-between px-6 lg:px-[80px]">
//         <div className="flex lg:flex-1">
//           <Link href="/">
//             <Image src={logo} alt="logo" width={115} height={115} />
//           </Link>
//         </div>

//         <div className="flex lg:hidden">
//           <button
//             type="button"
//             onClick={() => setMobileMenuOpen(true)}
//             className="text-light-brown -m-2.5 inline-flex items-center justify-center p-2.5"
//           >
//             <Bars3Icon aria-hidden="true" className="h-6 w-6" />
//           </button>
//         </div>

//         <PopoverGroup className="hidden lg:flex lg:flex-col">
//           <div className="flex gap-5">
//             <Link href="/">
//               <button className="text-xl font-[400]">Inicio</button>
//             </Link>
//             <Link href="/trabajos">
//               <button className="text-xl font-[400]">Trabajos</button>
//             </Link>
//           </div>
//           <div ref={underlineRef} className="h-0.5 bg-white" />
//         </PopoverGroup>

//         <div className="hidden gap-2 md:flex md:flex-1 md:justify-end">
//           {iconsConst.map((item, id) => (
//             <Link
//               href={item.href}
//               key={id}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Icons path={item.path} width={32} color="#ffffff" />
//             </Link>
//           ))}
//         </div>
//       </nav>
//       <Dialog
//         open={mobileMenuOpen}
//         onClose={setMobileMenuOpen}
//         className="lg:hidden"
//       >
//         <div className="fixed inset-0 z-10" />
//         <DialogPanel className="fixed inset-y-0 right-0 z-10 h-[220px] w-full bg-[#1F1F1F] sm:ring-1">
//           <div className="flex h-[8vh] items-center justify-between px-6 pt-6">
//             <a href="#">
//               <Image src={logo} alt="logo" width={115} height={115} />
//             </a>
//             <button
//               onClick={() => setMobileMenuOpen(false)}
//               className="text-white"
//             >
//               <XMarkIcon aria-hidden="true" className="h-6 w-6" />
//             </button>
//           </div>

//           <div className="flow-root py-1 pt-2 text-white">
//             <div
//               onClick={() => setMobileMenuOpen(false)}
//               className="flex h-full flex-col items-start gap-2 px-10 py-3 pb-1"
//             >
//               <Link href="/">
//                 <button
//                   className={`text-lg ${isActive("/") ? "border-b-2" : ""}`}
//                 >
//                   Inicio
//                 </button>
//               </Link>
//               <Link href="/trabajos">
//                 <button
//                   className={`text-lg ${isActive("/trabajos") ? "border-b-2" : ""}`}
//                 >
//                   Trabajos
//                 </button>
//               </Link>
//             </div>
//           </div>

//           <div className="flex h-[60px] w-full items-center justify-start gap-3 px-10 pb-2">
//             {iconsConst.map((item, id) => (
//               <Link
//                 href={item.href}
//                 key={id}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Icons path={item.path} width={23} color="#ffffff" />
//               </Link>
//             ))}
//           </div>
//         </DialogPanel>
//       </Dialog>
//     </header>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "/public/logoW.png";
import gsap from "gsap";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const underlineRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const animation = (position: number, width: number) => {
      gsap.to(underlineRef.current, {
        x: position,
        width: `${width}%`,
        duration: 1.2,
        ease: "slow",
        onComplete: () => {
          gsap.set(underlineRef.current, { x: position });
          gsap.to(underlineRef.current, { opacity: 1, duration: 0.5 });
        },
      });
    };

    if (pathname === "/") {
      animation(-10, 50);
    } else if (pathname === "/trabajos") {
      animation(70, 60);
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScroll(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex w-full items-center justify-between bg-[#1F1F1F] py-4 transition-colors duration-500 md:fixed md:left-0 md:top-0 md:z-50 xl:px-16 ${isScroll ? "md:bg-[#1F1F1F]" : isActive("/trabajos") ? "md:bg-[#1F1F1F]" : "md:bg-transparent"}`}
    >
      {/* Logo */}
      <div className="flex justify-start lg:w-0 lg:flex-1">
        <Link href="/" className="flex items-center">
          <Image src={logo} alt="logo" width={115} height={115} />
        </Link>
      </div>

      {/* Desktop navigation */}
      <nav className="hidden md:flex md:flex-col">
        <div className="flex items-center gap-5">
          <Link href="/" className="text-xl font-[400] text-white">
            Inicio
          </Link>
          <Link href="/trabajos" className="text-xl font-[400] text-white">
            Trabajos
          </Link>
        </div>

        <div ref={underlineRef} className="h-0.5 bg-white" />
      </nav>

      {/* WhatsApp icon */}
      <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
        <Link href="https://wa.me/your-whatsapp-number">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1faf38]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
              />
            </svg>
          </div>
        </Link>
      </div>

      <div>
        {/* Mobile menu button */}
        <div className="px-2 md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md bg-[#1f1f1f] p-2 text-white focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">
              {isMenuOpen ? "Close menu" : "Open menu"}
            </span>
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="fixed inset-0 z-50 overflow-hidden md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.75 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="absolute inset-0 bg-gray-500"
              onClick={toggleMenu}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 w-full max-w-xs overflow-y-auto bg-[#1f1f1f] shadow-xl"
            >
              <div className="flex items-center justify-end bg-transparent px-1.5 py-9 sm:px-6">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md bg-[#1f1f1f] p-2 text-white"
                  onClick={toggleMenu}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <div className="px-4 pb-6 pt-2 sm:px-6">
                <nav className="grid gap-y-8">
                  <Link
                    href="/"
                    className="-m-3 flex items-center rounded-md p-3"
                    onClick={toggleMenu}
                  >
                    <span className="ml-3 text-xl font-medium text-white">
                      Inicio
                    </span>
                  </Link>
                  <Link
                    href="/trabajos"
                    className="-m-3 flex items-center rounded-md p-3"
                    onClick={toggleMenu}
                  >
                    <span className="ml-3 text-xl font-medium text-white">
                      Trabajos
                    </span>
                  </Link>
                </nav>
              </div>

              <div className="mt-auto flex h-[65vh] items-end justify-center  px-4 sm:px-6">
                <div>
                  <Link
                    href="https://wa.me/your-whatsapp-number"
                    className="flex items-center justify-between gap-2 rounded-md border border-transparent bg-[#1faf38] px-4 py-2 text-base font-medium text-white shadow-sm"
                    onClick={toggleMenu}
                  >
                    Contactanos via Whatsapp
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fff"
                        d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
