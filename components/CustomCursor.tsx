"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursor = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  const moveCursor = (e: MouseEvent): void => {
    gsap.to(cursor.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.2,
    });
    gsap.to(followerRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.9,
    });
  };

  useEffect(() => {
    gsap.set(cursor, {
      xPercent: 100,
      yPercent: 100,
    });
    gsap.set(followerRef, {
      xPercent: -20,
      yPercent: -20,
    });
    window.addEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div>
      <div ref={cursor} className="cursor outer"></div>
      <div ref={followerRef} className="follower cursor inner"></div>
    </div>
  );
};

export default CustomCursor;
