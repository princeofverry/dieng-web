import React, { useEffect } from 'react';
import penginapanCover from '../assets/penginapanCover.png';
import CarouselPenginapan from '../components/CarouselPenginapan';
import FD1 from '../assets/FD1.png'
import FD2 from '../assets/FD2.png'
import FD3 from '../assets/FD3.png'
import FD4 from '../assets/FD4.png'
import FD5 from '../assets/FD5.png'

const Penginapan = () => {
  const images = [
    { src: FD1, title: 'Glamping Dieng Cool', rating: 4.6, harga: '$100' },
    { src: FD2, title: 'Glamping Dieng Cool', rating: 4.6, harga: '$120' },
    { src: FD3, title: 'Glamping Dieng Cool', rating: 2.5, harga: '$80' },
    { src: FD4, title: 'Glamping Dieng Cool', rating: 1.5, harga: '$90' },
    { src: FD5, title: 'Golden Orchid Villa', rating: 2, harga: '$150' },
    { src: FD1, title: 'Golden Orchid Villa', rating: 4, harga: '$200' },
    { src: FD2, title: 'Anjay', rating: 3, harga: '$60' },
    { src: FD3, title: 'Bnjay', rating: 2, harga: '$70' },
    { src: FD4, title: 'Bjir', rating: 1, harga: '$110' },
    { src: FD5, title: 'Njay', rating: 3, harga: '$140' }
  ];

  return (
    <>
      <div className="h-screen w-full">
        <img src={penginapanCover} alt="Background" className="h-screen w-full object-cover" />

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className='sm:text-6xl text-4xl text-center text-white font-bold' data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" data-aos-duration="700">
            Rest Comfortably in Dieng
          </h1>
        </div>

      </div>

      <div className="md:mx-auto bg-white flex flex-col justify-center items-center py-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#E16A44] mb-4 px-4 mt-4">PLACE TO STAY</h2>
      </div>

      <div className="">
        <CarouselPenginapan images={images} />
      </div>
    </>




  )
}

export default Penginapan;