import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';
import ArrowRightIcon from '../assets/arrow-right.svg';
import { Toaster, toast } from 'sonner';


function LoginPage() {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        return;
    };

    return (
        <div className='flex flex-col w-full h-[100vh] bg-appbg justify-center items-center gap-8'>
            <Link to={'/'}><img src={logo} width={'400px'} alt="Logo" /></Link>
            <h2 className='text-paragraphLighter text-xl font-medium tracking-wider'>Log in pentru a intra in cont</h2>

            <form onSubmit={handleSubmit} className='flex flex-col px-8 w-full sm:w-1/3 gap-4'>
                <input
                    className='flex w-full bg-white rounded-full p-8 text-center '
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <input
                    className='flex w-full bg-white rounded-full p-8 text-center '
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Parola"
                    required
                />
                <button type="submit" className='flex self-center w-fit mt-4'>
                    <img src={ArrowRightIcon} width={50} />
                </button>
            </form>

            <Link to={'/'} className='text-primary underline font-semibold tracking-wider'>Inapoi pe website</Link>

            <Toaster richColors position='top-right' />
        </div>
    )
}

export default LoginPage