import Lottie from "react-lottie";
import animationData from "./hallticket.json";

import React from "react";

export default function HallTicketLottie() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="mx-10 my-4" >
<Lottie options={defaultOptions} height={350} width={400} />
    </div> 
  
  );
}