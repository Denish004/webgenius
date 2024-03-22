import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';

function Page() {
  return (
    <div>
    <div className="flex bg-gray-100">
      <div className="w-1/4"><Sidebar /></div>
      <div className="flex-grow pl-5">
        <Navbar />
        <Outlet/>
      </div>
    </div>
    </div>
  )
}

export default Page;