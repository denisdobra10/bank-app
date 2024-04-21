import React, { useEffect, useState } from 'react'
import { ArrowRightAlt } from '@mui/icons-material'
import useApi from '../../../utils/auth-service';
import { Toaster, toast } from 'sonner';
import { useData } from '../../../data-service';

function ChangePinBox({ userId, currentPIN }) {
    const [formData, setFormData] = useState({ userId: userId, oldPin: '', newPin: '' });

    const { responseData, loading, error, fetchData, clearError, clearResponseData } = useApi('http://localhost:8080/api/pin', 'POST', { userId, pin: formData.newPin });
    const { updateData } = useData();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        if (error != null) {
            toast.error('A aparut o eroare... Incearca mai tarziu.');
            clearError();
        }

        if (responseData != null) {
            updateData(responseData);
            toast.success("Ai schimba PIN-ul cu succes.");
            clearResponseData();
        }
    }, [responseData, error])


    const changePIN = async (e) => {
        e.preventDefault();

        console.log('pin current: ' + currentPIN + '... pin introdus vechi: ' + formData.oldPin)
        if (formData.oldPin == currentPIN)
            await fetchData();
        else
            toast.error('PIN-ul actual este incorect.');

    }

    return (
        <div className="flex flex-col gap-4 px-4 sm:px-12 py-8 bg-gradient-to-r from-lightRed to-darkRed rounded-lg w-full sm:w-5/6">
            <h2 className='text-vanishedBlack font-bold text-xl tracking-wide'>Schimba PIN</h2>

            <form onSubmit={changePIN} className='flex flex-row gap-2 items-start justify-between'>

                <div className="flex flex-col sm:flex-row gap-2">
                    <div className="flex flex-col gap-2 items-center">
                        <input type="password" onChange={handleChange} name='oldPin' id='oldPin' placeholder='PIN actual' className='text-paragraph placeholder-gray-500 text-center px-2 py-1 bg-opacity-35 bg-white rounded-lg focus:outline-none' />
                    </div>
                    <div className="flex flex-col gap-2 items-center">
                        <input type="password" onChange={handleChange} name='newPin' id='newPin' placeholder='PIN nou' className='text-paragraph placeholder-gray-500 text-center px-2 py-1 bg-opacity-35 bg-white rounded-lg focus:outline-none' />
                    </div>
                </div>

                <button type="submit" className='bg-white rounded-full w-fit sm:w-full px-4 self-center'><ArrowRightAlt /> </button>
            </form>
        </div>
    )
}

export default ChangePinBox