import React from 'react'

function TransactionListItem({ type = 'deposit', date, amount }) {

    const depositColor = 'from-lightGreen to-darkGreen';
    const withdrawalColor = 'from-lightRed to-darkRed'

    const dateTimeToString = (date) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(date).toLocaleDateString('ro-RO', options);
    }

    const amountToString = (amount) => {
        return amount.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    return (
        <div className="flex flex-row justify-between px-4 sm:px-8 py-4 border-b-2 border-b-paragraphLigther items-center hover:bg-gray-100">
            <div className="flex flex-row gap-8 items-center">
                <div className={`flex rounded-full px-4 py-2 text-white font-semibold text-xs capitalize bg-gradient-to-r ${(type === 'deposit') ? depositColor : withdrawalColor} select-none`}>
                    {(type === 'deposit') ? 'DEPOZITARE' : 'RETRAGERE'}
                </div>
                <span className='text-paragraphLighter font-bold text-sm'>{dateTimeToString(date)}</span>
            </div>

            <span className='text-lg font-medium italic text-paragraph'>{amountToString(amount)} lei</span>
        </div>
    )
}

export default TransactionListItem