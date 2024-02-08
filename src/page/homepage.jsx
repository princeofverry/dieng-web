import React from 'react'
import DiengBanjarnegara from '../components/diengBanjarnegara'
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
            <DiengBanjarnegara />
            <Statistic />
            <Maps />
        </>
    )
}

export default Homepage