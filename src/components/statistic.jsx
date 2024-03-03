import React from 'react'
import people from "../assets/people.png"
import flag from '../assets/flag.png'
import routing from '../assets/routing.png'
import Couting from './couting'

const Statistic = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row lg:justify-evenly items-center gap-24 py-16 bg-white" data-aos="zoom-in-down">
                {/* statistik */}
                <div className='flex items-center gap-4'>
                    <img src={people} />
                    {/* text */}
                    <div className='text-[#e16a44]'>
                        <h1 className='text-2xl font-bold' s><Couting angka={5245} /></h1>
                        <p className='text-lg'>Happy Visitors</p>
                    </div>
                </div>
                {/* destinasi */}
                <div className='flex items-center gap-4'>
                    <img src={routing} />
                    {/* text */}
                    <div className='text-[#e16a44]'>
                        <h1 className='text-2xl font-bold' s><Couting angka={38} /></h1>
                        <p className='text-lg'>Destinations</p>
                    </div>
                </div>
                {/* flag */}
                <div className='flex items-center gap-4'>
                    <img src={flag} />
                    {/* text */}
                    <div className='text-[#e16a44]'>
                        <h1 className='text-2xl font-bold' s><Couting angka={17} /></h1>
                        <p className='text-lg'>Events</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Statistic