import React from 'react'
import TransactionListItem from './transaction-list-item'

function TransactionsList() {
    return (
        <div className="flex flex-col w-full bg-white rounded-lg h-[450px] overflow-auto border-gray-500 shadow-[0_15px_60px_-15px_rgba(0,0,0,0.3)] shadow-paragraph">

            <TransactionListItem type='deposit' date={'2024-04-15 08:30:00'} amount={127.80} />
            <TransactionListItem type='deposit' date={'2024-04-15 08:30:00'} amount={127.80} />
            <TransactionListItem type='withdrawal' date={'2024-04-15 08:30:00'} amount={127.80} />
            <TransactionListItem type='deposit' date={'2024-04-15 08:30:00'} amount={127.80} />
            <TransactionListItem type='withdrawal' date={'2024-04-15 08:30:00'} amount={127.80} />
            <TransactionListItem type='withdrawal' date={'2024-04-15 08:30:00'} amount={127.80} />
            <TransactionListItem type='withdrawal' date={'2024-04-15 08:30:00'} amount={127.80} />
            <TransactionListItem type='withdrawal' date={'2024-04-15 08:30:00'} amount={127.80} />

        </div>
    )
}

export default TransactionsList