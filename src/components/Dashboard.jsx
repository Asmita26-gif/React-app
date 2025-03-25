import React from 'react'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { FiTool } from 'react-icons/fi'
import { FiSettings } from 'react-icons/fi';
import { IoEarthSharp } from 'react-icons/io5';


export default function Dashboard() {
  return (
    <section className='flex flex-col lg:flex-row items-center justify-between min-h-screen px-10 bg-gray-100'>
      <div className='lg:w-1/2 space-y-6'>
        <div className='w-12 h-12 flex items-center justify-center bg-white shadow-md rounded-full'>
          <span><FiTool className='mr-2' /></span>


        </div>

        <h2 className='text-3xl font-bold text-gray-600'>CSS Components</h2>

        <p className='text-gray-600'>Every element that you need in a product comes built-in as a component.All components fit perfectly with each other and can have different colors</p>

        <div className='flex flex-wrap gap-3'>
          {['BUTTONS', 'INPUTS', 'LABELS', 'MENUS', 'NAVBARS', 'PAGINATION', 'PROGRESSBARS', 'TYPOGRAPHY'].map((item, index) => (
            <span key={index} className='px-3 py-1 text-gray-700 bg-gray-200 rounded-md text-sm font-medium'>{item}</span>
          ))}
        </div>

        <a href="#" className='text-indigo-600 font-medium flex items-center'>View All <span className='ml-2'>&gt;&gt;</span></a>
      </div>





      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
        <div className="relative grid gap-8 md:grid-cols-3 ">

          {/* Service Card */}
          <div className="bg-gray-900 text-white p-8 rounded-xl shadow-lg relative ">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-4xl">🧿</span>

              <h3 className="text-xl font-semibold">Excellent Services</h3>
            </div>
            <p className="text-gray-400 mt-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className="mt-4 px-4 py-2 bg-white text-black rounded-lg shadow-md flex items-center gap-2">
              <FaGithub /> GITHUB
            </button>
          </div>

          {/* Profile Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="flex justify-center">
              <img className="w-24 h-24 rounded-full object-cover border-4 border-white" src="https://via.placeholder.com/100" alt="profile" />
            </div>
            <h3 className="text-xl font-semibold text-center mt-4">Romina Hadid</h3>
            <p className="text-gray-500 text-center">MARKETING SPECIALIST</p>
            <div className="flex justify-center gap-4 mt-4">
              <FaGoogle className="text-red-500" size={24} />
              <FaFacebook className="text-blue-500" size={24} />
            </div>
          </div>

          {/* Revision Card */}
          <div className="bg-white p-8 rounded-xl shadow-lg top-0 right-10">
            <div className="flex items-center justify-center mb-4 top-0 right-10">
              <span className="text-4xl">🔄</span>
            </div>
            <h3 className="text-xl font-semibold items-center justify-center text-center">Free Revisions</h3>
            <p className="text-gray-500 mt-2">Keep your users engaged by providing meaningful information. By now, the user is curious.</p>
          </div>

          {/* Regular Button */}
          <button className="absolute bottom-0 left-1/3 -translate-x-1/2 bg-pink-500 text-white px-6 py-3 rounded-lg shadow-md">
            ❤️ REGULAR
          </button>
        </div>

        {/* Navigation Bar */}
        <div className="absolute bottom-0 w-full bg-indigo-500 text-white p-4 flex justify-between items-center">
          <span>INDIGO MENU</span>
          <div className="flex gap-4">
            <IoEarthSharp size={24} />
            <FiSettings size={24} />
          </div>
        </div>
      </div >












    </section >
  )
}
