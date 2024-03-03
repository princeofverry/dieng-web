import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import destinasiCover from '../assets/destinasiCover.jpg';
import menjer from '../assets/menjer.png';
import sikidang from '../assets/sikidang.png';
import candi from '../assets/candi.png';
import angkruk from '../assets/angkruk.png';
import museum from '../assets/museum.png';
import sikunir from '../assets/sikunir.png';
import sikarim from '../assets/sikarim.png';
import tambi from '../assets/tambi.png';
import warna from '../assets/warna.png';


const Destinasi = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="">
      <div className="h-screen w-full">
        <img src={menjer} alt="Background" className="h-screen w-full object-cover" />

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className='sm:text-6xl text-4xl text-center text-white font-bold' data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" data-aos-duration="700">
            Tourism Destination
          </h1>
          <p className='sm:text-6xl text-4xl text-white font-semibold' data-aos="zoom-in" data-aos-duration="1000">...</p>
        </div>
      </div>

      <div className="md:mx-auto bg-[#F9F9F9]">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#E16A44] mb-4 px-4 mt-8 text-center" data-aos="zoom-in" data-aos-duration="1000">FIND YOUR DESTINATION RIGHT NOW!</h2>
        <div className="flex items-center justify-center mb-2 md:mb-0 px-4">
          <span className="font-regular text-gray-800 text-center" data-aos="zoom-in" data-aos-duration="1000">Daftar destinasi Dieng dengan harga yang bersahabat, silahkan pilih sesuai keinginan</span>
        </div>

        <div className="flex flex-wrap md:gap-16 gap-4 justify-center items-center mt-8 px-4">
          {/* Card 1 */}
          <div className="card card-compact bg-base-100 shadow-xl w-full sm:w-96" data-aos="zoom-in" data-aos-duration="1500">
            <div className="card-body flex flex-col items-left">
            <Link to="/Menjer">
              <figure><img src={menjer} alt="Telaga Menjer" /></figure>
            </Link>
              <div className="card-title mt-4 ml-4">
                <p>07.00 - 17.00</p>
              </div>
              <h2 className='sm:text-2xl text-4xl text-left ml-4 mb-6 font-bold'>Telaga Menjer</h2>
              <div className="card-actions mt-2 ml-4 mb-6">
                <Link to="/Menjer">
                  <button className="bg-[#E16A44] text-white px-4 py-2 font-bold rounded text-sm">SELENGKAPNYA</button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card card-compact bg-base-100 shadow-xl w-full sm:w-96" data-aos="zoom-in" data-aos-duration="1500"> {/* Adjusted mt-2 class */}
            <div className="card-body flex flex-col items-left">
              <figure><img src={sikidang} alt="Kawah Sikidang" /></figure>
              <div className="card-title mt-4 ml-4">
                <p>07.00 - 17.00</p>
              </div>
              <h2 className='sm:text-2xl text-4xl text-left ml-4 mb-6 font-bold'>Kawah Sikidang</h2>
              <div className="card-actions mt-2 ml-4 mb-6">
                <button className="bg-[#E16A44] text-white px-4 py-2 font-bold rounded text-sm">SELENGKAPNYA</button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card card-compact bg-base-100 shadow-xl w-full sm:w-96" data-aos="zoom-in" data-aos-duration="1500">
            <div className="card-body flex flex-col items-left">
              <figure><img src={candi} alt="Candi Arjuna" /></figure>
              <div className="card-title mt-4 ml-4">
                <p>07.00 - 17.00</p>
              </div>
              <h2 className='sm:text-2xl text-4xl text-left ml-4 mb-6 font-bold'>Candi Arjuna</h2>
              <div className="card-actions mt-2 ml-4 mb-6">
                <button className="bg-[#E16A44] text-white px-4 py-2 font-bold rounded text-sm">SELENGKAPNYA</button>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card card-compact bg-base-100 shadow-xl w-full sm:w-96" data-aos="zoom-in" data-aos-duration="1500">
            <div className="card-body flex flex-col items-left">
              <figure><img src={sikarim} alt="Curug Sikarim" /></figure>
              <div className="card-title mt-4 ml-4">
                <p>07.00 - 17.00</p>
              </div>
              <h2 className='sm:text-2xl text-4xl text-left ml-4 mb-6 font-bold'>Curug Sikarim</h2>
              <div className="card-actions mt-2 ml-4 mb-6">
                <button className="bg-[#E16A44] text-white px-4 py-2 font-bold rounded text-sm">SELENGKAPNYA</button>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="card card-compact bg-base-100 shadow-xl w-full sm:w-96" data-aos="zoom-in" data-aos-duration="1500">
            <div className="card-body flex flex-col items-left">
              <figure><img src={warna} alt="Telaga Warna" /></figure>
              <div className="card-title mt-4 ml-4">
                <p>07.00 - 17.00</p>
              </div>
              <h2 className='sm:text-2xl text-4xl text-left ml-4 mb-6 font-bold'>Telaga Warna</h2>
              <div className="card-actions mt-2 ml-4 mb-6">
                <button className="bg-[#E16A44] text-white px-4 py-2 font-bold rounded text-sm">SELENGKAPNYA</button>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="card card-compact bg-base-100 shadow-xl w-full sm:w-96" data-aos="zoom-in" data-aos-duration="1500">
            <div className="card-body flex flex-col items-left">
              <figure><img src={angkruk} alt="Batu Angkruk" /></figure>
              <div className="card-title mt-4 ml-4">
                <p>07.00 - 17.00</p>
              </div>
              <h2 className='sm:text-2xl text-4xl text-left ml-4 mb-6 font-bold'>Batu Angkruk</h2>
              <div className="card-actions mt-2 ml-4 mb-6">
                <button className="bg-[#E16A44] text-white px-4 py-2 font-bold rounded text-sm">SELENGKAPNYA</button>
              </div>
            </div>
          </div>


          {/* Card 7 */}
          <div className="card card-compact bg-base-100 shadow-xl w-full sm:w-96" data-aos="zoom-in" data-aos-duration="1500">
            <div className="card-body flex flex-col items-left">
              <figure><img src={museum} alt="Museum Kailasa" /></figure>
              <div className="card-title mt-4 ml-4">
                <p>07.00 - 17.00</p>
              </div>
              <h2 className='sm:text-2xl text-4xl text-left ml-4 mb-6 font-bold'>Museum Kailasa</h2>
              <div className="card-actions mt-2 ml-4 mb-6">
                <button className="bg-[#E16A44] text-white px-4 py-2 font-bold rounded text-sm">SELENGKAPNYA</button>
              </div>
            </div>
          </div>

          {/* Card 8 */}
          <div className="card card-compact bg-base-100 shadow-xl w-full sm:w-96" data-aos="zoom-in" data-aos-duration="1500">
            <div className="card-body flex flex-col items-left">
              <figure><img src={sikunir} alt="Bukit Sikunir" /></figure>
              <div className="card-title mt-4 ml-4">
                <p>07.00 - 17.00</p>
              </div>
              <h2 className='sm:text-2xl text-4xl text-left ml-4 mb-6 font-bold'>Bukit Sikunir</h2>
              <div className="card-actions mt-2 ml-4 mb-6">
                <button className="bg-[#E16A44] text-white px-4 py-2 font-bold rounded text-sm">SELENGKAPNYA</button>
              </div>
            </div>
          </div>

          {/* Card 9 */}
          <div className="card card-compact bg-base-100 shadow-xl w-full sm:w-96" data-aos="zoom-in" data-aos-duration="1500">
            <div className="card-body flex flex-col items-left">
              <figure><img src={tambi} alt="Kebun Teh Tambi" /></figure>
              <div className="card-title mt-4 ml-4">
                <p>07.00 - 17.00</p>
              </div>
              <h2 className='sm:text-2xl text-4xl text-left ml-4 mb-6 font-bold'>Kebun Teh Tambi</h2>
              <div className="card-actions mt-2 ml-4 mb-6">
                <button className="bg-[#E16A44] text-white px-4 py-2 font-bold rounded text-sm">SELENGKAPNYA</button>
              </div>
            </div>
          </div>

        </div>

        <div className="flex justify-center py-8">
          <button className="btn btn-circle btn-neutral-gray mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button className="btn btn-circle btn-bg-color mr-2">
            <span className="text-271E1B font-bold">1</span>
          </button>
          <button className="btn btn-circle btn-neutral-gray mr-2 font-regular text-gray">2</button>
          <button className="btn btn-circle btn-neutral-[271E1B]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Destinasi;