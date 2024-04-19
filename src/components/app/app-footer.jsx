import React from 'react'
import GiveLoanBox from './action-boxes/give-loan-box'

function AppFooter() {
    return (
        <div className="flex flex-col sm:flex-row gap-8 my-8 items-center">

            <div className="flex flex-col w-full gap-4 mt-16 sm:mt-4">

                <div className="flex flex-row gap-4">
                    <div className="flex flex-row gap-1 items-center">
                        <h2 className='text-black text-md'>Suma imprumutata</h2>
                        <span className='text-darkGreen text-xl font-semibold'>0 lei</span>
                    </div>

                    <div className="flex flex-row gap-1 items-center">
                        <h2 className='text-black text-md'>Dobanda acumulata</h2>
                        <span className='text-darkGreen text-xl font-semibold'>2.200,49 lei</span>
                    </div>
                </div>

                <button className='w-full py-4 text-center bg-gradient-to-r from-lightGreen to-darkGreen rounded-full text-paragraph font-bold text-lg tracking-widest hover:shadow-lg hover:shadow-lightGreen'>Logout</button>
            </div>

            <div className="flex w-full">
                <GiveLoanBox />
            </div>

        </div>
    )
}

export default AppFooter