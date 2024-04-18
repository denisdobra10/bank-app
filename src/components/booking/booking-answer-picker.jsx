import React, { useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import { SvgIcon } from '@mui/material';

function BookingAnswerPicker({ title, objects, onBtnClicked, btnText }) {
    const [selectedItem, setSeletecItem] = useState(0);

    const activeItemStyle = 'flex flex-row p-4 gap-4 border-2 border-paragraph bg-white text-paragraph w-full rounded-xl shadow-md shadow-paragraph items-center hover:cursor-pointer';
    const inactiveItemStyle = 'flex flex-row p-4 gap-4 hover:border-2 border-paragraph bg-white text-paragraph w-full rounded-xl shadow-md shadow-paragraph items-center hover:cursor-pointer';

    const submitAnswer = (value) => {
        onBtnClicked(value);
        setSeletecItem(0);
    }


    return (
        <div className="flex flex-col gap-4 items-start p-2 sm:p-4 w-full">
            <h2 className='text-4xl font-semibold tracking-wider'>{title}</h2>

            {objects.map((object, index) => (
                <div key={index} className='w-full'>
                    <div className={(selectedItem === index) ? activeItemStyle : inactiveItemStyle} onClick={() => setSeletecItem(index)}>
                        {(selectedItem === index) ? (
                            <div className="flex rounded-full bg-primary p-1">
                                <SvgIcon component={CheckIcon} className='text-white' />
                            </div>
                        ) : (
                            <div className="flex rounded-full bg-gray-200 p-4 shadow-sm border border-paragraph"></div>
                        )}
                        <span>{object}</span>
                    </div>
                </div>
            ))}


            <button className='flex text-center bg-secondary text-white w-full py-4 px-8 justify-center rounded-lg text-lg font-semibold tracking-wide' onClick={() => submitAnswer(objects[selectedItem])} >{btnText}</button>
        </div>
    )
}

export default BookingAnswerPicker