import React from 'react'
import GiveLoanBox from './action-boxes/give-loan-box'
import LoanRequestBox from './action-boxes/get-loan-box';
import WithdrawBox from './action-boxes/withdraw-box';
import DepositBox from './action-boxes/deposit-box';


function AppFooter({ onLogout, activeLoan, savingsInterest, userId }) {

    const amountToString = (amount) => {
        return amount.toLocaleString('ro-RO', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    return (
        <div className="flex flex-col sm:flex-row gap-8 my-8 items-center justify-center">

            <div className="flex flex-col w-full gap-4 mt-16 sm:mt-4">

                <div className="flex flex-col sm:flex-row gap-4">
                    <DepositBox userId={userId} />
                    <WithdrawBox userId={userId} />
                    <GiveLoanBox userId={userId} />
                </div>

                <div className="flex flex-row gap-4">
                    <div className="flex flex-row gap-1 items-center">
                        <h2 className='text-black text-md'>Suma imprumutata</h2>
                        <span className='text-darkGreen text-xl font-semibold'>{amountToString(activeLoan)} lei</span>
                    </div>

                    <div className="flex flex-row gap-1 items-center">
                        <h2 className='text-black text-md'>Dobanda acumulata</h2>
                        <span className='text-darkGreen text-xl font-semibold'>{amountToString(savingsInterest)} lei</span>
                    </div>
                </div>

                <button onClick={onLogout} className='w-full py-4 text-center bg-gradient-to-r from-lightGreen to-darkGreen rounded-full text-paragraph font-bold text-lg tracking-widest hover:shadow-lg hover:shadow-lightGreen'>Logout</button>
            </div>


        </div>
    )
}

export default AppFooter