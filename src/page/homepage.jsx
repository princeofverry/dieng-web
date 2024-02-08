import React from 'react'
import { LoremIpsum } from '../components/Lorem'
import Maps from '../components/maps'
import Statistic from '../components/statistic'
import VideoLanding from '../components/VideoLanding'
import WelcomingText from '../components/welcomingText'

const Homepage = () => {
    return (
        <>
            <VideoLanding />
            <WelcomingText />
            <Maps />
            <Statistic />
        </>
    )
}

export default Homepage