import React from 'react'
import logo from '../assets/logo.svg'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
    const location = useLocation();
    const pathName = location.pathname;

    const linkActive = 'text-red-500';
    const linkStyle = 'hover:text-red-500 hover:underline';

    return (

        <div className='hidden sm:flex sm:flex-row bg-background justify-between items-center px-32 py-8'>
            <Link to={'/'}><img src={logo} width={'150px'} alt="Logo" /></Link>


            <div id="links" className='flex flex-row items-center gap-4 text-lg font-medium text-paragraph gap-x-12'>
                <Link to={'/'} className={pathName == '/' ? linkActive : linkStyle}>Acasa</Link>
                <Link to={'/call-center'} className={pathName == '/call-center' ? linkActive : linkStyle}>Call Center</Link>
                <Link to={'/booking'} className={pathName == '/booking' ? linkActive : linkStyle}>Programeaza-te</Link>
                <Link to={'/app'} className='bg-primary text-white px-8 py-4 rounded-3xl'>Internet Banking</Link>
            </div>
        </div>
    )
}

export default Navbar