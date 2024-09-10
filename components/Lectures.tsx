import { modules } from '@/data'
import Link from 'next/link'
import React from 'react'

const Lectures = () => {
  return (
    <div className="container mx-auto py-16 px-1">
      <h2 className="text-3xl font-bold heading mb-6 text-center">Course Modules</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {modules.map((module, index) => (
          <Link key={module.id} href={`/modules/${module.id}`} passHref className='relative'>
            <div className="shadow-md border rounded p-6 hover:shadow-lg hover:bg-gray-100 hover:text-gray-800 transition-shadow duration-300 cursor-pointer transform hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">{index + 1}. {module.title}</h3>
              <p className="text-gray-600">{module.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Lectures
