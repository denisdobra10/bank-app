import React from 'react'
import { ArrowRightAlt } from '@mui/icons-material'

function ChangePinBox() {
    return (
        <div className="flex flex-col gap-4 px-4 sm:px-12 py-8 bg-gradient-to-r from-lightRed to-darkRed rounded-lg w-full sm:w-5/6">
            <h2 className='text-vanishedBlack font-bold text-xl tracking-wide'>Schimba PIN</h2>

            <form className='flex flex-row gap-2 items-start justify-between'>

                <div className="flex flex-col sm:flex-row gap-2">
                    <div className="flex flex-col gap-2 items-center">
                        <input type="password" name='oldPin' id='oldPin' placeholder='PIN actual' className='text-paragraph placeholder-gray-500 text-center px-2 py-1 bg-opacity-35 bg-white rounded-lg focus:outline-none' />
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <input type="password" name='newPin' id='newPin' placeholder='PIN nou' className='text-paragraph text-center px-2 py-1 bg-opacity-35 bg-white rounded-lg focus:outline-none' />
                    </div>
                </div>

                <button type="submit" className='bg-white rounded-full w-fit sm:w-full px-4 self-center'><ArrowRightAlt /> </button>
            </form>
        </div>
    )
}

export default ChangePinBox