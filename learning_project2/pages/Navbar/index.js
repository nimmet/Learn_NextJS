import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    
        <div className=' w-full  bg-zinc-800'>
            <ul className=' flex justify-around items-center h-14'>
                <li className=' text-cyan-200 text-2xl font-[500] justify-self-center'>NextEvents</li>
                <li className=' text-green-200 justify-self-center font-[400]'>
                <Link href="/AllEvents">
                Browse All Events
                </Link>
                 </li>
            </ul>
        </div>
   
  )
}

export default Navbar