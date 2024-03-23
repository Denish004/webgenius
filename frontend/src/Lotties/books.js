import React from 'react';

import Lottie from 'react-lottie';
import animationData from './books.json';

export default function BooksLottie() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div>
        <Lottie 
          options={defaultOptions}
          height={400}
        />
      </div>
    );
  }