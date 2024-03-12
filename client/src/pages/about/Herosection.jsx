import React from 'react';


function Herosection() {
  return (
    <div className='block mb-[20px] overflow-hidden'>
      <div className="md:h-[calc(100vh-25rem)] h-[18rem] herobg w-screen bg-gray-400 relative"> 
       {/* welcome text container */}
       <div className="md:w-[80rem] md:h-[12rem] absolute top-[7rem]  md:left-[5rem] border-[3px] border-white mx-3 md:mx-0 ">
          <div className="text-white">
            <h1 className='md:text-[4rem] text-xl font-bold p-4 capitalize text-center'>Want to Know more about us?</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
       </div>
      </div>
    </div>
  )
}

export default Herosection
