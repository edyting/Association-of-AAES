import React from 'react'
import Upcoming from './Upcomingevents'

function Eventsection() {
  return (
    <div className='bg-darkbg my-12 h-[25rem] w-full px-12'>
     {/* events  */}
     <div className="">
     <Upcoming/>
     </div>
      {/* button */}
      <div className="">
        <button>
          next event
        </button>
      </div>
    </div>
  )
}

export default Eventsection
