import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import ArrowRightIcon from '../assets/arrow-right.svg';
import { Toaster, toast } from 'sonner';
import useApi from '../utils/auth-service';
import { useData } from '../data-service';



function SignupPage() {
    const [formData, setFormData] = useState({ name: '', dateOfBirth: '1999-01-01', email: '', password: '' });
    const { responseData, loading, error, fetchData, clearError } = useApi('http://localhost:8080/api/signup', 'POST', formData);
    const { data, updateData, isLoggedIn, updateLoggedIn } = useData();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetchData();
    };

    useEffect(() => {
        if (responseData != null) {
            if (responseData.user != null) {
                toast.success('Contul a fost creat cu succes');
                updateData(responseData);
                updateLoggedIn(true);
                navigate('/app');
            }
        }

        if (error != null) {
            toast.error('Un utilizator cu acest email exista deja in baza de date');
            clearError();
        }

        if (isLoggedIn) {
            navigate('/app');
        }
    }, [responseData, error, data])

    return (
        <div className='flex flex-col w-full h-[100vh] bg-appbg justify-center items-center gap-8'>
            <Link to={'/'}><img src={logo} width={'400px'} alt="Logo" /></Link>
            <h2 className='text-paragraphLighter text-xl font-medium tracking-wider'>Creeaza un cont <span className='text-primary'>simplu</span> si <span className='text-primary'>rapid</span></h2>

            <form onSubmit={handleSubmit} className='flex flex-col px-8 w-full sm:w-1/3 gap-4 text-center'>
                <input
                    className='flex w-full bg-white rounded-full p-4 text-center shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)]'
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nume"
                    required
                />
                <label htmlFor="dateOfBirth">Data Nasterii</label>
                <input
                    className='flex w-full bg-white rounded-full p-4 text-center justify-center items-center shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)]'
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                />
                <input
                    className='flex w-full bg-white rounded-full p-4 text-center shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] '
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />
                <input
                    className='flex w-full bg-white rounded-full p-4 text-center shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)]'
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

export default SignupPage