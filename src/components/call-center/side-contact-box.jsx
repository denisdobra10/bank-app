import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { SvgIcon } from '@mui/material';

function SideContactBox({ onClick, activeTab }) {

    const activeStyle = 'flex flex-row w-full gap-2 p-2 text-sm items-center bg-black bg-opacity-20 rounded-lg hover:cursor-pointer';
    const inactiveStyle = 'flex flex-row w-full gap-2 p-2 text-sm items-center rounded-lg hover:cursor-pointer';

    return (
        <>
            <h2 className='uppercase font-bold mb-4'>Cum ne poti contacta?</h2>

            <div className={(activeTab == 0) ? activeStyle : inactiveStyle} onClick={() => onClick(0)}>
                <SvgIcon component={FiberManualRecordIcon} className='text-white' />
                <span>Call Center</span>
            </div>

            <div className={(activeTab == 1) ? activeStyle : inactiveStyle} onClick={() => onClick(1)}>
                <SvgIcon component={FiberManualRecordIcon} className='text-white' />
                <span>Formular de contact</span>
            </div>
        </>

    )
}

export default SideContactBox