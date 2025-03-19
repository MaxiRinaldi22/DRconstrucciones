import Link from "next/link";

export function VerMasBtn({ hide }: { hide: boolean }) {
  return (
    <button
      data-aos="fade-right"
      className={`transform text-2xl md:justify-start md:text-xl ${hide ? "hidden" : "block"}`}
    >
      <Link
        href="/trabajos"
        className="flex items-center gap-2 transition-transform duration-300 will-change-transform hover:scale-105"
      >
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
      </Link>
    </button>
  );
}
