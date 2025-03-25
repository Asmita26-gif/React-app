import React from 'react'
import { DiDart, DiGithub, DiGo, DiJava, DiJavascript, DiNodejs, DiPython, DiReact, DiRuby } from 'react-icons/di'


export default function Tech() {
  return (
    <div className=' grid grid-cols-[repeat(3,1fr)] justify-items-center  '>
      <DiReact className='hover:scale-110 hover:text-red-500 translate-4 ease-out cursor-pointer duration-200' size={200} />
      <DiPython className='hover:scale-110 hover:text-red-500 translate-4 ease-out cursor-pointer duration-200' size={200} />
      <DiJavascript className='hover:scale-110 hover:text-red-500 translate-4 ease-out cursor-pointer duration-200' size={200} />
      <DiNodejs className='hover:scale-110 hover:text-red-500 translate-4 ease-out cursor-pointer duration-200 animate-bounce' size={200} />
      <DiDart className='hover:scale-110 hover:text-red-500 translate-4 ease-out cursor-pointer duration-200' size={200} />
      <DiGithub className='hover:scale-110 hover:text-red-500 translate-4 ease-out cursor-pointer duration-200' size={200} />
      <DiGo className='hover:scale-110 hover:text-red-500 translate-4 ease-out cursor-pointer duration-200' size={200} />
      <DiRuby className='hover:scale-110 hover:text-red-500 translate-4 ease-out cursor-pointer duration-200' size={200} />
      <DiJava className='hover:scale-110 hover:text-red-500 translate-4 ease-out cursor-pointer duration-200' size={200} />

    </div>
  )
}
function SomeCompo({ children }) {

  return (
    <div>
      {children}

    </div>
  )
}
