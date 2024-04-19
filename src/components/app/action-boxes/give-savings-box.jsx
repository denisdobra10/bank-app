import React from 'react'
import { ArrowRightAlt } from '@mui/icons-material'

function GiveSavingsBox() {
    return (
        <div className="flex flex-col gap-4 px-4 sm:px-12 py-8 bg-gradient-to-r from-darkYellow to-lightYellow rounded-lg w-full sm:w-5/6">
            <h2 className='text-vanishedBlack font-bold text-xl tracking-wide'>Transfera in Contul de Economii</h2>

            <form className='flex flex-row gap-4 items-center'>

                <div className="flex flex-row gap-2">
                    <div className="flex flex-col gap-2 items-center">
                        <input type="text" name='giveSavingsAmount' id='giveSavingsAmount' placeholder='Suma de depus' className='text-paragraph text-center px-2 py-1 bg-opacity-35 bg-white rounded-lg focus:outline-none' />
                    </div>
                </div>

                <button type="submit" className='bg-white rounded-full w-fit px-4'><ArrowRightAlt /> </button>
            </form>
        </div>
    )
}

export default GiveSavingsBox