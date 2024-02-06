import React from 'react'
import videoBg from '../assets/videoBg.mp4'
import scrollGif from '../assets/scroll-down.gif'

const VideoLanding = () => {
    return (
        <>
            <div className="Video h-screen w-full ">
                <video src={videoBg} autoPlay loop muted />
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className='md:text-8xl text-6xl text-white font-bold' data-aos="zoom-in" data-aos-anchor-placement="bottom-bottom" data-aos-duration="700">
                    DIENG
                </h1>
                <p className='md:text-2xl text-sm text-white font-semibold' data-aos="zoom-in" data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, unde!</p>
            </div>
            <div className="absolute bottom-5 h-16 w-16 left-1/2 transform -translate-x-1/2">
                <img src={scrollGif} className="mx-auto w-full h-auto animate-scrollAnimation" alt="Scrolling GIF" />
            </div>
        </>
    )
}

export default VideoLanding