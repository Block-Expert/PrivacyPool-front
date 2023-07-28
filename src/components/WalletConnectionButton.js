import React, { useState } from 'react';
import Web3 from 'web3';
const WalletConnectionButton = () => {
  const [connectedWallet, setConnectedWallet] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.enable();
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setConnectedWallet(accounts[0]);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error('Web3 provider not found');
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={connectWallet}
      >
        Connect Wallet
      </button>
      <div className="mt-4">
        Connected Wallet: {connectedWallet ? connectedWallet : 'Not connected'}
      </div>
    </div>
  );
};
export default WalletConnectionButton;