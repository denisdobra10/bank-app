import React from 'react'
import CallCenterThanksGif from '../../assets/call-center-thanks.gif';

function BookConfirmation() {
    return (
        <div className='flex flex-col gap-16 justify-center items-center'>
            <h2 className='text-3xl font-bold text-primary tracking-wide uppercase'>Iti multumim</h2>
            <img src={CallCenterThanksGif} width={250} alt="Call center thanks graphic" />
            <h2 className='text-3xl font-semibold text-paragraph'>Un membru din <span className='text-primary'>echipa</span> noastra te va contacta in cel mai scurt timp!</h2>
        </div>
    )
}

export default BookConfirmation