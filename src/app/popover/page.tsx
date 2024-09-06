"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { BarsRotateFade } from "react-svg-spinners";
import { useOnClickOutside } from "usehooks-ts";
import { HalfCircleLeft, HalfCircleRight } from "./half-circle";

export default function Popover() {
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpen(false));

  function submit() {
    setFormState("loading");
    setTimeout(() => {
      setFormState("success");
    }, 1500);

    setTimeout(() => {
      setOpen(false);
    }, 3300);
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }

      if (
        (event.ctrlKey || event.metaKey) &&
        event.key === "Enter" &&
        open &&
        formState === "idle"
      ) {
        submit();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, formState]);

  return (
    <div className="grid place-items-center h-dvh bg-[#F9F5F1] font-figtree">
      {/* Feedback Wrapper */}
      <div className="flex h-[500px] items-center justify-center w-full">
        {/* Initial Button */}
        <motion.button
          layoutId="wrapper"
          onClick={() => {
            setOpen(true);
            setFormState("idle");
            setFeedback("");
          }}
          className="flex h-10 items-center gap-1 group bg-white border border-[#E7E3E0] text-[#191716] text-sm font-medium pl-3 pr-4 hover:bg-[#B0AEAC]/5 transition-colors ease-out duration-200"
          key="button"
          style={{
            borderRadius: 8,
          }}
        >
          <PlusIcon className="h-5 w-5 stroke-2 text-[#B0AEAC] group-hover:text-[#191716] transition-colors ease-out duration-200" />
          <motion.span layoutId="title">Add note</motion.span>
        </motion.button>
        {/* Open Popover */}
        <AnimatePresence>
          {open ? (
            <motion.div
              layoutId="wrapper"
              className="absolute h-[210px] w-[316px] overflow-hidden bg-[#F2EDE8] border border-[#e7e3e0] p-1"
              style={{ borderRadius: 16 }}
              ref={ref}
            >
              <motion.span
                aria-hidden
                layoutId="title"
                className={`absolute text-sm font-figtree font-normal text-[#191716]/30 left-[21px] top-[20px] ${
                  feedback ? "!opacity-0" : ""
                }`}
                data-success={formState === "success" ? "true" : "false"}
                data-feedback={feedback ? "true" : "false"}
              >
                Add note
              </motion.span>

              <AnimatePresence mode="popLayout">
                {formState === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ y: -40, opacity: 0, filter: "blur(5px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ type: "spring", duration: 0.4, bounce: 0 }}
                    className="flex h-full flex-col items-center justify-center"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="-mt-1"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="31"
                        height="31"
                        rx="15.5"
                        fill="#3A94FF"
                        fill-opacity="0.16"
                      />
                      <rect
                        x="0.5"
                        y="0.5"
                        width="31"
                        height="31"
                        rx="15.5"
                        stroke="#3A94FF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.2639 9.63605C24.6544 10.0266 24.6544 10.6597 24.2639 11.0503L13.6568 21.6569C13.2663 22.0474 12.6332 22.0474 12.2426 21.6569L7.29289 16.7071C6.90237 16.3166 6.90237 15.6834 7.29289 15.2929C7.68342 14.9024 8.31658 14.9024 8.70711 15.2929L12.9498 19.5355L22.8497 9.63602C23.2402 9.2455 23.8734 9.24552 24.2639 9.63605Z"
                        fill="#3A94FF"
                      />
                    </svg>
                    <h3 className="text-[#191716] font-semibold text-base font-figtree mb-1 mt-2">
                      Note added
                    </h3>
                    <p className="text-[#B0AEAC] max-w-[240px] text-sm font-medium font-figtree text-center">
                      You can edit or delete your note from your Exercise
                      History at any time.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    exit={{ y: 8, opacity: 0, filter: "blur(4px)" }}
                    transition={{ type: "spring", duration: 0.4, bounce: 0 }}
                    key="form"
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (!feedback) return;
                      submit();
                    }}
                    className="border border-[#E7E3E0] bg-white rounded-xl "
                  >
                    <textarea
                      autoFocus
                      placeholder="Add note"
                      onChange={(e) => setFeedback(e.target.value)}
                      className="w-full h-[144px] rounded-t-xl rounded-tr-xl outline-none resize-none p-4 text-sm font-figtree font-normal text-[#191716] placeholder:opacity-0"
                      required
                    />
                    <div className="FEEDBACK-FOOTER relative flex h-12 items-center justify-end px-2">
                      <span className="absolute -translate-x-px -translate-y-1/2 top-0 left-0">
                        <HalfCircleLeft />
                      </span>
                      <span className="absolute translate-x-px -translate-y-1/2 top-0 right-0">
                        <HalfCircleRight />
                      </span>
                      <div className="absolute -top-[0.5px] left-[7px] right-[6px] h-[1px] bg-[repeating-linear-gradient(90deg,#E7E3E0,#E7E3E0_2px,transparent_2px,transparent_4px)]" />
                      <button
                        type="submit"
                        className="flex w-24 px-4 items-center justify-center h-8 rounded-lg bg-[#191716] text-sm font-medium font-figtree text-white"
                      >
                        <AnimatePresence mode="popLayout" initial={false}>
                          <motion.span
                            transition={{
                              type: "spring",
                              duration: 0.3,
                              bounce: 0,
                            }}
                            initial={{ opacity: 0, y: -25 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 25 }}
                            key={formState}
                          >
                            {formState === "loading" ? (
                              <BarsRotateFade
                                className="h-[14px] w-[14px]"
                                color="#ffffff"
                              />
                            ) : (
                              <span>Save note</span>
                            )}
                          </motion.span>
                        </AnimatePresence>
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
