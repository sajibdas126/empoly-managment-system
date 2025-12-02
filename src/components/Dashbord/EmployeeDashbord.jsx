import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashbord = () => {
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen text-white'>
        <Header></Header>
        <TaskListNumber></TaskListNumber>
        <TaskList></TaskList>
    </div>
  )
}

export default EmployeeDashbord