import React from 'react'
import videoBg from '../assets/videoBg.mp4'
import scrollGif from '../assets/scroll-down.gif'

const VideoLanding = () => {
    return (
        <>
            <div className="Video">
                <video src={videoBg} autoPlay loop muted />
            </div>
            <div className="absolute bottom-1 h-16 w-16 left-1/2 transform -translate-x-1/2">
                <img src={scrollGif} className="mx-auto w-full h-auto animate-scrollAnimation" alt="Scrolling GIF" />
            </div>
        </>
    )
}

export default VideoLanding