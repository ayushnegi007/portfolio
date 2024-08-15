import React from 'react'

const Form = () => {
  return (
    <div className='max-w-md w-full mx-auto p-6 bg-gray-600 rounded-lg shadow-md'>
      <form action="mb-4">
        <div className=''>
            <label className="block text-white text-sm font-semibold mb-2"htmlFor=''></label>
            <input placeholder="" className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500 "required type="text" />
        </div>
        <div className=''>
            <label className="block text-white text-sm font-semibold mb-2"htmlFor=''></label>
            <input placeholder="" className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500 "required type="text" />
        </div>
        <div className=''>
            <label className="block text-white text-sm font-semibold mb-2"htmlFor=''></label>
            <input placeholder="" className="w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500 "required type="text" />
        </div>
        
      </form>
    </div>
  )
}

export default Form
