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
      <main>
        <div className="app" id="app" ref={appRef}>
          <CustomCursor />
          <div className="g1"></div>
          <h1 className="text-bold text-teal-500">Hello World</h1>
        </div>
      </main>
    </>
  );
}
