// import Lottie from "react-lottie";
// import animationData from "./waves.json";

// import React from "react";

// export default function WavesLottie() {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };

//   return (
//     <div >
// <Lottie options={defaultOptions}  />
//     </div> 
  
//   );
// }

import React from 'react';
import Lottie from 'react-lottie';
import animationData from './waves.json'; // Adjust the path to your animation data JSON file

const WavesLottie = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', zIndex: '-1' }}>
      <Lottie options={defaultOptions} height={window.innerHeight} width={window.innerWidth} />
    </div>
  );
};

export default WavesLottie;
