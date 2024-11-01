

import Margin from "./Margin";

import Link from "next/link";

export function TrabajosMain() {

  return (
    <section className="bg-white py-10">
      <Margin>
        <div className="flex flex-col md:items-start items-center gap-2">
          <h2 className=" flex flex-col items-center gap-5 text-4xl font-semibold text-[#1F1F1F] md:flex-row md:items-start md:gap-10 md:text-5xl">
            <span>N U E S T R O S</span>
            <span>T R A B A J O S</span>
          </h2>
          <Link href="/trabajos">
            <button className=" flex items-center justify-center gap-5 text-xl md:justify-start">
              <span>VER MAS</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={25}
                  height={25}
                  fill="currentColor"
                >
                  <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                </svg>
              </span>
            </button>
          </Link>
        </div>
        <div className="h-[200vh]"></div>
      </Margin>
    </section>
  );
}
