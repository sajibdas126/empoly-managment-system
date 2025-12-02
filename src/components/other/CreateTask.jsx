import React from 'react'

const CreateTask = () => {
  return (
     <div className='p-4 sm:p-6 bg-[#1c1c1c] mt-6 sm:mt-8 rounded'>
        
        <form className='flex flex-col lg:flex-row w-full gap-10'>

          {/* LEFT SECTION */}
          <div className='w-full lg:w-1/2'>

            <div className='mb-4'>
              <h3 className='text-sm text-gray-300 mb-1'>Task Title</h3>
              <input
                type="text"
                placeholder="make a UI design"
                className='text-sm py-2 px-3 w-full rounded outline-none bg-transparent 
                placeholder:text-gray-500 border border-gray-400'
              />
            </div>

            <div className='mb-4'>
              <h3 className='text-sm text-gray-300 mb-1'>Date</h3>
              <input
                type="date"
                className='text-sm py-2 px-3 w-full rounded outline-none bg-transparent 
                border border-gray-400'
              />
            </div>

            <div className='mb-4'>
              <h3 className='text-sm text-gray-300 mb-1'>Assign To</h3>
              <input
                type="text"
                placeholder="employee name"
                className='text-sm py-2 px-3 w-full rounded outline-none bg-transparent 
                placeholder:text-gray-500 border border-gray-400'
              />
            </div>

            <div className='mb-4'>
              <h3 className='text-sm text-gray-300 mb-1'>Category</h3>
              <input
                type="text"
                placeholder='design, dev, etc'
                className='text-sm py-2 px-3 w-full rounded outline-none bg-transparent 
                placeholder:text-gray-500 border border-gray-400'
              />
            </div>

          </div>

          {/* RIGHT SECTION */}
          <div className='w-full lg:w-1/2 flex flex-col'>
            <h3 className='text-sm text-gray-300 mb-1'>Description</h3>

            <textarea
              rows="10"
              className='text-sm py-2 px-3 w-full rounded outline-none bg-transparent 
              border border-gray-400'
            ></textarea>

            <button
              className='bg-emerald-500 hover:bg-emerald-600 px-5 py-2 rounded text-sm mt-4 w-full sm:w-auto'>
              Create Task
            </button>
          </div>

        </form>

      </div>
  )
}

export default CreateTask