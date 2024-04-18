import React from 'react'
import HomeHero from '../components/home/home-hero'
import HomeAdSection from '../components/home/home-ad-section'
import HomeWhatIsRightForYou from '../components/home/home-what-is-right-for-you'
import PresentationCards from '../components/home/presentation-cards'
import ApplicationAdvertise from '../components/home/application-advertise'


function HomePage() {
    return (
        <div className='flex flex-col w-full'>
            <HomeHero />
            <HomeAdSection />
            <HomeWhatIsRightForYou />
            <ApplicationAdvertise />
            <PresentationCards />
        </div>
    )
}

export default HomePage