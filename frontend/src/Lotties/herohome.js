import Lottie from "react-lottie";
import animationData from "./herohome.json";

import React from "react";

export default function HeroLottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div >
<Lottie options={defaultOptions} height={400} width={500} />
    </div> 
  
  );
}