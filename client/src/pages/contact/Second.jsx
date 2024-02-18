import React from 'react'

function Second() {
  return (
    <div className='bg-blue-200'>
     {/* leftside */}

      <div className=" ">
        {/* contact us */}
      <div className="">
        <h1>Contact Us </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quae dolorum quos iure iusto dolore?
        </p>
      </div>
      {/* info */}
      <div className="">
        {/* address */}
        <div className="">
            <h1 className='font-bold'>Address:</h1>
            <p>Knust campus</p>
        </div>
        {/* phone */}
        <div className="">
            <h1 className='font-bold'>Phone:</h1>
            <p>+233 4040440400</p>
        </div>
        {/* working ours */}
        <div className="">
            <h1 className='font-bold'>We are open on:</h1>
            <p>Monday-Friday</p>
            <p>8:00am-7:00pm</p>
            <p>Saturday:</p>
            <p>10:30am-5:30pm</p>
        </div>
        {/* email */}
        <div className="">
            <h1 className='font-bold'>E-mail:</h1>
            <a href='#'>logo@gmail.com</a>
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
