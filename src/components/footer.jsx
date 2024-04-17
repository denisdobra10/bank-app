import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { SvgIcon } from '@mui/material';

function Footer() {
    return (
        <div className="flex flex-row w-full bg-primary justify-center items-center text-white py-16 text-center ">
            <p>Proiect realizat cu</p>
            <SvgIcon component={FavoriteIcon} fontSize='medium' className='mx-4 text-secondary' />
            <p>in cadrul FSEGA @ UBB 2024</p>
        </div>
    )
}

export default Footer