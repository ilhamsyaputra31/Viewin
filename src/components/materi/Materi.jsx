import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbardalam from '../navbar/Navbardalam'
import gambar from '../assets/belajar html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import php from '../assets/php.png'
import icon from '../icons/icon.svg'
import icon_vidio from '../icons/icon_vidio.png'

const Materi = () => {
  const [showCard1, setShowCard1] = useState(false);
  const [showCard2, setShowCard2] = useState(false);
  const [showCard3, setShowCard3] = useState(false);
  const [showCard4, setShowCard4] = useState(false);

  const toggleCard1 = () => {
    setShowCard1(!showCard1);
    if (!showCard1) {
      setShowCard2(false);
      setShowCard3(false);
      setShowCard4(false);
    }
  };

  const toggleCard2 = () => {
    setShowCard2(!showCard2);
    if (!showCard2) {
      setShowCard1(false);
      setShowCard3(false);
      setShowCard4(false);
    }
  };

  const toggleCard3 = () => {
    setShowCard3(!showCard3);
    if (!showCard3) {
      setShowCard1(false);
      setShowCard2(false);
      setShowCard4(false);
    }
  };

  const toggleCard4 = () => {
    setShowCard4(!showCard4);
    if (!showCard4) {
      setShowCard1(false);
      setShowCard2(false);
      setShowCard3(false);
    }
  };
  
  const navigateTo = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <div className='w-full px-4'>
        <Navbardalam />
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">Kategori Kelas</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1 */}
            <div>
              <div className="bg-[#CDDEFF] rounded-3xl shadow-md p-6">
              <div className="flex justify-center mb-4">
                <img src={gambar} alt="HTML icon" className="w-[300px] h-[300]" />
              </div>
              <h2 className="text-xl font-bold mb-2">Belajar HTML</h2>
              <button
                className="rounded-lg bg-white text-black py-2 px-4 focus:outline-none focus:shadow-outline flex justify-between w-[250px] mt-5"
                onClick={toggleCard1}
              >
                Pengenalan Coding
                <img src={icon} alt="" className="w-5 justify-center" />
              </button>

              {showCard1 && (
                <div>
                  <button className=" bg-white text-black py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline flex w-[250px] mt-3" onClick={() => navigateTo('/Materi_HTML')} >
                    <img src={icon_vidio} alt="" className="w-5 justify-center " />
                    <p className='text-xs ml-1'>Persiapan dan Perkenalan HTML</p>
                  </button>
                  <button className=" bg-white text-black py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline flex w-[250px]" onClick={() => navigateTo('/DokumenPertama')}>
                    <img src={icon_vidio} alt="" className="w-5 justify-center" />
                    <p className='text-xs ml-1 '>Dokument Pertama</p>
                  </button>
                  <button className=" bg-white text-black py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline flex w-[250px]" onClick={() => navigateTo('/Paragraph')}>
                    <img src={icon_vidio} alt="" className="w-5 justify-center" />
                    <p to="#" className='text-xs ml-1'>Paragraph</p>
                  </button>
                  <button className=" bg-white text-black py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline flex w-[250px]" onClick={() => navigateTo('/Image')}>
                    <img src={icon_vidio} alt="" className="w-5 justify-center" />
                    <p to="#" className='text-xs ml-1'>Image</p>
                  </button>
                </div>
              )}
            </div>
            </div>

            {/* Card 2 */}
            <div>
              <div className="bg-[#CDDEFF] rounded-3xl shadow-md p-6">
              <div className="flex justify-center mb-4">
                <img src={css} alt="CSS icon" className="w-[300px] h-[300]" />
              </div>
              <h2 className="text-xl font-bold mb-2">Belajar CSS</h2>
              <button
                className="rounded-lg bg-white text-black py-2 px-4 focus:outline-none focus:shadow-outline flex justify-between w-[250px] mt-5"
                onClick={toggleCard2}
              >
                Pengenalan CSS
                <img src={icon} alt="" className="w-5 justify-center" />
              </button>

              {showCard2 && (
               <div>
                  <button className=" bg-white text-black py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline flex w-[250px] mt-3" onClick={() => navigateTo('/CSS_Internal')}>
                    <img src={icon_vidio} alt="" className="w-5 justify-center " />
                    <p to="#" className='text-xs ml-1'>CSS Internal</p>
                  </button>
                  <button className=" bg-white text-black py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline flex w-[250px]" onClick={() => navigateTo('/CSS_Inline')}>
                    <img src={icon_vidio} alt="" className="w-5 justify-center" />
                    <p to="#" className='text-xs ml-1 '>CSS Inline</p>
                  </button>
                  <button className=" bg-white text-black py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline flex w-[250px]" onClick={() => navigateTo('/CSS_Internal')}>
                    <img src={icon_vidio} alt="" className="w-5 justify-center" />
                    <p to="#" className='text-xs ml-1'>CSS Internal</p>
                  </button>
                  <button className=" bg-white text-black py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline flex w-[250px]" onClick={() => navigateTo('/WidhtAndHeight')}>
                    <img src={icon_vidio} alt="" className="w-5 justify-center" />
                    <p to="#" className='text-xs ml-1'>Widht And Height</p>
                  </button>
                </div>
              )}
            </div>
            </div>

            {/* Card 3 */}
           <div>
             <div className="bg-[#CDDEFF] rounded-3xl shadow-md p-6">
              <div className="flex justify-center mb-4">
                <img src={javascript} alt="JavaScript icon" className="w-[300px] h-[300]" />
              </div>
              <h2 className="text-xl font-bold mb-2">Belajar JavaScript</h2>
              <button
                className="rounded-lg bg-white text-black py-2 px-4 focus:outline-none focus:shadow-outline flex justify-between w-[250px] mt-5"
                onClick={toggleCard3}
              >
                Pengenalan JavaScript
                <img src={icon} alt="" className="w-5 justify-center" />
              </button>

              {showCard3 && (
              <div>
                  <button className=" bg-white text-black py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline flex w-[250px] mt-3" onClick={() => navigateTo('/InstallReactjs')}>
                    <img src={icon_vidio} alt="" className="w-5 justify-center " />
                    <p to="#" className='text-xs ml-1'>Internal ReactJS</p>
                  </button>
                  <button className=" bg-white text-black py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline flex w-[250px]" onClick={() => navigateTo('/Mengenaljsx')}>
                    <img src={icon_vidio} alt="" className="w-5 justify-center" />
                    <p to="#" className='text-xs ml-1 '>Mengenal JSX</p>
                  </button>
                  <button className=" bg-white text-black py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline flex w-[250px]" onClick={() => navigateTo('/ReactDOMRender')}>
                    <img src={icon_vidio} alt="" className="w-5 justify-center" />
                    <p to="#" className='text-xs ml-1'>ReactDOM Render</p>
                  </button>
                  <button className=" bg-white text-black py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline flex w-[250px]" onClick={() => navigateTo('/DesignWeb')}>
                    <img src={icon_vidio} alt="" className="w-5 justify-center" />
                    <p to="#" className='text-xs ml-1'>Design Web</p>
                  </button>
                </div>
              )}
            </div>
           </div>

            {/* Card 4 */}
            <div>
              <div className="bg-[#CDDEFF] rounded-3xl shadow-md p-6">
              <div className="flex justify-center mb-4">
                <img src={php} alt="PHP icon" className="w-[300px] h-[300]" />
              </div>
              <h2 className="text-xl font-bold mb-2">Belajar PHP</h2>
              <button
                className="rounded-lg bg-white text-black py-2 px-4 focus:outline-none focus:shadow-outline flex justify-between w-[250px] mt-5"
                onClick={toggleCard4}
              >
                Pengenalan PHP
                <img src={icon} alt="" className="w-5 justify-center" />
              </button>

              {showCard4 && (
               <div>
                  <button className=" bg-white text-black py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline flex w-[250px] mt-3" onClick={() => navigateTo('/SintakDasarPHP')}>
                    <img src={icon_vidio} alt="" className="w-5 justify-center " />
                    <p to="#" className='text-xs ml-1'>Sintak Pada PHP</p>
                  </button>
                  <button className=" bg-white text-black py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline flex w-[250px]" onClick={() => navigateTo('/KomentarPadaPHP')}>
                    <img src={icon_vidio} alt="" className="w-5 justify-center" />
                    <p to="#" className='text-xs ml-1 '>Komentar Pada PHP</p>
                  </button>
                  <button className=" bg-white text-black py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline flex w-[250px]" onClick={() => navigateTo('/VariabelPadaPHP')}>
                    <img src={icon_vidio} alt="" className="w-5 justify-center" />
                    <p to="#" className='text-xs ml-1'>Variabel Pada PHP</p>
                  </button>
                  <button className=" bg-white text-black py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline flex w-[250px]" onClick={() => navigateTo('/TipeDataPHP')}>
                    <img src={icon_vidio} alt="" className="w-5 justify-center" />
                    <p to="#" className='text-xs ml-1'>Tipe Pada PHP</p>
                  </button>
                </div>
              )}
            </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Materi;
