import React from 'react'
import LinkButton from '../link-button'

function HomeAdSection() {
    return (
        <div className='flex flex-col sm:flex-row gap-8 w-full bg-primary p-4 sm:p-32'>

            <div className="flex flex-row w-full sm:w-3/5 gap-2">
                <div className="flex flex-col w-full">
                    <h3 className='text-white font-medium text-lg sm:text-2xl'>Bucura-te de cadou</h3>
                    <h2 className='text-white text-2xl sm:text-8xl font-bold italic'>200 lei</h2>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <h2 className='text-white font-light text-lg sm:text-3xl'>
                        Inca nu ai un cont?
                    </h2>
                    <h3 className='text-white font-normal text-lg'>Deschide contul de Internet Banking de la ROBANK chiar acum, cu doar cateva click-uri</h3>
                </div>
            </div>

            <div className="flex flex-col w-full sm:w-2/5">

                <div className="flex flex-col bg-white rounded-lg p-8 gap-2">
                    <h2 className='text-3xl text-paragraph font-normal'>Salutare,</h2>
                    <LinkButton text='Creeaza cont' to='/signup' className={'w-full'} />
                    <h3 className='mt-4 text-sm italic text-paragraph'>si beneficiezi de serviciile noastre complete</h3>
                </div>

            </div>

        </div>
    )
}

export default HomeAdSection