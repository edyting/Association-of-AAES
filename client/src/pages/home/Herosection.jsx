import React from 'react';


function Herosection() {
  return (
    <div className='block'>
      <div className="h-[calc(100vh-10rem)] herobg w-screen bg-gray-400 relativ">
       {/* welcome text container */}
       <div className="w-[40rem] h-[12rem] absolute top-[20rem] left-[5rem] border-[3px] border-white ">
          <div className="text-white">
            <h1 className='text-[4rem] font-bold p-4'>Welcome to LOGO</h1>
            <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
       </div>
      </div>
    </div>
  )
}

export default Herosection
