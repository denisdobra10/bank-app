import React, { useState } from 'react'


function ContactDataFormular({ title, onBtnClicked, btnText }) {
    const [inputValue, setInputValue] = useState('');

    const submitAnswer = (value) => {
        onBtnClicked(value);
        setInputValue('');
    }

    return (
        <div className="flex flex-col gap-4 items-start p-2 sm:p-4 w-full">
            <h2 className='text-4xl font-semibold tracking-wider'>{title}</h2>

            <input type="text" name="contactData" id="contactData" placeholder='Scrie aici' className='flex w-full p-4 text-black rounded-lg' onChange={(event) => setInputValue(event.target.value)} />
            <button className='flex text-center bg-secondary text-white w-full py-4 px-8 justify-center rounded-lg text-lg font-semibold tracking-wide' onClick={() => submitAnswer(inputValue)} >{btnText}</button>
        </div>
    )
}

export default ContactDataFormular