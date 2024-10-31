"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Icons from "@/util/Icons";
import { iconsConst } from "@/util/const";
import Image from "next/image";

import logo from "/public/logoW.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

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

  const PAGE_ENDPOINTS = [
    {
      href: "/",
      name: "Inicio",
    },

    {
      href: "/trabajos",
      name: "Trabajos",
    },
  ];

  return (
    <header
      className={
        mobileMenuOpen
          ? "z-999 absolute left-0 top-0"
          : `fixed left-0 top-0 z-50 flex h-[8vh] w-full items-center justify-between py-10 text-white transition-all duration-1000 ease-in-out ${isScroll ? "bg-[#1F1F1F] shadow-md shadow-gray-950" : isActive("/trabajos") ? "bg-[#1F1F1F] shadow-md shadow-gray-950" : "bg-transparent"}`
      }
    >
      <nav className="mx-auto flex w-full items-center justify-between p-6 lg:px-[80px]">
        <div className="flex lg:flex-1">
          <a href="#">
            <Image src={logo} alt="logo" width={60} height={60} />
          </a>
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

        <PopoverGroup className="hidden lg:flex lg:gap-x-6">
          {PAGE_ENDPOINTS.map((item, id) => (
            <Link
              href={item.href}
              key={id}
              className={`text-xl font-[400] text-white ${isActive(item.href) ? "border-b-2" : ""}`}
            >
              {item.name}
            </Link>
          ))}
        </PopoverGroup>

        <div className="hidden gap-2 md:flex md:flex-1 md:justify-end">
          {iconsConst.map((item, id) => (
            <Link
              href={item.href}
              key={id}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons path={item.path} width={32}/>
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
        <DialogPanel className="bg-primary-color fixed inset-y-0 right-0 z-10 h-[325px] w-full overflow-y-auto sm:ring-1">
          <div className="t flex h-[8vh] items-center justify-between p-6">
            <a href="#">
              <h1>Logo</h1>
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white"
            >
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="flow-root text-white">
            <div
              onClick={() => setMobileMenuOpen(false)}
              className="flex h-full flex-col justify-center gap-1 p-4"
            >
              <Link href="/">
                <button>Inicio</button>
              </Link>
              <Link href="/trabajos">
                <button>Trabajos</button>
              </Link>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
