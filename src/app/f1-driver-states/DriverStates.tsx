import React from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import Image from "next/image";
import { ShapeLeft, ShapeRight } from "./BackgroundShapes";

const DriverStates: React.FC<{
  state: "Rest" | "Pit" | "FastestLap" | "Interval" | "Winner";
}> = ({ state }) => {
  return (
    <>
      <MotionConfig transition={{ type: "spring", duration: 0.7, bounce: 0 }}>
        <AnimatePresence mode="popLayout">
          {state === "Rest" && (
            <motion.div
              key={state}
              layoutId="wrapper"
              className="flex h-8 p-2 gap-1 items-center"
              style={{ borderRadius: 8, backgroundColor: "#0F0F0D" }}
            >
              <motion.p
                layout
                layoutId="position"
                className="text-white/50 font-formula1 w-6 text-center"
              >
                1
              </motion.p>
              <motion.div
                layout
                layoutId="dot"
                className="h-3 w-3 rounded-full bg-[#C20000]"
              />
              <motion.div
                key="name"
                layout
                layoutId="nameWraper"
                className="flex gap-[6px] ml-2 mr-2"
              >
                <motion.h4
                  exit={{ opacity: 0, transition: { duration: 0 } }}
                  layoutId="name"
                  layout
                  className="text-white font-formula1"
                >
                  Charles
                </motion.h4>
                <motion.h4
                  layout
                  layoutId="surname"
                  className="text-white font-formula1 uppercase font-bold"
                >
                  Leclerc
                </motion.h4>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="popLayout">
          {state === "Pit" && (
            <motion.div
              key={state}
              layoutId="wrapper"
              className="relative flex w-[280px] h-8 pl-2 pr-1 py-1 gap-1 items-center "
              style={{ borderRadius: 8, backgroundColor: "#0F0F0D" }}
            >
              <motion.p
                layout
                layoutId="position"
                className="text-white/50 font-formula1 w-6 text-center"
              >
                1
              </motion.p>
              <motion.div
                layout
                layoutId="dot"
                className="h-3 w-3 rounded-full bg-[#C20000]"
              />
              <motion.div
                layout
                layoutId="nameWraper"
                className="flex gap-[6px] ml-2 mr-2"
              >
                <motion.h4
                  layout
                  layoutId="surname"
                  className="text-white font-formula1 uppercase font-bold"
                >
                  Leclerc
                </motion.h4>
              </motion.div>
              <motion.div
                key="pit-info"
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  filter: "blur(5px)",
                }}
                animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
                exit={{
                  opacity: 0,
                  scale: 0.9,

                  filter: "blur(5px)",
                }}
                className="absolute right-1 top-1 bottom-1 flex items-center px-2 gap-2 bg-[#e93818] rounded-[4px]"
              >
                <motion.p className="text-white font-formula1 text-sm font-bold uppercase">
                  Pit
                </motion.p>
                <motion.p className="text-white font-formula1 text-sm">
                  1.3
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="popLayout">
          {state === "FastestLap" && (
            <motion.div
              key={state}
              layoutId="wrapper"
              className="relative flex w-[330px] h-8 pl-2 pr-1 py-1 gap-1 items-center "
              style={{ borderRadius: 8, backgroundColor: "#0F0F0D" }}
            >
              <motion.p
                layout
                layoutId="position"
                className="text-white/50 font-formula1 w-6 text-center"
              >
                1
              </motion.p>
              <motion.div
                layout
                layoutId="dot"
                className="h-3 w-3 rounded-full bg-[#C20000]"
              />
              <motion.div
                layout
                layoutId="nameWraper"
                className="flex gap-[6px] ml-2 mr-2"
              >
                <motion.h4
                  layout
                  layoutId="surname"
                  className="text-white font-formula1 uppercase font-bold"
                >
                  Leclerc
                </motion.h4>
              </motion.div>
              <motion.div
                key="lap-time"
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  filter: "blur(5px)",
                }}
                animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  filter: "blur(5px)",
                }}
                className="absolute right-1 top-1 bottom-1 flex items-center gap-2"
              >
                <motion.p className="text-white text-sm font-formula1 ">
                  1:30.433
                </motion.p>
                <motion.div className="h-6 w-6 bg-[#DB42FF] flex rounded items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.66667 1.33337H9.33334M8 9.33337L10 7.33337M13.3333 9.33337C13.3333 12.2789 10.9455 14.6667 8 14.6667C5.05449 14.6667 2.66667 12.2789 2.66667 9.33337C2.66667 6.38785 5.05449 4.00004 8 4.00004C10.9455 4.00004 13.3333 6.38785 13.3333 9.33337Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="popLayout">
          {state === "Interval" && (
            <motion.div
              key={state}
              layoutId="wrapper"
              className="relative flex w-[280px] h-8 pl-2 pr-1 py-1 gap-1 items-center "
              style={{ borderRadius: 8, backgroundColor: "#0F0F0D" }}
            >
              <motion.p
                layout
                layoutId="position"
                className="text-white/50 font-formula1 w-6 text-center"
              >
                1
              </motion.p>
              <motion.div
                layout
                layoutId="dot"
                className="h-3 w-3 rounded-full bg-[#C20000]"
              />
              <motion.div
                layout
                layoutId="nameWraper"
                className="flex gap-[6px] ml-2 mr-2"
              >
                <motion.h4
                  layout
                  layoutId="surname"
                  className="text-white font-formula1 uppercase font-bold"
                >
                  Leclerc
                </motion.h4>
              </motion.div>
              <motion.div
                key="interval-time"
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  filter: "blur(5px)",
                }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  filter: "blur(5px)",
                }}
                className="absolute right-2 top-1 bottom-1 flex items-center gap-2"
              >
                <motion.p className="text-white text-sm font-formula1">
                  +3.165
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence mode="popLayout" initial={false}>
          {state === "Winner" && (
            <motion.div
              key={state}
              layoutId="wrapper"
              className="relative flex w-[240px] h-[240px] pl-2 pr-1 py-1 gap-1 items-center overflow-hidden"
              style={{ borderRadius: 16, backgroundColor: "#C20000" }}
            >
              <motion.h1
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.4, transition: { duration: 0.2 } }}
                transition={{
                  type: "spring",
                  duration: 0.5,
                  bounce: 0.2,
                  delay: 0.2,
                }}
                className="absolute bottom-4 inset-x-4 text-white font-formula1 font-bold tracking-tighter text-center uppercase text-[40px] z-20"
              >
                winner
              </motion.h1>
              <motion.div
                key="photo"
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.4 }}
                className="absolute inset-0 z-10"
              >
                <Image
                  src="/imgs/leclerc.png"
                  alt="leclerc photo"
                  width={240}
                  height={240}
                />
              </motion.div>
              <motion.div
                key="winner-shapes"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute left-1/2 top-1/2 rotate-45 -translate-x-1/2 -translate-y-1/2 flex z-0 mix-blend-overlay"
              >
                <ShapeLeft />
                <ShapeRight />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </MotionConfig>
    </>
  );
};

export default DriverStates;
