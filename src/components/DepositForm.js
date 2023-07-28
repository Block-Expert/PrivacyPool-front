
import React, { useState } from 'react';
import Web3 from 'web3';
import abi from '../abi/abi.json';
const DepositForm = () => {
  const [depositAddress, setDepositAddress] = useState('');
  const [depositAmount, setDepositAmount] = useState(0);
  const [commitment, setCommitment] = useState('');

  const handleDeposit = (e) => {

    let flag = 0;
    if (depositAddress && depositAmount && commitment) {
      flag = 1;
    }

    if (flag === 0) {
      alert("Input deposit form values correctly!");
      return;
    }

    e.preventDefault();
    const web3 = new Web3(window.ethereum);
    const contract_address = "0x89D8a14F7EabA60E83a9a3abbF6c4C24c56d86e2";
    const my_contract = new web3.eth.Contract(abi, contract_address);
    let ret = my_contract.methods.deposit(commitment, depositAddress, depositAmount).send();
    console.log(ret, "ret");
  };
  return (
    <form className="flex flex-col items-center mt-16">
      <h2 className="text-2xl font-bold mb-4">Deposit Form</h2>
      <div className="flex w-full">
        <div className="flex mb-4 mr-12">
          <label htmlFor="depositAddress" className="text-lg font-semibold mr-2 w-full  mt-1">Deposit Address:</label>
          <input
            className="border border-gray-300 rounded py-2 px-4"
            type="text"
            placeholder="Enter deposit address"
            value={depositAddress}
            onChange={(e) => setDepositAddress(e.target.value)}
            id="depositAddress"
          />
        </div>
        <div className="flex mb-4 mr-12">
          <label htmlFor="depositAmount" className="w-full text-lg font-semibold mr-2 mt-1">Deposit Amount:</label>
          <input
            className="border border-gray-300 rounded py-2 px-4"
            type="number"
            placeholder="Enter deposit amount"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
            id="depositAmount"
          />
        </div>
        <div className="flex mb-4 mr-12">
          <label htmlFor="commitment" className="w-full text-lg font-semibold mr-2  mt-1">Commitment:</label>
          <input
            className="border border-gray-300 rounded py-2 px-4"
            type="text"
            placeholder="Enter commitment"
            value={commitment}
            onChange={(e) => setCommitment(e.target.value)}
            id="commitment"
          />
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleDeposit}
      >
        Deposit
      </button>
    </form>
  );
};
export default DepositForm;