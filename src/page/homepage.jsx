import React from 'react'
import { LoremIpsum } from '../components/Lorem'
import Maps from '../components/maps'
import Statistic from '../components/statistic'
import VideoLanding from '../components/VideoLanding'

const Homepage = () => {
    return (
        <>
            <VideoLanding />
            <Maps />
            <Statistic />
        </>
    )
}

export default Homepage