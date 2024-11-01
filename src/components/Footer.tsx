import Image from "next/image";
import Margin from "./Margin";
import logo from "/public/logoTextoW.png";
import { iconsConst } from "@/util/const";
import Icons from "@/util/Icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-full w-full bg-[#1F1F1F] md:h-[16vh]">
      <Margin>
        <div className="flex w-full flex-col items-center justify-between gap-3 py-5 md:flex-row md:gap-0 md:py-0">
          <div className="flex w-full items-center justify-center">
            <Image
              src={logo}
              width={120}
              height={120}
              alt="Logo de DR construcciones en steel"
            />
          </div>
          <hr className="md:md:h-[80px] md:border md:border-[#3476F1]" />
          <div className="flex w-full flex-col items-center justify-center gap-2 text-xl text-white">
            <div className="flex gap-3">
              <Icons
                path={
                  <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                }
                width={25}
              />
              <p>Pruebas@gmail.com</p>
            </div>
            <div className="flex gap-3">
              <Icons
                path={
                  <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
                }
                width={25}
              />
              <p>(+598) 000 000 000</p>
            </div>
          </div>
          <hr className="md:h-[80px] md:border md:border-[#3476F1]" />

          <div className="flex w-full items-center justify-center gap-3">
            {iconsConst.map((icon) => (
              <Link href={icon.href} key={icon.href}>
                <Icons path={icon.path} width={40} />
              </Link>
            ))}
          </div>
        </div>
        <hr className="border border-[#3476F1] p"/>
        <div className="flex h-full w-full items-center justify-center text-[#474747] md:justify-start">
           © Copyright DR construcciones en steel 2024
        </div>
      </Margin>
    </footer>
  );
}
