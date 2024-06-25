import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigateTo = (url) => {
    window.location.href = url;
  };

  const handleRegister = () => {
    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }
    
    console.log('Registration success! Redirecting to login page...');
    navigateTo('/login');
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="text-center">
        <h1 className='text-8xl font-bold text-[#2C3D8F]'>Register</h1>
        <div className="my-4 mt-14 rounded-xl" style={{ border: '2px solid #5A81FA' }}>
          <input
            type="text"
            placeholder="Username"
            className="bg-[#ffffff] w-[500px] rounded-xl py-2 text-black block mx-auto px-4 focus:outline-none text-center"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="my-4 rounded-xl" style={{ border: '2px solid #5A81FA' }}>
          <input
            type="email"
            placeholder="Email"
            className="bg-[#ffffff] w-[500px] rounded-xl py-2 text-black block mx-auto px-4 focus:outline-none text-center"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-4 rounded-xl" style={{ border: '2px solid #5A81FA' }}>
          <input
            type="password"
            placeholder="Password"
            className="bg-[#ffffff] w-[500px] rounded-xl py-2 text-black block mx-auto px-4 focus:outline-none text-center"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="my-4 rounded-xl" style={{ border: '2px solid #5A81FA' }}>
          <input
            type="password"
            placeholder="Confirm Your Password"
            className="bg-[#ffffff] w-[500px] rounded-xl py-2 text-black block mx-auto px-4 focus:outline-none text-center"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <h1 className='text-right'>Forget Password?</h1>
        <button
          className='bg-[#2C3D8F] w-[500px] rounded-xl my-4 mx-auto py-2 text-white block font-bold mt-10'
          onClick={handleRegister}
        >
          <p>Continue</p>
        </button>
        <h1 className='text-right'>Already have an account? <span className='text-[#5A81FA]'><Link to="/login">Login</Link></span></h1>
      </div>
    </div>
  );
};

export default Register;
