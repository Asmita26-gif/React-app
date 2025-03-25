import React from 'react'
import workspaceImage from '../undraw_workspace_s6wf.svg' // Adjust path as needed
import { FiDroplet, FiPackage, FiTool } from 'react-icons/fi'

export default function Tailwind() {
  return (
    <div className='grid grid-cols-[1fr_1fr] items-center justify-items-center min-h-screen px-6 backdrop-blur-3xl'>

      <div>
        <h1 className='text-4xl font-bold'>Streamline Your Tailwind CSS Projects</h1>
        <p className='text-gray-600 mt-4'>
          Expert made, responsive, accessible components in React and HTML ready to be used on your website or app. Just copy and paste them into your Tailwind CSS project.
        </p>
        <br />


        <div className='flex flex-wrap justify-self-start text-gray-500 my-1 gap-2'>
          <span className='flex items-start gap-1.5'><FiPackage className='mr-2' />42 Components</span>
          <span className='flex items-center gap-1.5'><FiTool className='mr-2' />952 Variations</span>
          <span className='flex items-center gap-1.5'><FiDroplet className='mr-2' />21 Colors</span>
        </div>

        <div className='cursor-pointer py-5'>
          <a href="#" className='px-6 py-3 text-white bg-green-500 hover:bg-green-700 font-medium text-lg rounded-lg shadow-md'>
            Explore components -&gt;
          </a>
        </div>
      </div>

      <div>
        <img className='w-96 h-96 object-contain' src={workspaceImage} alt="workspace" />
      </div>

    </div>
  )
}
