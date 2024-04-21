import React from 'react'
import TransactionListItem from './transaction-list-item'

function TransactionsList({ account, data }) {
    return (
        <div className="flex flex-col w-full bg-white rounded-lg h-[450px] overflow-auto border-gray-500 shadow-[0_15px_60px_-15px_rgba(0,0,0,0.3)] shadow-paragraph">

            {account == 0
                ? data.transactions.currentAccount.map((transaction) => (
                    <TransactionListItem key={transaction.id} type={transaction.type} date={transaction.transactionDate} amount={transaction.amount} />
                ))
                :
                data.transactions.savingsAccount.map((transaction) => (
                    <TransactionListItem key={transaction.id} type={transaction.type} date={transaction.transactionDate} amount={transaction.amount} />
                ))
            }

        </div>
    )
}

export default TransactionsList