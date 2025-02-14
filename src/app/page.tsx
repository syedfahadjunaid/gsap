"use client";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const circle = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".box", { rotation: "+360", duration: 3 });
      gsap.to(circle.current, { rotation: "-=360", duration: 3 });
    },
    { scope: container }
  );
  return (
    <div className="App">
      <div ref={container} className="container">
        <div className="box gradient-blue">selector</div>
        <div className="box gradient-blue">selector</div>
        <div className="circle gradient-green" ref={circle}>
          Ref
        </div>
      </div>
      <div className="box gradient-blue">selector</div>
    </div>
  );
}
