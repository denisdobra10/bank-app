import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Link } from 'react-router-dom';
import { SvgIcon } from '@mui/material';

function IconTailButton({ text = 'Button', icon = ArrowDownwardIcon, path = '/' }) {
    return (
        <Link to={path} className={`flex flex-row justify-between items-center underline font-bold text-xl mb-2 gap-1 w-fit text-primary hover:text-primaryHover`}>
            <p>{text}</p>
            <SvgIcon component={icon} />
        </Link>
    )
}

export default IconTailButton
