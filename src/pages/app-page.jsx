import React, { useState } from 'react'

import AppHeader from '../components/app/app-header';
import TransactionsList from '../components/app/transactions-list';
import ActionsBox from '../components/app/actions-box';
import AppFooter from '../components/app/app-footer';


function AppPage() {

  const [selectedAccount, setSelectedAccount] = useState(0);

  const switchAccount = () => {
    setSelectedAccount((selectedAccount == 0) ? 1 : 0);
    console.log('works');
  }

  return (
    <div className="flex flex-col w-full py-16 px-4 md:px-48 gap-8 bg-appbg">

      <AppHeader
        accountType={(selectedAccount == 0) ? 'Cont curent' : 'Cont de economii'}
        dateTime={'2024-04-15 08:30:00'}
        amount={29451.88}
        onClick={() => switchAccount()}
      />

      <div className="flex flex-col lg:flex-row gap-8">
        <TransactionsList />
        <ActionsBox account={selectedAccount} />
      </div>

      <AppFooter />

    </div>
  )
}

export default AppPage