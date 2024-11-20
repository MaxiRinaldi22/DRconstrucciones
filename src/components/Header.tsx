"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Icons from "@/util/Icons";
import { iconsConst } from "@/util/const";
import Image from "next/image";
import logo from "/public/logoW.png";
import { gsap } from "gsap";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const underlineRef = useRef(null);

  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

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

  return (
    <header
      className={
        mobileMenuOpen
          ? "z-999 absolute left-0 top-0"
          : `fixed left-0 top-0 z-50 flex h-[8vh] w-full items-center justify-between py-10 text-white ${isScroll ? "bg-[#1F1F1F] shadow-md shadow-gray-950" : isActive("/trabajos") ? "bg-[#1F1F1F] shadow-md shadow-gray-950" : "bg-transparent"}`
      }
    >
      <nav className="mx-auto flex w-full items-center justify-between px-6 lg:px-[80px]">
        <div className="flex lg:flex-1">
      <Link href="/">
            <Image src={logo} alt="logo" width={115} height={115} />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="text-light-brown -m-2.5 inline-flex items-center justify-center p-2.5"
          >
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:flex-col">
          <div className="flex gap-5">
            <Link href="/">
              <button className="text-xl font-[400]">Inicio</button>
            </Link>
            <Link href="/trabajos">
              <button className="text-xl font-[400]">Trabajos</button>
            </Link>
          </div>
          <div ref={underlineRef} className="h-0.5 bg-white" />
        </PopoverGroup>

        <div className="hidden gap-2 md:flex md:flex-1 md:justify-end">
          {iconsConst.map((item, id) => (
            <Link
              href={item.href}
              key={id}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons path={item.path} width={32} color="#ffffff" />
            </Link>
          ))}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 h-[220px] w-full overflow-y-auto bg-[#1F1F1F] sm:ring-1">
          <div className="flex h-[8vh] items-center justify-between px-6 pt-3">
            <a href="#">
              <Image src={logo} alt="logo" width={115} height={115} />
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white"
            >
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="flow-root py-1 pt-2 text-white">
            <div
              onClick={() => setMobileMenuOpen(false)}
              className="flex h-full flex-col items-start gap-2 pb-1 py-2 px-10"
            >
              <Link href="/">
                <button
                  className={`text-lg ${isActive("/") ? "border-b-2" : ""}`}
                >
                  Inicio
                </button>
              </Link>
              <Link href="/trabajos">
                <button
                  className={`text-lg ${isActive("/trabajos") ? "border-b-2" : ""}`}
                >
                  Trabajos
                </button>
              </Link>
            </div>
          </div>

          <div className="flex h-[60px] w-full items-center justify-start gap-3 px-10 pb-2">
            {iconsConst.map((item, id) => (
              <Link
                href={item.href}
                key={id}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons path={item.path} width={23} color="#ffffff" />
              </Link>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
