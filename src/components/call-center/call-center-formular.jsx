import React, { useState } from 'react'
import SideContactBox from './side-contact-box';
import CallFormular from './call-formular';
import ContactFormular from './contact-formular';

function CallCenterFormular() {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className='flex flex-col sm:flex-row w-full p-8 px-4 sm:px-32 gap-8'>

            <div className="flex flex-col w-full sm:w-[25%] gap-2 bg-primary p-8 rounded-3xl text-white justify-center items-start max-h-48">
                <SideContactBox activeTab={activeTab} onClick={setActiveTab} />
            </div>

            <div className="flex flex-col w-full sm:w-[60%] gap-2 bg-primary p-8 rounded-3xl text-white justify-center items-center">
                {(activeTab == 0) ? <CallFormular /> : <ContactFormular />}
            </div>

            <div className="flex flex-col w-full sm:w-[25%]">

            </div>

        </div>
    )
}

export default CallCenterFormular