"use client";
import CustomCursor from "@/components/CustomCursor";
import GrainyBackground from "@/components/GrainyBackground";
import { useEffect, useRef } from "react";

export default function Home() {
  const appRef = useRef(null);
  const toRef = useRef(null);

  useEffect(() => {
    //document.addEventListener("mousemove", moveGradient);
    //return function cleanup(){
    //  document.removeEventListener("mousemove", moveGradient);
    //}
  }, [appRef]);
  return (
    <>
      <main className="app" id="app" ref={appRef}>
        <CustomCursor />
        <div className="g1"></div>
      </main>
    </>
  );
}
