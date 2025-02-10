"use client";
import AboutSF from "@/components/AboutSF";
import CallForAction from "@/components/CallForAction";
import CustomCursor from "@/components/CustomCursor";
import GrainyBackground from "@/components/GrainyBackground";
import Hero from "@/components/Hero";
import Product3D from "@/components/Product3D";
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
      <Hero />
      <AboutSF />
      <Product3D />
      <CallForAction />
    </>
  );
}
/*  className="app" id="app" ref={appRef}*/
