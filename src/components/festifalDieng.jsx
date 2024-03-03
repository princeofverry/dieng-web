import React from 'react';
import Carousel from './Carousel';
import FD1 from '../assets/FD1.png'
import FD2 from '../assets/FD2.png'
import FD3 from '../assets/FD3.png'
import FD4 from '../assets/FD4.png'
import FD5 from '../assets/FD5.png'
import { Link } from 'react-router-dom';

const FestivalDieng = () => {
    const images = [
        { src: FD1, title: 'Ruwatan', keterangan: 'Tradisi potong rambut gimbal' },
        { src: FD2, title: 'Festival Lampion', keterangan: 'Festival tahunan Dieng' },
        { src: FD3, title: 'Ruwatan', keterangan: 'Tradisi potong rambut gimbal' },
        { src: FD4, title: 'Baritan', keterangan: 'Acara syukuran hasil panen' },
        { src: FD5, title: 'Festival Lampion', keterangan: 'Festival tahunan Dieng' },
        { src: FD1, title: 'Ruwatan', keterangan: 'Tradisi potong rambut gimbal' },
        { src: FD2, title: 'Festival Lampion', keterangan: 'Festival tahunan Dieng' },
        { src: FD3, title: 'Ruwatan', keterangan: 'Tradisi potong rambut gimbal' },
        { src: FD4, title: 'Baritan', keterangan: 'Acara syukuran hasil panen' },
        { src: FD5, title: 'Festival Lampion', keterangan: 'Festival tahunan Dieng' }
    ];

    return (
        <>
            <div className="bg-white flex flex-col justify-center items-center"
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000">
                <hr className="border-t-4 border-[#e16a44] md:w-24 w-16 mx-auto md:my-8 my-4" />
                <h1 className="text-[#E16A44] md:text-4xl text-xl font-semibold">
                    FESTIVAL DIENG
                </h1>
                <div className="py-6 sm:w-fit w-screen">
                    <Carousel images={images} />
                </div>
                <Link to="/Festival">
                <button className="bg-[#e16a44] px-8 py-4 rounded-lg my-4 text-white">See All</button>
                </Link>
            </div>
        </>
    )
}

export default FestivalDieng
