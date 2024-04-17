import React from 'react'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { SvgIcon, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function IconCard({ text = "Title", icon = BusinessCenterIcon, iconStyle, textStyle }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div className='flex flex-col gap-2 justify-center items-center'>
            <SvgIcon component={icon} className={`transition-all hover:scale-105 ease-in-out duration-700 ${iconStyle}`} style={{ fontSize: isMobile ? '3rem' : '5rem' }} />
            <h2 className={`text-lg font-medium text-primary ${textStyle}`}>{text}</h2>
        </div>
    )
}

export default IconCard