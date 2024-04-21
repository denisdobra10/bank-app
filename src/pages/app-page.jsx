import AppHeader from '../components/app/app-header';
import TransactionsList from '../components/app/transactions-list';
import ActionsBox from '../components/app/actions-box';
import AppFooter from '../components/app/app-footer';
import { useData } from '../data-service';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';



function AppPage() {

  const navigate = useNavigate();
  const { data, updateData, isLoggedIn, updateLoggedIn } = useData();

  const [selectedAccount, setSelectedAccount] = useState(0);

  const switchAccount = () => {
    setSelectedAccount((selectedAccount == 0) ? 1 : 0);
  }

  const logout = () => {
    updateData(null);
    updateLoggedIn(false);
    navigate('/');
  }

  useEffect(() => {
    console.log(data);

    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [data, isLoggedIn])

  const getCurrentDateTime = () => {
    const now = new Date();

    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };

    const dateTimeString = now.toLocaleString('en-US', options);

    return dateTimeString;
  };

  return (isLoggedIn) && (
    <div className="flex flex-col w-full py-16 px-4 md:px-48 gap-8 bg-appbg">

      <AppHeader
        accountType={(selectedAccount == 0) ? 'Cont curent' : 'Cont de economii'}
        dateTime={getCurrentDateTime()}
        amount={(selectedAccount == 0) ? data.balance : data.savingsBalance}
        onClick={() => switchAccount()}
      />

      <div className="flex flex-col lg:flex-row gap-8">
        <TransactionsList account={selectedAccount} data={data} />
        <ActionsBox account={selectedAccount} data={data} />
      </div>

      <AppFooter onLogout={logout} activeLoan={data.activeLoan} savingsInterest={data.savingsInterest} userId={data.user.id} />

    </div>
  )
}

export default AppPage