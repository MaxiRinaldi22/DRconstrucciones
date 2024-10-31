import Image from "next/image";
import Margin from "./Margin";
import img2 from "/public/foto2.jpg";

export function QuienesSomos() {
  return (
    <div className="pb-10">
      <Margin>
        <section className="h-full border-l-4 md:border-l-2 border-[#3476F1] px-5 pb-5 pt-20 md:p-0">
          <Margin>
            <div className="flex h-[50vh] w-full flex-col items-center justify-center gap-5 md:flex-row">
              <h2 className="left-animation flex w-full flex-col items-center gap-5 text-4xl font-semibold text-white md:text-6xl">
                <span>Q U I E N E S</span>
                <span>S O M O S</span>
              </h2>
              <p className="right-animation w-[90%] text-center text-white md:text-lg">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here, making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for lorem ipsum
                will uncover many web sites still in their infancy. Various
                versions have evolved over the years, sometimes by accident,
                sometimes on purpose (injected humour and the like).
              </p>
            </div>
            <div className="flex md:h-[50vh] w-full items-center justify-center pt-20 md:pb-20">
              <Image
                src={img2}
                alt="..."
                width={897}
                height={547}
                className="image-custom-clip-path bottom-animation w-[750px] rounded-md"
              />
            </div>
          </Margin>
        </section>
      </Margin>
    </div>
  );
}
