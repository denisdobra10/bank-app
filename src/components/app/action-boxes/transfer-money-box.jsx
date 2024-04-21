import React, { useEffect, useState } from 'react'
import { ArrowRightAlt } from '@mui/icons-material'
import useApi from '../../../utils/auth-service';
import { toast } from 'sonner';
import { useData } from '../../../data-service';

function TransferMoneyBox({ userId }) {
    const [formData, setFormData] = useState({ userId: userId, toUserIban: '', amount: '' });

    const { responseData, loading, error, fetchData, clearError, clearResponseData } = useApi('http://localhost:8080/api/transfer', 'POST', formData);
    const { updateData } = useData();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        if (error != null) {
            toast.error('Ceva nu a mers bine, incearca mai tarziu.');
            clearError();
        }

        if (responseData != null) {
            updateData(responseData);
            toast.success("Transferul a fost realizat cu succes");
            clearResponseData();
        }
    }, [responseData, error])


    const transferMoney = async (e) => {
        e.preventDefault();
        await fetchData();
    }

    return (
        <div className="flex flex-col gap-4 px-4 sm:px-12 py-8 bg-gradient-to-r from-lightYellow to-darkYellow rounded-lg w-full sm:w-5/6">
            <h2 className='text-vanishedBlack font-bold text-xl tracking-wide text-center sm:text-left'>Transfera bani</h2>

            <form onSubmit={transferMoney} className='flex flex-row gap-2 items-start justify-between'>

                <div className="flex flex-col sm:flex-row gap-2 w-full items-start">
                    <div className="flex flex-col gap-2 items-center">
                        <input type="text" name='toUserIban' id='toUserIban' placeholder='Contul bancar' onChange={handleChange} className='text-paragraph text-center px-2 py-1 bg-opacity-35 bg-white rounded-lg focus:outline-none' />
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <input type="text" name='amount' id='amount' placeholder='Suma dorita' onChange={handleChange} className='text-paragraph text-center px-2 py-1 bg-opacity-35 bg-white rounded-lg focus:outline-none' />
                    </div>
                </div>

                <button type="submit" className='bg-white rounded-full w-fit sm:w-full px-4 self-center'><ArrowRightAlt /> </button>
            </form>

        </div>
    )
}

export default TransferMoneyBox