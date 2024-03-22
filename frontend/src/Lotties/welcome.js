import Lottie from "react-lottie";
import animationData from "./welcome1.json";

import React from "react";

export default function WelcomeLottie() {
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
<Lottie options={defaultOptions} height={400} width={400} />
    </div> 
  
  );
}