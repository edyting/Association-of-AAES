import React from 'react'

function Maplocate() {
  return (
    <div>
      {/* left */}
      <div className="">
        <h1>locate us at :</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, odit.</p>
      </div>
      {/* right */}
      <div className="bg-red-100">
        <div className="">
           <p className='overflow-hidden pb-[30px] relative '>
            <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.258059648973!2d-1.5631020289949795!3d6.672787077076527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb95003abe6445%3A0xdb7541fbe7b34402!2sNew%20Engineering%20Building!5e0!3m2!1sen!2sgh!4v1708280477199!5m2!1sen!2sgh" width="400" height="300" 
            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            title='Responsive Google Map'>
            
              </iframe></p>
        </div>
      </div>
    </div>
  )
}

export default Maplocate
