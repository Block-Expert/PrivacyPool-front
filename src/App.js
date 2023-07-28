import React from 'react';
import WalletConnectionButton from './components/WalletConnectionButton';
import DepositForm from './components/DepositForm';
import WithdrawForm from './components/WithdrawForm';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mt-8 mb-4">My Web3 Project</h1>
      <WalletConnectionButton />
      <DepositForm />
      <WithdrawForm />
    </div>
  );
};

export default App;