import React from 'react';


function Herosection() {
  return (
    <div className='block mb-[20px] overflow-hidden'>
      <div className="h-[calc(100vh-25rem)] herobg w-screen bg-gray-400 relative">
       {/* welcome text container */}
       <div className="w-[80rem] h-[12rem] absolute top-[7rem] left-[5rem] border-[3px] border-white ">
          <div className="text-white">
            <h1 className='text-[4rem] font-bold p-4 capitalize text-center'>Want to Know more about us?</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
       </div>
      </div>
    </div>
  )
}

export default Herosection
