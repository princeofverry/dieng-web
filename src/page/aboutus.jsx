import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import aboutusCover from '../assets/aboutusCover.png';
import Logo from '../assets/logo.png'; 
import verry from '../assets/verry.png'; 
import caca from '../assets/caca.png';
import edi from '../assets/edi.png';  

const Aboutus = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="h-screen w-full relative">
      <div className="h-screen w-full relative">
        <img src={aboutusCover} alt="Background" className="h-screen w-full object-cover" />

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className='sm:text-8xl text-4xl text-center text-white font-bold' data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" data-aos-duration="700">
            About Us
          </h1>
        </div>
      </div>

    
      <div className="flex flex-col sm:flex-row justify-center mt-10">
        <div className="max-w-full sm:w-1/2 p-8" data-aos="fade-right" data-aos-duration="1000">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#E16A44] mb-4">Our Website</h2>
          <p className="text-black">
            AtasAwan adalah platform yang menyediakan informasi terkini seputar destinasi pariwisata Dieng. Website ini menjadi sumber terpercaya bagi wisatawan yang ingin menjelajahi keindahan alam dan kekayaan budaya Dieng. AtasAwan menawarkan panduan lengkap mengenai beragam event terbaru, akomodasi pilihan, dan kuliner khas yang dapat dinikmati di Dieng. Dengan konten yang informatif dan inspiratif, AtasAwan akan menemani para wisatawan yang ingin merasakan kesejukan Dieng.
          </p>
        </div>


        <div className="w-full sm:w-1/2" data-aos="fade-left" data-aos-duration="1000">
          <img src={Logo} alt="About Us" className="h-auto w-full object-cover" />
        </div>
      </div>

    
      <div className="text-center mt-10">
        <h2 className="text-4xl font-bold text-[#E16A44]" data-aos="flip-down" data-aos-duration="1000">
          The Team
        </h2>
      </div>



      <div className="flex flex-wrap md:gap-16 gap-4 justify-center items-center mt-8 px-4">
          {/* Card 1 */}
          <div className="card card-compact bg-base-100 w-full sm:w-64" data-aos="zoom-in" data-aos-duration="1500">
            <div className="card-body flex flex-col items-left">
              <figure><img src={verry} alt="Telaga Menjer" /></figure>
              <div className="card-title mt-4 ml-4 text-center">
                <p>Verry Kurniawan</p>
              </div>
             
            </div>
          </div>

          {/* Card 2 */}
          <div className="card card-compact bg-base-100  w-full sm:w-64" data-aos="zoom-in" data-aos-duration="1500"> {/* Adjusted mt-2 class */}
            <div className="card-body flex flex-col items-left">
              <figure><img src={caca} alt="Kawah Sikidang" /></figure>
              
            </div>
            <div className="card-title mt-4 ml-4 text-center">
                <p>Nisrina Azka Salsabila</p>
              </div>
          </div>

          {/* Card 3 */}
          <div className="card card-compact bg-base-100 w-full sm:w-64" data-aos="zoom-in" data-aos-duration="1500">
            <div className="card-body flex flex-col items-left">
              <figure><img src={edi} alt="Candi Arjuna" /></figure>
              <div className="card-title mt-4 ml-4 text-center">
                <p>Edi Wicoro</p>
              </div>
            </div>
          </div>

          </div>
    </div>
  );
}

export default Aboutus;
