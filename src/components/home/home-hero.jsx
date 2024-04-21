import React from 'react'
import IconTailButton from '../icon-tail-button'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import HeroImage from '../../assets/bank.svg';

function HomeHero() {
    return (
        <div className='flex flex-col sm:flex-row lg:px-32 lg:py-24 gap-8 w-full'>
            <div className="flex flex-col gap-8 text-center justify-center items-center w-full sm:justify-left sm:items-start sm:text-left p-16">
                <h1 className='text-6xl font-bold text-paragraph leading-normal tracking-wider'>
                    Sistem <span className='bg-primary p-2 text-white' >Bancar</span><br /> simplu<br /> si <span className='bg-primary p-2 text-white'>rapid</span>
                </h1>
                <h2 className='text-3xl text-paragraph font-normal tracking-wide'>O experienta bancara placuta si eficienta</h2>

                <IconTailButton text='Afla mai multe' path='#applicationAdvertise' icon={ArrowDownwardIcon} color='primary' />
            </div>
            <div className="flex justify-center items-center w-full">
                <img src={HeroImage} alt="Hero image" className='transition-all hover:scale-105 ease-in-out duration-700' />
            </div>
        </div>
    )
}

export default HomeHero