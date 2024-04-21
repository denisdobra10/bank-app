import React, { useEffect, useState } from 'react'
import { ArrowRightAlt } from '@mui/icons-material'
import useApi from '../../../utils/auth-service';
import { toast } from 'sonner';
import { useData } from '../../../data-service';

function GiveLoanBox({ userId }) {

    const [formData, setFormData] = useState({ userId: userId, giveLoanAmount: '' });

    const { responseData, loading, error, fetchData, clearError, clearResponseData } = useApi('http://localhost:8080/api/loan/pay', 'POST', { userId, loanAmount: formData.giveLoanAmount });
    const { updateData } = useData();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        if (error != null) {
            toast.error('Trebuie sa inapoiezi exact suma primita.');
            clearError();
        }

        if (responseData != null) {
            updateData(responseData);
            toast.success(`Ai inapoiat ${formData.giveLoanAmount} lei cu succes.`);
            clearResponseData();
        }

    }, [responseData, error, formData])


    const giveLoanBack = async (e) => {
        e.preventDefault();
        await fetchData();
    }

    return (
        <div className="flex flex-col gap-4 px-4 sm:px-12 py-8 bg-gradient-to-r from-darkGreen to-lightGreen rounded-lg w-full sm:w-5/6">
            <h2 className='text-vanishedBlack font-bold text-xl tracking-wide'>Inapoiaza imprumut</h2>

            <form onSubmit={giveLoanBack} className='flex flex-row gap-4 items-center'>

                <div className="flex flex-row gap-2">
                    <div className="flex flex-col gap-2 items-center">
                        <input type="text" onChange={handleChange} name='giveLoanAmount' id='giveLoanAmount' placeholder='Suma inapoiata' className='text-paragraph text-center px-2 py-1 bg-opacity-35 bg-white rounded-lg focus:outline-none' />
                    </div>
                </div>

                <button type="submit" className='bg-white rounded-full w-fit px-4'><ArrowRightAlt /> </button>
            </form>
        </div>
    )
}

export default GiveLoanBox