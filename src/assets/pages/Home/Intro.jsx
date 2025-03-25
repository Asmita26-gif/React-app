import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Intro() {
  return (
    <div className='grid grid-cols-[1fr_2fr] items-center '>
      <div className='w-200px' >
        <DotLottieReact
          src="https://lottie.host/94f2235c-f866-4719-ad97-339706ba38e2/S9XXN3Mrwf.lottie"
          loop
          autoplay
          renderersettings={{
            preserveAspectRatio: "xMidYMid slice",
          }}
        />
      </div>
      <div>
        <h1 className='font-bold text-4xl'>Hi, I am John</h1>
        <p className='text-pink-600 italic'>Dev, Freelancer, AI</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique ab et saepe. <br />Tenetur maxime obcaecati temporibus qui nam, eveniet quaerat saepe enim eius illo? Placeat at ullam architecto nemo ea!</p>
      </div>

      <div></div>
      <div>
        <h1 className='text-4xl font-bold'>Technology I used</h1>
      </div>




    </div>

  )
}
