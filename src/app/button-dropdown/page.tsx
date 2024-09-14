"use client";

import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  Album,
  BookCopy,
  Cog,
  Command,
  Dumbbell,
  Gauge,
  Plus,
  UsersRound,
  WandSparkles,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function ButtonDropdown() {
  return (
    <div className="grid place-items-center w-full min-h-dvh font-geist bg-[#131313]">
      <div className="flex flex-col h-[256px] gap-6">
        <div className="flex flex-col gap-1 w-auto">
          <div className="flex items-center px-4 py-3 rounded-lg font-geist text-base text-white bg-[#1F1F1F] gap-3">
            <Album className="w-5 h-5" />
            Programs
          </div>
          <div className="flex items-center px-4 py-3 rounded-lg font-geist text-base text-white/50 gap-3">
            <Dumbbell className="w-5 h-5" />
            Exercises
          </div>
          <div className="flex items-center px-4 py-3 rounded-lg font-geist text-base text-white/50 gap-3">
            <Gauge className="w-5 h-5" />
            Workouts
          </div>
          <div className="flex items-center px-4 py-3 rounded-lg font-geist text-base text-white/50 gap-3">
            <UsersRound className="w-5 h-5" />
            Users
          </div>
        </div>
        <AnimatePresence mode="popLayout">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="flex items-center px-4 py-3 rounded-lg font-geist text-base text-white gap-2 bg-[#5D31D6] border-[0.5px] border-[#3A1A92] shadow-[inset_0px_1.5px_1px_-0.5px_rgba(255,_255,_255,_0.2),_inset_0px_-1.5px_1px_-0.5px_rgba(0,_0,_0,_0.2)] hover:bg-[#4C22BF] transition-all ease-out duration-200">
                Create New
                <Plus className="w-5 h-5" />
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <motion.div
                initial={{ opacity: 0, filter: "blur(5px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(5px)" }}
                transition={{ type: "spring", duration: 0.2, bounce: 0 }}
              >
                <DropdownMenu.Content
                  side="right"
                  align="start"
                  className="flex flex-col min-w-[220px] ml-2 font-geist text-sm text-white/70 border-[0.5px] border-[#353535] rounded-lg bg-[#1F1F1F] transition-all ease-out duration-200"
                >
                  <DropdownMenu.Item className="flex p-3 gap-3 hover:text-white w-full cursor-pointer">
                    <WandSparkles className="w-5 h-5" />
                    AI Generate
                  </DropdownMenu.Item>
                  <DropdownMenu.DropdownMenuSeparator className="border-[0.5px] border-[#353535]" />
                  <DropdownMenu.Item className="flex p-3 gap-3 hover:text-white w-full cursor-pointer">
                    <Album className="w-5 h-5" />
                    New Program
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="flex p-3 gap-3 hover:text-white w-full cursor-pointer">
                    <Dumbbell className="w-5 h-5" />
                    New Exercise
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="flex p-3 gap-3 hover:text-white w-full cursor-pointer">
                    <Gauge className="w-5 h-5" />
                    New Workout
                  </DropdownMenu.Item>
                  <DropdownMenu.DropdownMenuSeparator className="border-[0.5px] border-[#353535]" />
                  <div className="flex p-3 gap-3">
                    <DropdownMenu.Item className="flex w-full h-10 rounded-lg border-[0.5px] border-[#353535] items-center justify-center hover:bg-[#2B2B2B] hover:text-white transition-all ease-out duration-200">
                      <Cog className="w-5 h-5" />
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="flex w-full h-10 rounded-lg border-[0.5px] border-[#353535] items-center justify-center hover:bg-[#2B2B2B] hover:text-white transition-all ease-out duration-200">
                      <Command className="w-5 h-5" />
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="flex w-full h-10 rounded-lg border-[0.5px] border-[#353535] items-center justify-center hover:bg-[#2B2B2B] hover:text-white transition-all ease-out duration-200">
                      <BookCopy className="w-5 h-5" />
                    </DropdownMenu.Item>
                  </div>
                </DropdownMenu.Content>
              </motion.div>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </AnimatePresence>
      </div>
    </div>
  );
}
