"use client";

import DriverStates from "./DriverStates";
import { useState } from "react";

export default function F1DriverStates() {
  const [currentState, setCurrentState] = useState<
    "Rest" | "Pit" | "FastestLap" | "Interval" | "Winner"
  >("Rest");

  return (
    <>
      <div className="grid place-items-center w-full min-h-dvh bg-white antialiased">
        <DriverStates state={currentState} />
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[80px] flex gap-2 font-formula1 text-xs text-black mobile:flex-col shrink-0">
        <button
          onClick={() => setCurrentState("Rest")}
          className="border border-black/20 rounded-full px-4 h-8 items-center justify-center shrink-0 hover:bg-black/5"
        >
          Rest
        </button>
        <button
          onClick={() => setCurrentState("Pit")}
          className="border border-black/20 rounded-full px-4 h-8 items-center justify-center shrink-0 hover:bg-black/5"
        >
          Pit
        </button>
        <button
          onClick={() => setCurrentState("FastestLap")}
          className="border border-black/20 rounded-full px-4 h-8 items-center justify-center shrink-0 hover:bg-black/5"
        >
          Fastest Lap
        </button>
        <button
          onClick={() => setCurrentState("Interval")}
          className="border border-black/20 rounded-full px-4 h-8 items-center justify-center shrink-0 hover:bg-black/5"
        >
          Interval
        </button>
        <button
          onClick={() => setCurrentState("Winner")}
          className="border border-black/20 rounded-full px-4 h-8 items-center justify-center shrink-0 hover:bg-black/5"
        >
          Winner
        </button>
      </div>
    </>
  );
}
