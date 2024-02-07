import React from 'react'
import people from "../assets/people.png"
import flag from '../assets/flag.png'
import routing from '../assets/routing.png'

const Statistic = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row lg:justify-evenly items-center lg:space-x-80 gap-16 py-16">
                {/* statistik */}
                <div className='flex items-center gap-4'>
                    <img src={people} />
                    {/* text */}
                    <div className='text-[#e16a44]'>
                        <h1 className='text-xl font-bold' s>5,245</h1>
                        <p className='text-sm'>Happy Visitors</p>
                    </div>
                </div>
                {/* destinasi */}
                <div className='flex items-center gap-4'>
                    <img src={routing} />
                    {/* text */}
                    <div className='text-[#e16a44]'>
                        <h1 className='text-xl font-bold' s>5,245</h1>
                        <p className='text-sm'>Destination</p>
                    </div>
                </div>
                {/* flag */}
                <div className='flex items-center gap-4'>
                    <img src={flag} />
                    {/* text */}
                    <div className='text-[#e16a44]'>
                        <h1 className='text-xl font-bold' s>5,245</h1>
                        <p className='text-sm'>Event</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Statistic