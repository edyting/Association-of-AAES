import React from 'react'
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import Newsletter from './Newsletter';

function Footer() {
  return (
    <div className='bg-darkbg w-screen'>
        {/* flex */}
      <div className="w-[80%] mx-auto">
            {/* top */}
            <div className="flex py-4 justify-between flex-col md:flex-row text-white space-y-4 text-lg items-center">
                {/* logo */}
                <div className="">
                    <h1>LOGO</h1>
                </div>
                {/* call us */}
                <div className="flex items-center gap-2 ">
                    {/* icon */}
                    <div className="bg-gray-600  md:p-2 p-1 flex items-center justify-center rounded-full shadow-xl ">
                    <IoCallOutline className='text-[30px] md:text-[40px]' />
                    </div>
                    {/* info */}
                    <div className="">
                    <h1 className='capitalize font-bold text-primary'>call us on</h1>
                    <p className='text-sm'>+233 88 989 5555</p>
                    </div>
                </div>
                {/* mail us */}
                <div className="flex items-center gap-2">
                    {/* icon */}
                    <div className="bg-gray-600  md:p-2 p-1 flex items-center justify-center rounded-full shadow-xl">
                    <IoMailOutline className='text-[30px] md:text-[40px]' />
                    </div>
                    {/* info */}
                    <div className="">
                        <h1 className='capitalize font-bold text-primary'>mail us on</h1>
                        <p className='text-sm'>mailus@gmail.com</p>
                    </div>
                </div>
                {/* location */}
                <div className="flex items-center gap-2">
                    {/* icon */}
                    <div className="bg-gray-600  md:p-2 p-1 flex items-center justify-center rounded-full shadow-xl">
                    <IoLocationOutline className='text-[30px] md:text-[40px]' />
                    </div>
                    {/* info */}
                    <div className="">
                        <h1 className='capitalize font-bold text-primary'>location</h1>
                        <p className='text-sm'>kumasi,ayeduase</p>
                    </div>
                </div>
            </div>
            {/* line */}
            <div className="bg-[#6c6d72] h-[0.5px] w-full"></div>
            {/* middle */}
            <div className="text-white flex justify-between py-4">
                {/* quick links */}
                <div className="">
                    <div className="flex items-center gap-1">
                        <div className="h-2 w-2 bg-muted"></div>
                    <h1 className='text-primary text-lg font-bold capitaliz'>Quick links</h1>
                    </div>
                    <ul className='pl-4'>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>
                {/* social media */}
                <div className="">
                <div className="flex items-center gap-1">
                        <div className="h-2 w-2 bg-muted"></div>
                    <h1 className='text-primary text-lg font-bold capitalize'>social media</h1>
                    </div>
                    <ul className='pl-4'>
                        <li>facebook</li>
                        <li>facebook</li>
                        <li>facebook</li>
                        <li>facebook</li>
                    </ul>

                </div>
                {/* newsletter */}
                <div className="">
                    <Newsletter/>
                </div>
            </div>
             {/* line */}
             <div className=" bg-[#6c6d72] h-[0.5px] w-full"></div>
            {/* bottom */}
            <div className="py-2 text-white">
                    <p>@copyright 2024</p>
            </div>
      </div>
    </div>
  )
}

export default Footer
