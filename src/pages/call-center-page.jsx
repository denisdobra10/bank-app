import React from 'react'
import CallCenterFormular from '../components/call-center/call-center-formular';

function CallCenterPage() {
    return (
        <div className="flex flex-col w-full gap-8 text-center py-8">
            <h1 className='text-paragraph text-3xl sm:text-6xl font-bold'>Ajutor clienti</h1>
            <CallCenterFormular />
        </div>
    )
}

export default CallCenterPage