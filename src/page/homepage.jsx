import React from 'react'
import DiengBanjarnegara from '../components/diengBanjarnegara'
import DiscoverDieng from '../components/discoverDieng'
import FestivalDieng from '../components/festifalDieng'
import { LoremIpsum } from '../components/Lorem'
import Maps from '../components/maps'
import OurGallery from '../components/ourGallery'
import Statistic from '../components/statistic'
import Testimonial from '../components/Testimonial'
import VideoLanding from '../components/VideoLanding'
import WelcomingText from '../components/welcomingText'

const Homepage = () => {
    return (
        <>
            <VideoLanding />
            <WelcomingText />
            <DiengBanjarnegara />
            <Statistic />
            <DiscoverDieng />
            <FestivalDieng />
            <OurGallery />
            <Maps />
            <Testimonial />
        </>
    )
}

export default Homepage