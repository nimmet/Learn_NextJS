
import React from 'react'
import { BiLocationPlus, BiRightArrowAlt, BiCalendar } from "react-icons/bi";
import Navbar from '../Navbar';

const EventDetail = () => {
    const test = {
        id: 'e1',
        title: 'Programming for everyone',
        description:
          'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
        location: 'Somestreet 25, 12345 San Somewhereo',
        date: '2021-05-12',
        image: 'images/coding-event.jpg',
        isFeatured: false,
      }

      const {id,title,description,location,date,image,isFeatured} = test
  return (
    
    <div className='flex flex-col justify-center'>
<Navbar />
    <div className=' bg-teal-700/90 h-[200px] justify-center flex'>
        <h1 className=' lg:text-5xl text-4xl sm:text-3xl text-white mt-10 font-bold'>{test.title}</h1>
    </div>

<div className=' flex flex-row justify-center'>


    <div
                key={id}
                className="flex gap-x-8 my-2 bg-zinc-800 w-[480px] h-[200px] rounded-md justify-center items-center text-green-200
                relative -top-12
                "
              >
          
                <div className=''>
                  <img
                    src={image}
                    
                    alt={id}
                    className=" border-2 border-white rounded-full w-44 h-44"
                  />
                </div>
                <div>
                  <div className="my-2">
                    <BiCalendar />
                    <h1 className="font-[700] text-green-200">{date}</h1>
                  </div>
                  <div className="mt-5">
                    <BiLocationPlus className="" size={20} />
                    <h1 className="w-40">{location}</h1>
                  </div>

                 
                </div>
                
              </div>
              </div>
              <div className=' w-[580px] text-center mx-auto font-[600]'>
                <p>{description}</p>
              </div>
    </div>
  )
}

export default EventDetail