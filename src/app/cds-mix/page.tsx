"use client";

import Cd from "./cd";
import { motion } from "framer-motion";

export default function CdsMix() {
  return (
    <div className="grid place-items-center h-dvh bg-neutral-100">
      <ul className="grid grid-cols-2 gap-5">
        {CDS.map((cd) => (
          <motion.li
            whileHover={{ scale: 1.1, rotate: 360 }}
            key={cd.firstLine}
          >
            <Cd firstLine={cd.firstLine} secondLine={cd.secondLine} />
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

const CDS = [
  {
    firstLine: "Chovenu",
    secondLine: "by BDN",
  },
  {
    firstLine: "U.Jams",
    secondLine: "by BDN",
  },
  {
    firstLine: "Linkin Park",
    secondLine: "by BDN",
  },
  {
    firstLine: "MPB",
    secondLine: "by BDN",
  },
];
