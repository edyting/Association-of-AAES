import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'


function Layout() {
  return (
    <div className='relative'>
        {/* navbar */}
        <div className="">
          <Navbar/>
        </div>
        {/* outlet */}
        <div className="relative">
            <Outlet/>
        </div>
        {/* footer */}
        <div className="">

        </div>
    </div>
  )
}

export default Layout