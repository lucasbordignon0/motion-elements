"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Toolbar from "./Toolbar";
import React from "react";
import { FolderBack, FolderFront } from "./Folder";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";

const IMAGES = [
  "/imgs/stretch.jpg",
  "/imgs/golf.jpg",
  "/imgs/run.jpg",
  "/imgs/back.jpg",
];

export default function ProgramCreation() {
  const [programsToAdd, setProgramsToAdd] = useState<string[]>([]);
  const [readyToAdd, setReadyToAdd] = useState<boolean>(false);
  const [added, setAdded] = useState(false);

  const programsToShow = readyToAdd
    ? IMAGES.filter((img) => !programsToAdd.includes(img))
    : IMAGES;

  useEffect(() => {
    if (added) {
      setTimeout(() => {
        setProgramsToAdd([]);
        setReadyToAdd(false);
        setAdded(false);
      }, 1200);
    }
  }, [added]);

  return (
    <MotionConfig transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}>
      <div className="grid place-items-center min-h-dvh bg-black">
        <div className="relative flex h-[500px] min-w-[500px] flex-col items-center justify-center">
          <ul className="grid grid-cols-2 gap-5">
            <AnimatePresence>
              {!readyToAdd &&
                programsToShow.map((image) => {
                  const isSelected = programsToAdd.includes(image);

                  return (
                    <motion.li
                      key={image}
                      exit={
                        isSelected
                          ? {}
                          : {
                              opacity: 0,
                              filter: "blur(5px)",
                              transition: { duration: 0.17 },
                            }
                      }
                      className="relative flex h-[120px] w-[120px]"
                    >
                      <motion.div
                        exit={{ opacity: 0, transition: { duration: 0 } }}
                        className="pointer-events-none absolute right-2 top-2 flex size-5 items-center justify-center rounded-full border border-white/60"
                      >
                        {isSelected ? (
                          <div>
                            <div className="absolute -inset-0.5 rounded-full bg-black" />
                            <svg
                              className="relative flex-shrink-0 h-4 w-4 text-white"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20 6L9 17L4 12"
                                stroke="currentColor"
                                stroke-width="3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        ) : null}
                      </motion.div>
                      <button
                        aria-label="Remove book"
                        onClick={() => {
                          if (isSelected) {
                            setProgramsToAdd((images) =>
                              images.filter((img) => img !== image)
                            );
                          } else {
                            setProgramsToAdd((images) => [...images, image]);
                          }
                        }}
                      >
                        <motion.div layoutId={`image-${image}`}>
                          <Image
                            className="rounded-xl overflow-hidden border border-white/20 hover:border-white/50 transition-all ease-out duration-150"
                            src={image}
                            alt="Programs"
                            width={120}
                            height={120}
                          />
                        </motion.div>
                      </button>
                    </motion.li>
                  );
                })}
            </AnimatePresence>
          </ul>
          <AnimatePresence>
            {programsToAdd.length > 0 && !readyToAdd ? (
              <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                transition={{ type: "spring", duration: 0.3, bounce: 0 }}
                className="absolute bottom-0"
              >
                <Toolbar
                  onClickOne={() => setProgramsToAdd([])}
                  onClickTwo={() => {
                    if (readyToAdd) {
                      setAdded(true);
                    } else {
                      setReadyToAdd(true);
                    }
                  }}
                />
              </motion.div>
            ) : null}
          </AnimatePresence>
          {readyToAdd ? (
            <div className="absolute bottom-0">
              <button
                onClick={() => {
                  if (readyToAdd) {
                    setAdded(true);
                  } else {
                    setReadyToAdd(true);
                  }
                }}
                className="flex px-4 py-3 bottom-0 rounded-full bg-[#111111] text-white/50 font-poppins font-medium font-poppins shrink-0"
              >
                Combine {programsToAdd.length} program
                {programsToAdd.length > 1 ? "s" : ""}
              </button>
            </div>
          ) : null}
          <AnimatePresence>
            {readyToAdd ? (
              <div className="absolute top-1/2 left-1/2 z-10 -translate-y-1/2 -translate-x-1/2">
                <motion.div
                  initial={{ scale: 1.2, opacity: 0, filter: "blur(5px)" }}
                  animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                  exit={{
                    scale: 1.2,
                    opacity: 0,
                    filter: "blur(5px)",
                    transition: { duration: 0 },
                  }}
                >
                  <FolderBack />
                </motion.div>
                <motion.div
                  animate={{
                    y: added ? 140 : 73,
                    scale: added ? 0.3 : 1,
                    filter: added ? "blur(5px)" : "blur(0px)",
                  }}
                  transition={
                    added
                      ? { duration: 0.5, type: "spring", bounce: 0 }
                      : { delay: 0.25 }
                  }
                  className="absolute flex w-full top-[-80px] flex-col-reverse items-center"
                >
                  {programsToAdd.map((image, index) => (
                    <li key={image} className="flex h-1 items-center gap-2">
                      <motion.div layoutId={`image-${image}`}>
                        <Image
                          className="rounded h-20 w-20"
                          src={image}
                          alt="Programs"
                          width={64}
                          height={64}
                          style={{
                            rotate:
                              index % 2 === 0
                                ? `${4 * (programsToAdd.length - index + 1)}deg`
                                : `${
                                    -1 * (programsToAdd.length - index + 1) * 4
                                  }deg`,
                          }}
                        />
                      </motion.div>
                    </li>
                  ))}
                </motion.div>
                <motion.div
                  initial={{ scale: 1.2, opacity: 0, filter: "blur(5px)" }}
                  animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                  exit={{
                    scale: 1.2,
                    opacity: 0,
                    filter: "blur(5px)",
                    transition: { duration: 0 },
                  }}
                  transition={{ delay: 0.13, duration: 0 }}
                  className="absolute bottom-1 -left-[6px]"
                >
                  <FolderFront />
                </motion.div>
              </div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </MotionConfig>
  );
}
