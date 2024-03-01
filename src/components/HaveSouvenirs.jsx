import React from 'react'
import { Link } from 'react-router-dom';
import edelweis from '../assets/edelweis.png'
import kaos from '../assets/kaos.png'
import syal from '../assets/syal.png'
import tas from '../assets/tas.png'
import aksesoris from '../assets/aksesoris.png'
import belerang from '../assets/belerang.png'
import miniatur from '../assets/miniatur.png'

const HaveSouvenirs = () => {
    const items = [
        {
            image: kaos,
            title: 'Pakaian',
            description: 'Kaos, jaket, dan jenis pakaian lainnya dengan desain seputar wisata Dieng.',
        },
        {
            image: syal,
            title: 'Syal dan Kupluk',
            description: 'Syal dan kupluk rajutan dengan tulisan khas Dieng.',
        },
        {
            image: tas,
            title: 'Tas Bahu',
            description: 'Tas bahu buatan tangan dengan desain unik khas Dieng.',
        },
        {
            image: aksesoris,
            title: 'Aksesoris',
            description: 'Berbagai aksesoris dengan desain khas Dieng, mulai dari gantungan kunci hingga gelang.',
        },
        {
            image: belerang,
            title: 'Hiasan Batu Belerang',
            description: 'Ukiran batu belerang yang diambil langsung dari kawah Sikidang.',
        },
        {
            image: miniatur,
            title: 'Miniatur',
            description: 'Miniatur buatan tangan berbagai bentuk, mulai dari domba, candi, hingga sepeda.',
        },
        // Tambahkan item lainnya sesuai kebutuhan
    ];
    return (
        <>
            <div className="flex flex-col md:flex-row justify-center items-center bg-[#F9F9F9]">
                <div className="w-full md:w-1/3 p-4">
                    <div className="w-full text-center md:py-8 py-0">
                        <h2 className="md:text-6xl text-3xl font-semibold tracking-wide text-[#E16A44] text-center md:text-left md:py-4 py-0">Must-have Souvenirs</h2>
                    </div>
                    
                        <div className="relative rounded-lg py-4">
                            <img src={edelweis} alt="Large Card" className="w-full h-full object-cover mb-4" />
                            <div className="absolute inset-0 flex flex-col justify-end text-white p-4">
                                <h2 className="text-2xl font-bold mb-2">Tanaman Edelweis Mini</h2>
                                <p className="text-sm">Bunga Edelweis dengan bau harum khas yang bisa menjadi hiasan ruangan</p>
                            </div>
                        </div>
                
                </div>

                <div className="w-full md:w-1/2 lg:w-2/3 flex flex-wrap justify-around md:py-16 py-0">
                    {items.map((item, index) => (
                        <div key={index} className="w-full sm:w-1/2 md:w-1/3 p-4" style={{ height: 'calc(100% / 3)' }}>
                          
                                <div className="rounded-lg h-full">
                                    <img src={item.image} alt={`Card ${index + 2}`} className="w-full h-full object-cover mb-2" />
                                    <div className="text-center">
                                        <h3 className="text-lg font-bold text-[#E16A44]">{item.title}</h3>
                                        <h3 className="text-xs mb-2 text-[#606060]">{item.description}</h3>
                                    </div>
                                </div>
                        
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default HaveSouvenirs