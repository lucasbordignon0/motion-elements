import { motion } from "framer-motion";

export function ShapeRight() {
  return (
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <svg
        width="178"
        height="344"
        viewBox="0 0 178 344"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradientLeft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="black" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path
          d="M52.3952 0L52.3952 164.166C52.3952 178.523 40.6661 190.161 26.1976 190.161C11.7291 190.161 1.8188e-05 201.8 1.67889e-05 216.157L0 344L178 344L178 2.22128e-05L52.3952 0Z"
          fill="url(#gradientLeft)"
        />
      </svg>
    </motion.span>
  );
}

export function ShapeLeft() {
  return (
    <motion.span>
      <svg
        width="178"
        height="344"
        viewBox="0 0 178 344"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gradientLeft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="black" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path
          d="M125.605 344L125.605 179.834C125.605 165.477 137.334 153.839 151.802 153.839C166.271 153.839 178 142.2 178 127.843L178 4.69749e-05L4.59021e-05 0L0 344L125.605 344Z"
          fill="url(#gradientLeft)"
        />
      </svg>
    </motion.span>
  );
}
