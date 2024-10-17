import Image from "next/image";
import { motion } from "framer-motion";
export default function MovieHero() {
  return (
    <div className="relative flex flex-col items-center justify-end w-full min-h-dvh bg-black antialiased">
      <div className="flex flex-col w-[620px] gap-8 items-center mb-28 z-20">
        <div className="relative flex flex-col gap-3 items-center">
          <h1 className="font-light tracking-tighter leading-none text-[120px] bg-gradient-to-b from-[#FFC4BD] to-[#545E7A] bg-clip-text text-transparent">
            Fire of Love
          </h1>
          <h1 className="font-light tracking-tighter leading-none text-[120px] bg-gradient-to-b from-[#FFC4BD] to-[#545E7A] bg-clip-text text-transparent blur-xl absolute top-0 left-0">
            Fire of Love
          </h1>
          <p className="w-[320px] text-[#C9D2D7]/70 font-normal text-base text-center">
            A doomed love triangle between intrepid French scientists Katia and
            Maurice Krafft, and their beloved volcanoes.
          </p>
        </div>
        <div className="gradient-button cursor-pointer hover:bg-white/10 transition-colors ease-out duration-300 group">
          <button className="w-full h-full flex items-center justify-center text-[#C9D2D7]/70 text-base font-semibold group-hover:text-white transition-colors ease-out duration-300">
            Watch Trailer
          </button>
        </div>
      </div>
      <div
        className="absolute left-0 top-0 bottom-0 w-full backdrop-blur-[40px] z-10"
        style={{
          maskImage:
            "radial-gradient(circle, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 70%)",
          WebkitMaskImage:
            "radial-gradient(circle, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 70%)",
        }}
      />
      <div className="absolute inset-0">
        <Image
          src="/imgs/fire-of-love.jpg"
          alt="fire-of-love"
          width={3840}
          height={2160}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
