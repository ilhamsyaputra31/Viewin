import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {

  const navigateTo = (url) => {
    window.location.href = url;
  };
  
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="text-center">
        <h1 className='text-8xl font-bold text-[#2C3D8F]'>Register</h1>
        <div className="my-4 mt-14 rounded-xl"  style={{ border: '2px solid #5A81FA' }}>
          <input type="text" placeholder="Username" className="bg-[#ffffff] w-[500px] rounded-xl py-2 text-black block mx-auto px-4 focus:outline-none text-center" />
        </div>
        <div className="my-4 rounded-xl"  style={{ border: '2px solid #5A81FA' }}>
          <input type="Email" placeholder="Email" className="bg-[#ffffff] w-[500px] rounded-xl py-2 text-black block mx-auto px-4 focus:outline-none text-center" />
        </div>
        <div className="my-4 rounded-xl"  style={{ border: '2px solid #5A81FA' }}>
          <input type="Password" placeholder="Password" className="bg-[#ffffff] w-[500px] rounded-xl py-2 text-black block mx-auto px-4 focus:outline-none text-center" />
        </div>
        <div className="my-4 rounded-xl"  style={{ border: '2px solid #5A81FA' }}>
          <input type="Password" placeholder="Confirm Your Password" className="bg-[#ffffff] w-[500px] rounded-xl py-2 text-black block mx-auto px-4 focus:outline-none text-center" />
        </div>
      
        <h1 className='text-right'>Forget Password?</h1>
        <button className='bg-[#2C3D8F] w-[500px] rounded-xl my-4 mx-auto py-2 text-white block font-bold mt-10' onClick={() => navigateTo('/login')}>
          <p>Continue</p>
        </button>
        <h1 className='text-right'>Already have an account? <span className='text-[#5A81FA]'><Link to="/login">Login</Link></span></h1>
      </div>
    </div>

  )
}

export default Register
