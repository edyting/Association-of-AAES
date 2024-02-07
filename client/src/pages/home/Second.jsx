import React from 'react'

function Second() {
  return (
    <div className='mt-12 mx-[2rem]'>
      {/* top */}
      <div className="mb-4 py-2">
        {/* red */}
        <div className="w-20 h-1 bg-danger"></div>

      <div className="flex items-center gap-[10px]">
        {/* h1 and line */}
      <h1 className='text-[1.5rem] ml-[1rem]  w-[10rem] capitalize text-primary font-semibold'>What we do </h1>
      <div className="h-1 w-[calc(90vw-10rem)] rounded-xl bg-gray-text"></div>
      </div>
      </div>

      {/* flex */}
      <div className="w-[full] flex gap-[20px] h-[32rem]">
        {/* left */}
        <div className="w-2/4 bg-gray-400  h-full"></div>
        {/* right */}
        <div className=" flex items-center justify-center">
          {/* text */}
          <div className="text-center w-2/4">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, quae quod voluptate tenetur earum rem saepe consequuntur quasi unde, quia veritatis expedita sed, numquam accusantium aperiam! Eaque fugiat excepturi nostrum.</p>
            {/* button */}
            <button className='bg-primary text-white rounded-lg mt-2 px-3 py-2 text-lg'>See more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Second
