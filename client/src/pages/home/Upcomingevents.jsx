import React from 'react';
import image1 from "../../components/images/image1.jpg";
import image2 from "../../components/images/image2.jpg";
import image3 from "../../components/images/image3.jpg"


function Upcoming() {
  let events =[{
    date:"Feb 09",
    title:"Q & A with the President",
    intro:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, obcaecati accusantium at id a voluptates deleniti temporibus magni aliquid illo tempora, ratione placeat, error dolore?",
    time:"15:00-19:00",
    venue:"online",
    img:image1,
    button:"RSVP",
    id:1
  },{
    date:"Feb 09",
    title:"Q & A with the President",
    intro:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, obcaecati accusantium at id a voluptates deleniti temporibus magni aliquid illo tempora, ratione placeat, error dolore?",
    time:"15:00-19:00",
    venue:"online",
    img:image2,
    button:"RSVP",
    id:2
  },{
    date:"Feb 09",
    title:"Q & A with the President",
    intro:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, obcaecati accusantium at id a voluptates deleniti temporibus magni aliquid illo tempora, ratione placeat, error dolore?",
    time:"15:00-19:00",
    venue:"online",
    img:image3,
    button:"RSVP",
    id:3
  }];
  return (
    <div className='bg-darkbg my-12 '>
    {/* cards container */}
    {/* view name  */}
    <div className="">
      <h1 className='text-2xl text-white py-2 font-bold'>UPCOMING EVENTS</h1>
    </div>
    <div className="">
     {/* cards */}
     {events.map((event)=>(
       <div className="" key={event.id}>
         {/* date */}
         <div className=" text-white border inline-block boreder-white">
           <h1>{event.date}</h1>
         </div>
         
       </div>
     ))}
    </div>
   </div>
  )
}

export default Upcoming;
