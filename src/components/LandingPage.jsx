import React from 'react'
import Navbar from '../components/navbar/Navbar'
import gambar from '../components/assets/gambar.png'
import icon from '../components/icons/icon_vidio.png'



const LandingPage = () => {
  return (
   <>
    <div className='w-full px-4'>
   <Navbar/>
        <div className='max-w-[1240] mx-auto grid md:grid-cols-2'>
                <div className='flex flex-col justify-center mx-auto'>
                    <h1 className='text-3xl font-bold' >Tingkatkan Pembelajaran <br /> Anda Ke Tingkat Selanjutnya</h1>
                    <div className='flex justify-between pt-10 '>
                        <p className='my-6 py-3 text-2xl'>Apa itu Viewin?</p>
                        <button className='bg-[#5A81FA] w-[200px] rounded-2xl my-4 mx-auto py-2 text-white font-bold'>
                            <div className='flex justify-center'>
                              <img src={icon} alt="" className='w-[60px] mr-6'/> 
                              <span className='mt-3 mr-5 text-2xl' >Mulai</span>
                            </div>
                          </button>
                        
                    </div>
                </div>
                 <img src={gambar} alt="" className='w-[500px] mx-auto my-4'/>
        </div>
    </div>
   </> 
  )
}

export default LandingPage