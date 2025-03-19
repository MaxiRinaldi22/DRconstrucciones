import Margin from "./Margin";
import { Phone } from "lucide-react";
export default function Footer() {
  return (
    <footer className="bg-primary h-full text-base w-full text-white md:h-fit">
      <Margin>
        <div className="flex w-full flex-col-reverse justify-center items-center md:flex-row md:justify-between pt-5 pb-2 md:py-1">
          <div className="flex h-full items-center justify-center py-3 text-center  text-[#a6a6a6]">
             © {new Date().getFullYear()} DR construcciones en steel | Todos
            los derechos reservados.
          </div>
          <div className="h-0.5 md:h-0 w-full bg-gradient-to-r from-transparent via-[#438CAF] to-transparent"></div>
          <div className="flex items-center gap-3 text-[#a6a6a6]">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5" />
              <p className="text-lg font-[400]">(+598) 099 935 209</p>
            </div>
          </div>
        </div>
      </Margin>
    </footer>
  );
}
