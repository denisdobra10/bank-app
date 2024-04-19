import React from 'react'
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { SvgIcon } from '@mui/material';


function AppHeader({ accountType, dateTime, amount, onClick }) {

    const dateTimeToString = (date) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(date).toLocaleDateString('ro-RO', options);
    }

    const amountToString = (amount) => {
        return amount.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    return (
        <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-2 text-paragraph w-full sm:w-fit">

                <div className="flex flex-row gap-2 items-center">
                    <h2 className='text-lg sm:text-3xl font-semibold tracking-wide'>{accountType}</h2>
                    <SvgIcon component={ChangeCircleIcon} onClick={onClick} className='hover:scale-150 transition-all duration-700 ease-in-out hover:cursor-pointer' />
                </div>

                <span className='text-gray-500 italic text-sm sm:text-md'>La data de {dateTimeToString(dateTime)}</span>
            </div>

            <span className='text-paragraphLighter text-xl sm:text-4xl font-normal w-full text-right sm:w-fit'>{amountToString(amount)} lei</span>
        </div>
    )
}

export default AppHeader