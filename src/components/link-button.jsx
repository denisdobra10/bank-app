import React from 'react'
import { Link } from 'react-router-dom';

function LinkButton({ text = 'Button', to = '/', className }) {
    return (
        <Link to={to} className={`inline-flex w-fit rounded-sm px-8 py-2 justify-center items-center hover:bg-primaryHover bg-primary text-white ${className}`}>
            {text}
        </Link>
    )
}

export default LinkButton;