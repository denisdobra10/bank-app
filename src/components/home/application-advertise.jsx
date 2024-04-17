import React from 'react'
import AppImage from '../../assets/app.gif'

function ApplicationAdvertise() {
    return (
        <div className="flex flex-row w-full justify-center items-center gap-8 px-8 sm:px-32 py-16">
            <div className="flex w-full justify-center items-center">
                <img src={AppImage} alt="App presentation image" className='transition-all hover:scale-105 ease-in-out duration-700' />
            </div>

            <div className="flex w-full">
                <div className="flex flex-col sm:w-3/4 gap-4">
                    <h2 className='text-paragraph text-2xl sm:text-6xl leading-snug'>Totul online din<br /> aplicatie</h2>
                    <h3 className='text-paragraph text-md'>Ai la indemana rapoarte financiare, extrase de cont. Afla in orice moment cati bani ai strans, cati bani ai mai castigat si azi, dar si pe ce ai cheltuit. Totul folosind apliatia <span className='text-primary font-bold'>ROBANK</span>.</h3>
                </div>
            </div>

        </div>
    )
}

export default ApplicationAdvertise