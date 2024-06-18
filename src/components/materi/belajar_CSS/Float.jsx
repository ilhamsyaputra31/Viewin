import React from 'react'
import Navbardalammateri from '../../navbar/Navbardalammateri'
import gambar from '../../assets/image CSS.png'
import icon from '../../icons/icon_vidio.png'

const Float = () => {

    const navigateTo = (url) => {
    window.location.href = url;
  };

  return (
    <>
    <div className='w-full px-4'>
        <Navbardalammateri />
        <div className='container mx-auto px-4'>
            <h1 className='text-3xl font-bold text-center mt-10'>Float</h1>
            <p className='text-center mt-2'>learn how to build a real project from scratch</p>

            <div className='max-w-[1240] grid md:grid-cols-3 mt-10 '>
                <div className='relative w-full md:col-span-2 mt-6'>
                    <img src={gambar} alt="" className='w-[750px]' />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg width="70" height="100" viewBox="0 0 155 155" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_614_328)">
                                <path
                                    d="M77.4997 0.583344C37.2497 0.583344 4.58301 33.25 4.58301 73.5C4.58301 113.75 37.2497 146.417 77.4997 146.417C117.75 146.417 150.416 113.75 150.416 73.5C150.416 33.25 117.75 0.583344 77.4997 0.583344ZM62.9163 99.0208L62.9163 47.9792C62.9163 44.9896 66.3434 43.2396 68.7497 45.0625L102.802 70.5833C104.771 72.0417 104.771 74.9583 102.802 76.4167L68.7497 101.938C66.3434 103.76 62.9163 102.01 62.9163 99.0208Z"
                                    fill="#4C4C4C" />
                            </g>
                            <defs>
                                <filter id="filter0_d_614_328" x="0.583008" y="0.583344" width="153.833"
                                    height="153.833" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix"
                                        result="effect1_dropShadow_614_328" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_614_328"
                                        result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>


               <div className="bg-[#F8F9FD] rounded-2xl shadow-md p-6 md:col-span-1" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    <h1 className='text-2xl font-bold pb-7'>Materi Pembelajaran</h1>
                    <button className="bg-[#CDDEFF] text-black py-2 px-4 rounded-3xl flex w-full" onClick={() => navigateTo('/CSS_Internal')}>
                        <img src={icon} alt="" className='w-[40px] mr-3 ' />
                        <span className='mt-2 '>CSS Internal</span>
                    </button>
                    <button className="bg-[#CDDEFF] text-black py-2 px-4 rounded-3xl  flex w-full mt-4" onClick={() => navigateTo('/CSS_Inline')}>
                        <img src={icon} alt="" className='w-[40px] mr-3' />
                        <span className='mt-2 '>CSS Inline</span>
                    </button>
                    <button className="bg-[#CDDEFF] text-black py-2 px-4 rounded-3xl  flex w-full mt-4" onClick={() => navigateTo('/CSS_Eksternal')}>
                        <img src={icon} alt="" className='w-[40px] mr-3' />
                        <span className='mt-2 '>CSS Eksternal</span>
                    </button>
                    <button className="bg-[#CDDEFF] text-black py-2 px-4 rounded-3xl  flex w-full mt-4" onClick={() => navigateTo('/WidhtAndHeight')}>
                        <img src={icon} alt="" className='w-[40px] mr-3' />
                        <span className='mt-2 '>Widht And Height</span>
                    </button>
                    <button className="bg-[#CDDEFF] text-black py-2 px-4 rounded-3xl  flex w-full mt-4" onClick={() => navigateTo('/MarginAndPadding')}>
                        <img src={icon} alt="" className='w-[40px] mr-3' />
                        <span className='mt-2 '>Margin And Padding</span>
                    </button>
                    <button className="bg-[#CDDEFF] text-black py-2 px-4 rounded-3xl  flex w-full mt-4" onClick={() => navigateTo('/Float')}>
                        <img src={icon} alt="" className='w-[40px] mr-3' />
                        <span className='mt-2 '>Float</span>
                    </button>
                    <button className="bg-[#CDDEFF] text-black py-2 px-4 rounded-3xl  flex w-full mt-4" onClick={() => navigateTo('/CSS_Navigation')}>
                        <img src={icon} alt="" className='w-[40px] mr-3' />
                        <span className='mt-2 '>CSS Navigation</span>
                    </button>
                </div>
                
            </div>
        </div>
    </div>
</>
  )
}

export default Float