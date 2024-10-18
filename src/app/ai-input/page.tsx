import { MicrophoneIcon } from "@heroicons/react/24/solid";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function AIInput() {
  return (
    <div className="grid w-full h-dvh place-items-center">
      <div className="inline-flex p-2 gap-2 w-[520px] h-16 rounded-full bg-[#1D1D1D]/80 border border-white/10 backdrop-blur-2xl">
        <button className="flex items-center justify-center w-12 h-12 rounded-full bg-[linear-gradient(135deg,_#F7CD63,_#C83E80,_#7E31FB)] shrink-0 hover:shadow-xl hover:shadow-[#7E31FB]/20 transition-all duration-300">
          <SparklesIcon className="w-6 h-6" />
        </button>
        <input
          type="text"
          placeholder="Ask anything..."
          className="w-full h-full rounded-full px-4 bg-black text-white placeholder:text-white/40 border border-white/10 focus:border-white/40 outline-none"
        />
        <button className="flex items-center justify-center w-12 h-12 rounded-full shrink-0 bg-white/10 border border-white/10 hover:bg-white/20 transition-colors">
          <MicrophoneIcon className="w-6 h-6 text-white" />
        </button>
      </div>
      <div className="absolute inset-0 -z-10">
        <Image
          src="/imgs/flame.jpg"
          alt="flame"
          width={3840}
          height={2160}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
