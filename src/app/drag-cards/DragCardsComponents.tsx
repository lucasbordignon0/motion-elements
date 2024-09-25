import React from "react";
import { motion } from "framer-motion";
import { ArrowLeftRight, ChevronRight, Paperclip } from "lucide-react";

interface CardProps {
  name: string;
  blocks: number;
  exercises: number;
  alternates: number;
  attachments: number;
  shorterTime: number;
  longerTime: number;
}

export const Card: React.FC<CardProps> = ({
  name,
  blocks,
  exercises,
  alternates,
  attachments,
  shorterTime,
  longerTime,
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      whileTap={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col bg-white font-figtree rounded-lg p-2 gap-3 w-full max-w-96 cursor-grab active:cursor-grabbing shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <h4 className="text-[#3A94FF] text-base font-bold leading-5">{name}</h4>
      <div className="flex gap-1 items-center text-[#191716]/20">
        <p className="text-sm truncate">
          {blocks} blocks & {exercises} exercises
        </p>
        <ChevronRight className="w-4 h-4" />
      </div>
      <div className="flex gap-3 items-center font-bold text-sm">
        <div className="flex gap-1 text-[#191716]/20 items-center">
          <ArrowLeftRight className="w-4 h-4" /> <p>{alternates}</p>
        </div>
        <div className="flex gap-1 text-[#191716]/20 items-center">
          <Paperclip className="w-4 h-4" /> <p>{attachments}</p>
        </div>
      </div>
      <div className="flex gap-1">
        <div className="flex py-0.5 px-1 gap-0.5 bg-green-500/15 rounded text-green-500 text-xs font-bold">
          {shorterTime} minutes
        </div>
        <div className="flex py-0.5 px-1 gap-0.5 bg-green-500/15 rounded text-green-500 text-xs font-bold">
          {longerTime} minutes
        </div>
      </div>
      <button className="flex items-center justify-center w-full h-8 rounded-lg border border-[#E7E3E0] text-[#B0AEAC] text-sm hover:bg-[#B0AEAC]/10 active:bg-[#B0AEAC]/20 transition-colors duration-150 ease-out">
        Edit Workout
      </button>
    </motion.div>
  );
};
