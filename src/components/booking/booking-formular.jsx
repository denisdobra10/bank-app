
import { SvgIcon } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import BookingAnswerPicker from './booking-answer-picker';
import ContactDataFormular from './booking-contact-data-formular';
import BookingConfirmation from './booking-confirmation';


function BookingFormular() {

    const [formularIndex, setFormularIndex] = useState(0);
    const [formularAnswers, setFormularAnswers] = useState([]);


    const nextStep = (value) => {
        const newDataName = formularPickers[formularIndex].dataName;
        const updatedAnswers = formularAnswers.filter(answer => !answer.hasOwnProperty(newDataName));
        setFormularAnswers([...updatedAnswers, { [newDataName]: value }]);
        setFormularIndex(formularIndex + 1);
    }

    const backStep = () => {
        if (formularIndex == 0) return;

        setFormularIndex(formularIndex - 1);
    }

    useEffect(() => {
        console.log(formularAnswers);
    }, [formularAnswers])


    const formularPickers = [
        {
            'dataName': 'tipEntitate',
            'title': 'Sunt:',
            'objects': ['Persoana fizica', 'Persoana juridica'],
            'function': nextStep,
            'btnText': 'Mai departe'
        },
        {
            'dataName': 'helpDomain',
            'title': 'Am nevoie de ajutor petru:',
            'objects': ['Card de debit', 'Card de credit', 'Problema tehnica la aplicatie', 'Alta problema'],
            'function': nextStep,
            'btnText': 'Mai departe'
        },
        {
            'dataName': 'contactTime',
            'title': 'Vreau sa fiu contactat:',
            'objects': ['Dimineata', 'La amiaza', 'Dupa masa', 'Seara'],
            'function': nextStep,
            'btnText': 'Mai departe'
        },
        {
            'dataName': 'contactMethod',
            'title': 'Prefer sa fiu:',
            'objects': ['Contactat telefonic', 'Contactat prin email'],
            'function': nextStep,
            'btnText': 'Mai departe'
        },
        {
            'dataName': 'contactData',
            'title': 'Contactul meu:',
            'function': nextStep,
            'btnText': 'Finalizeaza'
        },
    ]

    return (formularIndex < formularPickers.length) ? (
        <div className="flex flex-col p-8 text-white bg-primary w-[90%] sm:w-[40%] rounded-lg">

            <div className="flex flex-row w-full justify-between">
                <div className="flex flex-row items-center hover:cursor-pointer" onClick={() => backStep()}>
                    <SvgIcon component={ArrowBackIosIcon} fontSize='small' className='text-white' />
                    <h2 className='text-semibold underline'>Inapoi</h2>
                </div>

                <div className="flex flex-col gap-2 self-end w-[25%] text-end shadow-lg mb-8">
                    <span className='text-sm'>Pasul {formularIndex + 1} din {formularPickers.length}</span>

                    <div className="flex bg-white min-h-[3px]">
                        <div className={`flex bg-secondary ${(formularIndex == 0) ? 'w-1/5' : formularIndex == 1 ? 'w-2/5' : formularIndex == 2 ? 'w-3/5' : formularIndex == 3 ? 'w-4/5' : 'w-full'}`}></div>
                    </div>
                </div>
            </div>

            {(formularIndex < formularPickers.length - 1)
                ? <BookingAnswerPicker
                    title={formularPickers[formularIndex].title}
                    objects={formularPickers[formularIndex].objects}
                    onBtnClicked={formularPickers[formularIndex].function}
                    btnText={formularPickers[formularIndex].btnText} />
                : <ContactDataFormular
                    title={formularPickers[formularIndex].title}
                    onBtnClicked={formularPickers[formularIndex].function}
                    btnText={formularPickers[formularIndex].btnText} />}
        </div>
    ) : (<BookingConfirmation />)
}

export default BookingFormular