"use client";

// components/InterlagosCircuit.tsx
import React, { useEffect, useState } from "react";

const InterlagosCircuit: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % 3); // Cycle through sections
    }, 24000); // Change this duration based on your path length and desired timing

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full">
      <svg
        width="175"
        height="116"
        viewBox="0 0 175 116"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
      >
        <path
          id="circuit-path"
          d="M170.997 57.8029C171.163 47.7098 164.655 28.9882 158.217 22.3081C151.624 15.467 114.584 4.31463 97.4117 4.00092C92.7926 3.91653 64.9411 9.67089 51.8966 13.4051C50.2367 13.8802 40.4245 16.357 30.0917 18.909C8.40545 24.2647 5.41052 25.5099 4.34248 29.6155C3.53517 32.7191 3.96452 33.7109 7.71616 37.413C12.5918 42.2244 12.8415 43.5139 9.83055 48.3274C1.5587 61.5515 8.03198 80.412 22.3433 84.7837C59.6419 96.1767 86.5767 104.015 103 108.256C114.489 111.224 120.834 112.431 121.984 111.864C126.929 109.433 130.638 92.3137 128.244 82.9784C126.892 77.701 124.876 75.9226 90.6157 49.7939C76.8688 39.3076 76.8688 39.3094 77.3992 31.3228C78.0433 21.6083 81.4618 18.5821 93.7852 16.813C108.353 14.7227 111.46 16.1876 106.729 22.9186C102.389 29.096 102.077 32.9465 105.633 36.4283C110.1 40.8001 112.87 39.9118 122.284 31.0885C129.915 23.9375 136.715 19.7826 140 22.9186C141.958 24.7873 143.273 28.2362 137 33.5C124.814 43.725 124.316 49.4715 129.97 58.6194C131.459 61.028 137.557 65.8648 144 70.2844C151.632 75.5199 159.75 80.17 161.266 79.5055C164.262 78.1922 169.164 68.4066 170.721 60.6329C170.888 59.7955 170.977 58.8446 170.994 57.8037L170.997 57.8029Z"
          stroke="#F74951"
          strokeOpacity="0.5"
          strokeWidth="7"
        />
        <path
          d="M51.8966 13.4051C64.9411 9.67089 92.7926 3.91653 97.4117 4.00092C114.584 4.31463 151.624 15.467 158.217 22.3081C164.655 28.9882 171.163 47.7098 170.997 57.8029L170.994 57.8037C170.977 58.8446 170.888 59.7955 170.721 60.6329C169.164 68.4066 164.262 78.1922 161.266 79.5055C159.75 80.17 151.632 75.5199 144 70.2844"
          stroke="#F74951"
          stroke-width="6"
          stroke-linecap="round"
        />
        <path
          d="M52 9L54 17"
          stroke="#FFDF27"
          stroke-width="7"
          stroke-linecap="round"
        />
        <circle cx="0" cy="0" r="4" fill="white" className="dot">
          <animateMotion dur="72s" repeatCount="indefinite">
            <mpath href="#circuit-path" />
          </animateMotion>
        </circle>
      </svg>
    </div>
  );
};

export default InterlagosCircuit;

<svg
  width="175"
  height="116"
  viewBox="0 0 175 116"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M170.997 57.8029C171.163 47.7098 164.655 28.9882 158.217 22.3081C151.624 15.467 114.584 4.31463 97.4117 4.00092C92.7926 3.91653 64.9411 9.67089 51.8966 13.4051C50.2367 13.8802 40.4245 16.357 30.0917 18.909C8.40545 24.2647 5.41052 25.5099 4.34248 29.6155C3.53517 32.7191 3.96452 33.7109 7.71616 37.413C12.5918 42.2244 12.8415 43.5139 9.83055 48.3274C1.5587 61.5515 8.03198 80.412 22.3433 84.7837C59.6419 96.1767 86.5767 104.015 103 108.256C114.489 111.224 120.834 112.431 121.984 111.864C126.929 109.433 130.638 92.3137 128.244 82.9784C126.892 77.701 124.876 75.9226 90.6157 49.7939C76.8688 39.3076 76.8688 39.3094 77.3992 31.3228C78.0433 21.6083 81.4618 18.5821 93.7852 16.813C108.353 14.7227 111.46 16.1876 106.729 22.9186C102.389 29.096 102.077 32.9465 105.633 36.4283C110.1 40.8001 112.87 39.9118 122.284 31.0885C129.915 23.9375 136.715 19.7826 140 22.9186C141.958 24.7873 143.273 28.2362 137 33.5C124.814 43.725 124.316 49.4715 129.97 58.6194C131.459 61.028 137.557 65.8648 144 70.2844C151.632 75.5199 159.75 80.17 161.266 79.5055C164.262 78.1922 169.164 68.4066 170.721 60.6329C170.888 59.7955 170.977 58.8446 170.994 57.8037L170.997 57.8029Z"
    stroke="#F74951"
    stroke-opacity="0.5"
    stroke-width="7"
  />
  <path
    d="M51.8966 13.4051C64.9411 9.67089 92.7926 3.91653 97.4117 4.00092C114.584 4.31463 151.624 15.467 158.217 22.3081C164.655 28.9882 171.163 47.7098 170.997 57.8029L170.994 57.8037C170.977 58.8446 170.888 59.7955 170.721 60.6329C169.164 68.4066 164.262 78.1922 161.266 79.5055C159.75 80.17 151.632 75.5199 144 70.2844"
    stroke="#F74951"
    stroke-width="6"
    stroke-linecap="round"
  />
  <path
    d="M52 9L54 17"
    stroke="#FFDF27"
    stroke-width="7"
    stroke-linecap="round"
  />
  <circle cx="13" cy="79" r="4" fill="white" />
</svg>;
