import React from 'react'
import TransferMoneyBox from './action-boxes/transfer-money-box'
import LoanRequestBox from './action-boxes/get-loan-box'
import ChangePinBox from './action-boxes/change-pin-box'
import GiveSavingsBox from './action-boxes/give-savings-box';
import GetSavingsBox from './action-boxes/get-savings-box';

function ActionsBox({ account, data }) {
    return (account == 0)
        ? <div className="flex flex-col w-full gap-4 h-[450px]">
            <TransferMoneyBox userId={data.user.id} />
            <LoanRequestBox userId={data.user.id} />
            <ChangePinBox userId={data.user.id} currentPIN={data.user.pin} />
        </div>
        : <div className="flex flex-col w-full gap-4 h-[450px]">
            <GiveSavingsBox userId={data.user.id} />
            <GetSavingsBox userId={data.user.id} />
        </div>;
}

export default ActionsBox