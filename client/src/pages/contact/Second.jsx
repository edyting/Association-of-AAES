import React from 'react'

function Second() {
  return (
    <div className=' flex '>
     {/* leftside */}

      <div className="bg-muted w-[25rem] p-4 rounded-lg m-2">
        {/* contact us */}
      <div className="">
        <h1 className='font-bold text-lg'>Contact Us </h1>
        <p className='text-grey-300 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quae dolorum quos iure iusto dolore?
        </p>
      </div>
      {/* info */}
      <div className="">
        {/* address */}
        <div className="">
            <h1 className='font-bold text-lg'>Address:</h1>
            <p  className='text-grey-300 text-sm'>Knust campus</p>
        </div>
        {/* phone */}
        <div className="">
            <h1 className='font-bold text-lg'>Phone:</h1>
            <p  className='text-grey-300 text-sm'>+233 4040440400</p>
        </div>
        {/* working ours */}
        <div className="">
            <h1 className='font-bold text-lg'>We are open on:</h1>
            <p>Monday-Friday</p>
            <p className='text-grey-300 text-sm'>8:00am-7:00pm</p>
            <p>Saturday:</p>
            <p className='text-grey-300 text-sm'>10:30am-5:30pm</p>
        </div>
        {/* email */}
        <div className="">
            <h1 className='font-bold text-lg'>E-mail:</h1>
            <a href='#'  className='text-grey-300 text-sm'>logo@gmail.com</a>
        </div>
      </div>
      </div>

      {/* right side */}
      <div className="">
            <form action="">

                <div className="">
                <input type="text" placeholder='Name' />
                <input type="Last Name" />
                </div>

                <div className="">
                <input type="text" placeholder='Email'/>
                </div>

                <div className="">
                <input type="text" placeholder='Phone Number'/>
                </div>

                <div className="">
                    <textarea name="" id="" cols="20" rows="5"></textarea>
                </div>

                <input type="submit" value='submit'/>

            </form>
      </div>
     




    </div>
  )
}

export default Second
