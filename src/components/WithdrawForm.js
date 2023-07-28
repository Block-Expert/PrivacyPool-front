import React, { useState } from 'react';
import Web3 from 'web3';
import abi from '../abi/abi.json';
 const WithdrawForm = () => {
  const [callData, setCallData] = useState('');
  const [root, setRoot] = useState('');
  const [subsetRoot, setSubsetRoot] = useState('');
  const [nullifier, setNullifier] = useState('');
  const [tokenAddress, setTokenAddress] = useState('');
  const [tokenAmount, setTokenAmount] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [refundAmount, setRefundAmount] = useState('');
  const [relayerAddress, setRelayerAddress] = useState('');
  const [feeAmount, setFeeAmount] = useState('');

  const handleWithdraw = async (e) => {
    let flag = 0;
    if(callData && root && subsetRoot && nullifier && tokenAddress && tokenAmount && recipientAddress && refundAmount && relayerAddress && feeAmount)
    {
        flag = 1;
    }

    if(flag === 0)
    {
        alert("Input withdraw form values correctly!");
        return;
    }


    e.preventDefault();
    const web3 = new Web3(window.ethereum);
    const contract_address = "0x89D8a14F7EabA60E83a9a3abbF6c4C24c56d86e2";
    const my_contract = new web3.eth.Contract(abi, contract_address);
    let ret = await my_contract.methods.withdraw(callData, root, subsetRoot, nullifier, tokenAddress, tokenAmount, recipientAddress, refundAmount, relayerAddress, feeAmount).send();
    console.log(ret, "ret");
  };
   return (
    <form className="flex flex-col items-center mt-16">
      <h2 className="text-2xl font-bold mb-4">Withdraw Form</h2>
        <div className="flex w-full">
            <div className="flex mb-4 mr-12 w-6/12">
                <label htmlFor="callData" className="text-lg font-semibold mr-2 w-40  mt-1">Call Data:</label>
                <input
                className="border border-gray-300 rounded py-2 px-4"
                type="text"
                placeholder="Enter Call Data"
                value={callData}
                onChange={(e) => setCallData(e.target.value)}
                id="callData"
                />
            </div>
            <div className="flex mb-4 mr-12 w-6/12">
                <label htmlFor="root" className="w-40 text-lg font-semibold mr-2 mt-1">Root:</label>
                <input
                className="border border-gray-300 rounded py-2 px-4"
                type="number"
                placeholder="Enter Root"
                value={root}
                onChange={(e) => setRoot(e.target.value)}
                id="root"
                />
            </div>
        </div>
        <div className="flex w-full">
            <div className="flex mb-4 mr-12 w-6/12">
                <label htmlFor="subsetRoot" className="text-lg font-semibold mr-2 w-40  mt-1">Subset Root:</label>
                <input
                className="border border-gray-300 rounded py-2 px-4"
                type="text"
                placeholder="Enter Subset Root"
                value={subsetRoot}
                onChange={(e) => setSubsetRoot(e.target.value)}
                id="subsetRoot"
                />
            </div>
            <div className="flex mb-4 mr-12 w-6/12">
                <label htmlFor="nullifier" className="w-40 text-lg font-semibold mr-2 mt-1">Nullifier:</label>
                <input
                className="border border-gray-300 rounded py-2 px-4"
                type="number"
                placeholder="Enter nullifier"
                value={nullifier}
                onChange={(e) => setNullifier(e.target.value)}
                id="nullifier"
                />
            </div>
        </div>
        <div className="flex w-full">
            <div className="flex mb-4 mr-12 w-6/12">
                <label htmlFor="tokenAddress" className="text-lg font-semibold mr-2 w-40  mt-1">Token Address:</label>
                <input
                className="border border-gray-300 rounded py-2 px-4"
                type="text"
                placeholder="Enter token address"
                value={tokenAddress}
                onChange={(e) => setTokenAddress(e.target.value)}
                id="tokenAddress"
                />
            </div>
            <div className="flex mb-4 mr-12 w-6/12">
                <label htmlFor="tokenAmount" className="w-40 text-lg font-semibold mr-2 mt-1">Token Amount:</label>
                <input
                className="border border-gray-300 rounded py-2 px-4"
                type="number"
                placeholder="Enter token amount"
                value={tokenAmount}
                onChange={(e) => setTokenAmount(e.target.value)}
                id="tokenAmount"
                />
            </div>
        </div>
        <div className="flex w-full">
            <div className="flex mb-4 mr-12 w-6/12">
                <label htmlFor="recipientAddress" className="text-lg font-semibold mr-2 w-40 mt-1 ">Recipient Address:</label>
                <input
                className="border border-gray-300 rounded py-2 px-4"
                type="text"
                placeholder="Enter recipient address"
                value={recipientAddress}
                onChange={(e) => setRecipientAddress(e.target.value)}
                id="recipientAddress"
                />
            </div>
            <div className="flex mb-4 mr-12 w-6/12">
                <label htmlFor="refundAmount" className="w-40 text-lg font-semibold mr-2 mt-1">Refund Amount:</label>
                <input
                className="border border-gray-300 rounded py-2 px-4"
                type="number"
                placeholder="Enter refund amount"
                value={refundAmount}
                onChange={(e) => setRefundAmount(e.target.value)}
                id="refundAmount"
                />
            </div>
        </div>
        <div className="flex w-full">
            <div className="flex mb-4 mr-12 w-6/12">
                <label htmlFor="relayerAddress" className="text-lg font-semibold mr-2 w-40  mt-1">Relayer Address:</label>
                <input
                className="border border-gray-300 rounded py-2 px-4"
                type="text"
                placeholder="Enter relayer address"
                value={relayerAddress}
                onChange={(e) => setRelayerAddress(e.target.value)}
                id="relayerAddress"
                />
            </div>
            <div className="flex mb-4 mr-12 w-6/12">
                <label htmlFor="feeAmount" className="w-40 text-lg font-semibold mr-2 mt-1">Fee Amount:</label>
                <input
                className="border border-gray-300 rounded py-2 px-4"
                type="number"
                placeholder="Enter fee amount"
                value={feeAmount}
                onChange={(e) => setFeeAmount(e.target.value)}
                id="feeAmount"
                />
            </div>
        </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleWithdraw}
      >
        Withdraw
      </button>
    </form>
  );
};
 export default WithdrawForm;