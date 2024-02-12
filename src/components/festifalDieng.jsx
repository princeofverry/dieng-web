import React from 'react';
import Carousel from './Carousel';
import FD1 from '../assets/FD1.png'
import FD2 from '../assets/FD2.png'
import FD3 from '../assets/FD3.png'
import FD4 from '../assets/FD4.png'
import FD5 from '../assets/FD5.png'

const FestivalDieng = () => {
    const images = [
        { src: FD1, title: 'Anjay', keterangan: 'Lorem ipsum dolar sit amet' },
        { src: FD2, title: 'Anjay', keterangan: 'Lorem ipsum dolar sit amet' },
        { src: FD3, title: 'Bnjay', keterangan: 'anjay' },
        { src: FD4, title: 'Bjir', keterangan: 'bjir' },
        { src: FD5, title: 'Njay', keterangan: 'anjay' },
        { src: FD1, title: 'Anjay', keterangan: 'Lorem ipsum dolar sit amet' },
        { src: FD2, title: 'Anjay', keterangan: 'Lorem ipsum dolar sit amet' },
        { src: FD3, title: 'Bnjay', keterangan: 'anjay' },
        { src: FD4, title: 'Bjir', keterangan: 'bjir' },
        { src: FD5, title: 'Njay', keterangan: 'anjay' }
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
                <div className="py-4 sm:w-fit w-screen">
                    <Carousel images={images} />
                </div>
                <button className="bg-[#e16a44] px-4 py-2 rounded-lg my-4 text-white">Button</button>
            </div>
        </>
    )
}

export default FestivalDieng
