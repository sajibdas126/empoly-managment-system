import React from 'react'

const TaskListNumber = () => {
  return (
    <div>
      <div className='flex screen mt-10 justify-between  gap-5'>
          <div className='h-40 w-[45%] bg-red-400 py-6 px-9 rounded-xl'>
              <h2 className='text-3xl font-semibold'>0</h2>
              <h3 className='text-xl font-medium'>New Task</h3>
          </div>

           <div className='h-40 w-[45%] bg-blue-400 py-6 px-9 rounded-xl'>
              <h2 className='text-3xl font-semibold'>0</h2>
              <h3 className='text-xl font-medium'>New Task</h3>
          </div>

           <div className='h-40 w-[45%] bg-green-400 py-6 px-9 rounded-xl'>
              <h2 className='text-3xl font-semibold'>0</h2>
              <h3 className='text-xl font-medium'>New Task</h3>
          </div>

           <div className='h-40 w-[45%] bg-yellow-400 py-6 px-9 rounded-xl'>
              <h2 className='text-3xl font-semibold'>0</h2>
              <h3 className='text-xl font-medium'>New Task</h3>
          </div>
      </div>
    </div>
  )
}

export default TaskListNumber