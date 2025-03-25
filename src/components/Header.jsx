import React from 'react'
import { NavLink } from 'react-router'


export default function Header() {
  return (
    <div className='bg-black text-white py-2 px-5 flex items-center justify-between '>
      <h1 className='text-xl' >Tailwind</h1>


      <nav className='space-x-5 max-sm:hidden'>
        <NavLink className={(e) => e.isActive ? 'text-red-700 text-2xl' : ''} to={'/About'}>About</NavLink>
        <NavLink className={(e) => e.isActive ? 'text-orange-400 text-2xl' : ''} to={'/Contact'}>Contact</NavLink>
      </nav>

    </div>
  )
}
