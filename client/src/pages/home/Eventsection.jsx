import React, { useState } from 'react'
import Upcoming from './Upcomingevents'
import Pastevents from './Pastevents';

function Eventsection() {
  let [eventstate,setevent] = useState(true);

  let onClick = ()=>{
      setevent(!eventstate);
      console.log(eventstate);
  }
  return (
   <div className=" mt-12">
      {/* top */}
      <div className="mx-[2rem] ">
        {/* red */}
        <div className="w-20 h-1 bg-danger"></div>

      <div className="flex items-center gap-[10px]">
        {/* h1 and line */}
      <h1 className='text-[1.5rem] ml-[1rem]  w-[10rem] capitalize text-primary font-semibold'>Events </h1>
      <div className="h-1 w-[calc(90vw-10rem)] rounded-xl bg-gray-text"></div>
      </div>
      </div>
     <div className='bg-darkbg mb-12 mt-4 h-full w-full px-12'>
      {/* events  */}
      <div className="">
     { eventstate ?  <Upcoming/> : <Pastevents/> }
      </div>
       {/* button */}
       <div className="">
         <button onClick={onClick} className='capitalize text-white border-primary border border-2 px-4 py-2 mb-4 hover:bg-white hover:font-bold hover:text-primary'>
           {!eventstate ? " view next event": " view past events"}  
         </button>
       </div>
     </div>
   </div>
  )
}

export default Eventsection
