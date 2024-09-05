"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

interface DriverProps {
  firstName: string;
  lastName: string;
  position: number;
  color: string;
  points: number;
  number: number;
  team: string;
}

export default function Formula1() {
  const [activeDriver, setActiveDriver] = useState<DriverProps | null>(null);
  const modalRef = useRef(null);

  useOnClickOutside(modalRef, () => setActiveDriver(null));

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveDriver(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="grid place-items-center h-dvh bg-neutral-100">
      <AnimatePresence>
        {activeDriver && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-10 bg-black/50 "
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {activeDriver ? (
          <>
            <div className="absolute inset-0 grid place-items-center z-10 overflow-hidden">
              <motion.div
                layoutId={`card-${activeDriver.firstName}`}
                ref={modalRef}
                style={{ borderRadius: 12 }}
                className="flex w-[404px] bg-[#0F0F0D] p-3 justify-between items-center"
              >
                <div className="flex gap-3 items-center">
                  <motion.div
                    layoutId={`color-${activeDriver.firstName}`}
                    className="w-1 h-20 shrink-0 rounded-full"
                    style={{ backgroundColor: activeDriver.color }}
                  />
                  <div className="flex flex-col text-2xl">
                    <motion.h4
                      layoutId={`firstName-${activeDriver.firstName}`}
                      className="text-white font-formula1"
                    >
                      {activeDriver.firstName}
                    </motion.h4>
                    <motion.h4
                      layoutId={`lastName-${activeDriver.lastName}`}
                      className="text-white font-formula1 uppercase font-bold"
                    >
                      {activeDriver.lastName}
                    </motion.h4>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-end"
                >
                  <div className="flex gap-2 items-center font-formula1 text-base p-1">
                    <p className="font-bold">{activeDriver.number}</p>
                    <div className="h-4 w-[2px] bg-[#808285]" />
                    <p>{activeDriver.team}</p>
                  </div>
                  <div className="flex p-1 gap-2 items-center">
                    <p className="text-white font-formula1 text-2xl">
                      {activeDriver.points}
                    </p>
                    <div className="flex h-[22px] items-center p-1 rounded-sm bg-[#808285] text-white font-formula1 font-medium text-sm">
                      Pts
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </>
        ) : null}
      </AnimatePresence>
      <ul className="flex flex-col gap-[2px]">
        {DRIVERS.map((driver) => (
          <motion.li
            layoutId={`card-${driver.firstName}`}
            key={driver.firstName}
            onClick={() => setActiveDriver(driver)}
            className="flex w-[280px] p-2 gap-1 items-center bg-[#0F0F0D] cursor-pointer"
            style={{ borderRadius: 8 }}
          >
            <p className="text-white/50 font-formula1 w-6 text-center">
              {driver.position}
            </p>
            <motion.div
              layoutId={`color-${driver.firstName}`}
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: driver.color }}
            />
            <div className="flex gap-[6px] ml-2">
              <motion.h4
                layoutId={`firstName-${driver.firstName}`}
                className="text-white font-formula1"
              >
                {driver.firstName}
              </motion.h4>
              <motion.h4
                layoutId={`lastName-${driver.lastName}`}
                className="text-white font-formula1 uppercase font-bold"
              >
                {driver.lastName}
              </motion.h4>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

const DRIVERS = [
  {
    firstName: "Lewis",
    lastName: "Hamilton",
    position: 1,
    color: "#00CFBA",
    points: 164,
    number: 44,
    team: "Mercedes",
  },
  {
    firstName: "Oscar",
    lastName: "Piastri",
    position: 2,
    color: "#FE8008",
    points: 197,
    number: 81,
    team: "McLaren",
  },
  {
    firstName: "Charles",
    lastName: "Leclerc",
    position: 3,
    color: "#C20000",
    points: 217,
    number: 16,
    team: "Ferrari",
  },
  {
    firstName: "Lando",
    lastName: "Norris",
    position: 4,
    color: "#FE8008",
    points: 241,
    number: 4,
    team: "McLaren",
  },
  {
    firstName: "Max",
    lastName: "Verstappen",
    position: 5,
    color: "#00007D",
    points: 303,
    number: 1,
    team: "RedBull",
  },
  {
    firstName: "George",
    lastName: "Russel",
    position: 6,
    color: "#00CFBA",
    points: 128,
    number: 63,
    team: "Mercedes",
  },
  {
    firstName: "Carlos",
    lastName: "Sainz",
    position: 7,
    color: "#C20000",
    points: 184,
    number: 55,
    team: "Ferrari",
  },
  {
    firstName: "Sergio",
    lastName: "Perez",
    position: 8,
    color: "#00007D",
    points: 143,
    number: 11,
    team: "RedBull",
  },
];
