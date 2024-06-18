import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  
  return (
    <div className='flex justify-between items-center h-24 max-w-[1200px] mx-auto px-4 text-[#2c3D8f]'>
        <h1 className='w-full text-3xl font-bold'>View<span className='text-[#5A81FA]'>in</span></h1>
        <ul className='flex'>
            <li className='p-4 text-xl'><Link to="/Materi">Materi</Link></li>
            <li className='p-4 text-xl'><Link to="/login">Login</Link></li>
        </ul>
    </div>
  )
}

export default Navbar


