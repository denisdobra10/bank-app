import React from 'react'
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Check as CheckIcon } from '@mui/icons-material';

function CallFormular() {

    const handleButtonClick = () => {
        console.log('call formular button clicked')
    }

    return (
        <div className='flex flex-col gap-2 text-center'>
            <h2 className='text-3xl capitalize font-bold mb-8'>Call Center</h2>

            <div className="flex w-full justify-center items-center border-4 border-white px-16 py-4 text-xl rounded-xl font-bold">
                PESTE 20 DE MINUTE - TIMP DE ASTEPTARE
            </div>

            <div className="flex flex-row w-full gap-2">

                <div className="flex flex-col w-full p-8 gap-4 border-4 border-white rounded-xl">
                    <span className='text-6xl font-bold'>18</span>
                    <span className='font-bold uppercase'>Clienti in convorbire</span>
                </div>

                <div className="flex flex-col w-full p-8 gap-4 border-4 border-white rounded-xl">
                    <span className='text-6xl font-bold'>34</span>
                    <span className='font-bold uppercase'>Clienti in asteptare</span>
                </div>

            </div>

            <div className="flex flex-col w-full gap-2 text-start mt-8">
                <TextField
                    sx={{
                        '& input': {
                            color: 'white',
                            borderColor: 'white',
                        },
                        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'white',
                        },
                    }}
                    placeholder='Numarul tau de telefon'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleButtonClick}>
                                    <CheckIcon className='text-white' />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    type="text"
                    variant="outlined"
                />

                <span>Introdu numarul de telefon si apasa pe butonul din dreapta. Vei fi contactat in cel mai scurt timp de un operator!</span>
            </div>
        </div>
    )
}

export default CallFormular