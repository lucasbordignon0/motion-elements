import Image from "next/image";

interface CdProps {
  firstLine: string;
  secondLine: string;
}

export default function Cd({ firstLine, secondLine }: CdProps) {
  return (
    <div className="size-[200px] relative">
      <p className="absolute left-10 top-6 -rotate-[15deg] text-2xl text-black font-caveat">
        {firstLine}
      </p>
      <p className="absolute right-10 bottom-6 -rotate-[15deg] text-2xl text-black font-caveat">
        {secondLine}
      </p>
      <Image src="/imgs/cd.png" alt="Cds" width={200} height={200} />
    </div>
  );
}
