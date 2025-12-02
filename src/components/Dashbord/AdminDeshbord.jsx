import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDeshbord = () => {
  return (
    <div className='min-h-screen w-full p-4 sm:p-6 md:p-10 text-white'>
      
      <Header />
     <CreateTask></CreateTask>
     <AllTask></AllTask>

    </div>
  )
}

export default AdminDeshbord
