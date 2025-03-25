import React from 'react'

export default function Info() {
  return (
    <div >
      <h1 className='font-bold text-3xl flex items-center justify-center  mt-50 max-sm:hidden'>Who I am?</h1>
      <div className='h-[350px] w-[350px] bg-black flex justify-center items-center mx-auto border-[4px] border-t-red-500 border-b-pink-500 border-r-yellow-500 border-l-purple-500 rounded-full text-white py-2'>

        <div>
          <p>Name : Some Person</p>
          <p>Email : someperson12345@gmail.com</p>
          <p>Tel : 987234554</p>
          <p>Age : 90</p>
          <p>Experience : mern stack,javascript, pythom</p>
        </div>

      </div>

    </div >


  )
}
