"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import gsap from "gsap"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"

gsap.registerPlugin(MotionPathPlugin)

interface BoatProps {
  pathId: string;
  onComplete:()=>void;
}
export default function AnimatedBoat({pathId, onComplete}: BoatProps){
  const boatRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const pathEl = document.querySelector<SVGPathElement>(`#${pathId}`);
    if(!boatRef.current || !pathEl) return;

    gsap.to(boatRef.current, {
      duration:3,
      delay:0.5,
      ease:'power1.inOut',
      motionPath:{
        path:pathEl,
        align:pathEl,
        // autoRotate:true,
        alignOrigin:[0.5,0.5],
        start:0,
        end:0.2158,
      },
      onComplete
    });
  },[pathId])

  return(
    <div
      ref={boatRef}
      className="will-change-transform absolute w-[30vh] h-auto z-10"
      style={{top:0, left:'-40vw'}}
    >
      <Image 
				src="/ark-landing.png"
				alt="Image of Ark riding wave."
				height={6329}
				width={3731}
				draggable="true"
				style={{width:'30vh'}}
				className="will-change-transform selectDisable transform -scale-x-100 ml-auto mr-auto pt-[0vh] z-10"
			/>
    </div>
  )
}