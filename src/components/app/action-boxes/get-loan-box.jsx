import React, { useEffect, useState } from 'react'
import { ArrowRightAlt } from '@mui/icons-material'
import useApi from '../../../utils/auth-service';
import { Toaster, toast } from 'sonner';
import { useData } from '../../../data-service';

function LoanRequestBox({ userId }) {
    const [formData, setFormData] = useState({ userId: userId, loanAmount: '' });

    const { responseData, loading, error, fetchData, clearError, clearResponseData } = useApi('http://localhost:8080/api/loan', 'POST', formData);
    const { updateData } = useData();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        if (error != null) {
            toast.error('Suma solicitata este prea mare. Poti solicita pana la 50% din suma pe care o ai in cont.');
            clearError();
        }

        if (responseData != null) {
            updateData(responseData);
            toast.success("Ai primit cu succes suma solicitata!");
            clearResponseData();
        }
    }, [responseData, error])


    const requestLoan = async (e) => {
        e.preventDefault();
        await fetchData();
    }

    return (
        <div className="flex flex-col gap-4 px-4 sm:px-12 py-8 bg-gradient-to-r from-lightGreen to-darkGreen rounded-lg w-full sm:w-5/6">
            <h2 className='text-vanishedBlack font-bold text-xl tracking-wide'>Solicita imprumut</h2>

            <form onSubmit={requestLoan} className='flex flex-row gap-4 items-center'>

                <div className="flex flex-row gap-2">
                    <div className="flex flex-col gap-2 items-center">
                        <input type="text" onChange={handleChange} name='loanAmount' id='loanAmount' placeholder='Suma dorita' className='text-paragraph text-center px-2 py-1 bg-opacity-35 bg-white rounded-lg focus:outline-none' />
                    </div>
                </div>

                <button type="submit" className='bg-white rounded-full w-fit px-4'><ArrowRightAlt /> </button>
            </form>

            <Toaster richColors />

        </div>

    )
}

export default LoanRequestBox