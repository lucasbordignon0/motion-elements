"use client";

import { CheckIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";

export default function CopyButton() {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="w-full min-h-dvh grid place-items-center bg-white">
      <motion.div className="flex flex-col gap-3 items-center">
        <h6 className="text-sm text-[#B0AEAC] font-figtree">
          Your Referral Link
        </h6>
        <button
          onClick={handleClick}
          className="flex w-[256px] h-12 items-center justify-center rounded-xl bg-[#F9F5F1] border border-[#E7E3E0] border-dashed font-figtree"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {copied ? (
              <motion.span
                key="copied"
                transition={{
                  type: "spring",
                  duration: 0.5,
                  bounce: 0,
                }}
                initial={{ opacity: 0, y: -25, filter: "blur(2px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 25, filter: "blur(2px)" }}
                className={`flex w-full h-full items-center justify-center px-3 text-[#62DB80] font-medium`}
              >
                <Check className="w-5 h-5 mr-1 stroke-2" />
                <span>Link Copied!</span>
              </motion.span>
            ) : (
              <motion.span
                key="idle"
                transition={{
                  type: "spring",
                  duration: 0.5,
                  bounce: 0,
                }}
                initial={{ opacity: 0, y: -25, filter: "blur(2px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 25, filter: "blur(2px)" }}
                className="w-full px-3 truncate text-ellipsis text-[#191716]"
              >
                app.movesapp.com/li/QFMTNWY12BHJ41GY
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </motion.div>
    </div>
  );
}
