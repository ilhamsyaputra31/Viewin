import React from 'react'
import { Link } from 'react-router-dom';
import user from '../icons/user.svg'
import lock from '../icons/lock.svg'
// import user from '../icons/user.svg'
// import lock from '../icons/lock.svg'

const Login = () => {

  const navigateTo = (url) => {
    window.location.href = url;
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div>
        <h1 className='text-8xl font-bold text-[#2C3D8F] text-center'>Login</h1>
        <div className="my-4 mt-10 rounded-xl "  style={{ border: '2px solid #5A81FA' }}>
          <div className="flex bg-[#fbfcff] rounded-xl overflow-hidden " >
            <img src={user} alt="" className='w-[28px] m-3'/> 
            <input type="text" placeholder="Username" className="py-2 px-4 w-full focus:outline-none bg-[#ffffff] rounded-xl" />
          </div>
        </div>
        <div className="my-4 rounded-xl"  style={{ border: '2px solid #5A81FA' }}>
          <div className="flex bg-[#ffffff] rounded-xl overflow-hidden">
            <img src={lock} alt="" className='w-[28px] m-3'/> 
            <input type="password" placeholder="Password" className="py-2 px-4 w-full focus:outline-none bg-[#fafcff] rounded-xl " />
          </div>
        </div>
        <h1 className='text-right'>Forget Password?</h1>
        <button className='bg-[#2C3D8F] w-[500px] rounded-xl my-4 mx-auto py-2 text-white block font-bold mt-10' onClick={() => navigateTo('/')}>
        <p>Login</p>
        </button>
        <h1 className='text-right'>Don't have an account? <span className='text-[#5A81FA]'><Link to="/register">Sign Up</Link></span></h1>
      </div>
    </div>
  )
}

export default Login
