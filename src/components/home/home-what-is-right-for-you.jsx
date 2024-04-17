import React from 'react'
import IconCard from './icon-card'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import FlightIcon from '@mui/icons-material/Flight';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

function HomeWhatIsRightForYou() {
    return (
        <div className='flex flex-col px-4 sm:px-32 py-8 gap-8 text-center'>
            <h2 className='text-paragraph font-light text-6xl'>Alege ce ti se potriveste</h2>
            <div className="flex flex-row w-full justify-between items-center">
                <IconCard text='Business' icon={BusinessCenterIcon} />
                <IconCard text='Carduri de credit' icon={CreditCardIcon} />
                <IconCard text='Economii' icon={MonetizationOnIcon} />
                <IconCard text='Calatorii' icon={FlightIcon} />
                <IconCard text='Viteza' icon={ElectricBoltIcon} />
            </div>
        </div>
    )
}

export default HomeWhatIsRightForYou