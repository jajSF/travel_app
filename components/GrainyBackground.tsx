"use client";
import React, { useEffect, useState } from "react";

const GrainyBackground = () => {
  const [noiseData, setNoiseData] = useState("");

  useEffect(() => {
    try {
      // Generate noise data for the background
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        console.error("Could not get canvas context");
        return;
      }

      canvas.width = 100;
      canvas.height = 100;

      const imgData = ctx.createImageData(100, 100);
      const data = imgData.data;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value; // red
        data[i + 1] = value; // green
        data[i + 2] = value; // blue
        data[i + 3] = 32; // alpha (reduced for subtlety)
      }

      ctx.putImageData(imgData, 0, 0);
      setNoiseData(canvas.toDataURL());
    } catch (error) {
      console.error("Error generating noise:", error);
    }
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      {/* SVG Filters */}
      <svg className="hidden">
        <defs>
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>

          <filter id="grain">
            <feGaussianBlur stdDeviation="0.5" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 15 -3"
            />
          </filter>
        </defs>
      </svg>

      {/* Animated Background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-900"
        style={{
          filter: "url(#grain)",
          opacity: 0.95,
        }}
      >
        {/* Noise Overlay */}
        <div
          className="absolute inset-0 mix-blend-overlay opacity-50"
          style={{
            backgroundImage: noiseData ? `url(${noiseData})` : "none",
            animation: "grain 8s steps(1) infinite",
          }}
        />
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes grain {
          0%,
          100% {
            transform: translate(0, 0);
          }
          10% {
            transform: translate(-1%, -1%);
          }
          20% {
            transform: translate(1%, 1%);
          }
          30% {
            transform: translate(-2%, 0%);
          }
          40% {
            transform: translate(2%, 2%);
          }
          50% {
            transform: translate(-1%, 1%);
          }
          60% {
            transform: translate(2%, -1%);
          }
          70% {
            transform: translate(1%, 2%);
          }
          80% {
            transform: translate(-1%, -2%);
          }
          90% {
            transform: translate(2%, 1%);
          }
        }
      `}</style>
    </div>
  );
};

export default GrainyBackground;
