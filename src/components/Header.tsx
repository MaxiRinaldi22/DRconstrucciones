"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "/public/logoW.png";
import gsap from "gsap";
import { useIsMobile } from "@/hooks/useIsMobile";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const underlineRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isMobile = useIsMobile();

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
      className={`absolute left-0 top-0 z-50 flex w-full items-center justify-between p-2 transition-colors duration-500 md:fixed md:py-0.5 xl:px-16 ${isScroll && !isMobile ? "bg-primary md:border-secondary md:border-b" : isActive("/trabajos") ? "bg-primary" : "md:bg-transparent"}`}
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
        <Link href="https://wa.me/598099935209" target="_blank">
          <div className="flex h-10 w-10 items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
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
            className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-white focus:outline-none"
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
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 overflow-hidden md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.75 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-gray-500"
              onClick={toggleMenu}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-primary fixed inset-y-0 right-0 w-full max-w-xs overflow-y-auto shadow-xl"
            >
              <div className="flex items-center justify-end bg-transparent px-4 pt-7">
                <button
                  type="button"
                  className="bg-primary inline-flex items-center justify-center rounded-md p-2 text-white"
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
                    <span
                      className={`ml-3 px-1 text-2xl font-normal text-white ${isActive("/") ? "border-secondary border-b-2 pb-1" : ""}`}
                    >
                      Inicio
                    </span>
                  </Link>
                  <Link
                    href="/trabajos"
                    className="-m-3 flex items-center rounded-md p-3"
                    onClick={toggleMenu}
                  >
                    <span
                      className={`ml-3 px-1 text-2xl font-normal text-white ${isActive("/trabajos") ? "border-secondary border-b-2 pb-1" : ""}`}
                    >
                      Trabajos
                    </span>
                  </Link>
                </nav>
              </div>

              <div className="mt-auto flex h-[65vh] items-end justify-center px-4 sm:px-6">
                <div>
                  <Link
                    href="https://wa.me/598099935209"
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
