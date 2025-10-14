'use client'

import { useState } from "react"
import AnimatedBoat from "./AnimatedBoat"
import Image from "next/image"

interface BoatProps {
  pathID: string;
}

export default function Boat({pathID}:BoatProps){
  const [showBoat, setBoat] = useState(false);

  return(
    <div>
      {!showBoat && <AnimatedBoat pathId={pathID} onComplete={()=>{setBoat(true)}}/>}
      {showBoat && <Image 
        src="/ark-landing.png"
        alt="Image of Ark riding wave."
        height={6329}
        width={3731}
        draggable="true"
        style={{width:'30vh'}}
        className="selectDisable transform -scale-x-100 ml-auto mr-auto pt-[20vh] z-10"
        />}
    </div>
  )
}