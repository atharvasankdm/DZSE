import React from "react";
import Layout from "./Layout";
import StockMinified from "./StockMinified";
import { IoMdArrowDropup } from "react-icons/io";
import { RenderLineChart } from "./RenderLineChart";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { ExchangeABI } from "../ExchangeABI";

const SingleStock = () => {
  const { id } = useParams();
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const exchangeAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Update with your contract address
  const companyAddress = "0x8464135c8F25Da09e49BC8782676a84730C318bC";
  const [userAddress, setUserAddress] = useState(null);
  const [contractInstance, setContractInstance] = useState(null);
  console.log(userAddress);

  const exchangeContract = new ethers.Contract(
    exchangeAddress,
    ExchangeABI,
    provider.getSigner()
  );
  const [companyId, setCompanyId] = useState("REL");
  const [maxRate, setMaxRate] = useState(1);
  const [stocksToBuy, setStocksToBuy] = useState(10);

  const connectToWallet = async () => {
    try {
      if (window.ethereum) {
        // Request user accounts and connect to the Ethereum network
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const network = await provider.getNetwork();

        // Set the user's address
        const address = await signer.getAddress();
        setUserAddress(address);

        // Set the contract instance with the updated signer
        const contract = new ethers.Contract(
          exchangeAddress,
          ExchangeABI,
          signer
        );
        setContractInstance(contract);
      } else {
        console.error("Please install MetaMask or another Ethereum wallet.");
      }
    } catch (error) {
      console.error("Error connecting to wallet:", error);
    }
  };

  const getUserPortfolio = async () => {
    console.log(contractInstance);
    try {
      if (contractInstance) {
        const portfolio = await contractInstance.getUserPortfolio();
        console.log(portfolio);
      } else {
        console.error("Contract not initialized. Please connect your wallet.");
      }
    } catch (error) {
      console.error("Error fetching user portfolio:", error);
    }
  };

  useEffect(() => {
    connectToWallet();
    // const getUserPortfolio = async () => {
    //   try {
    //     if (window.ethereum) {
    //       // Connect to the Ethereum network
    //       const provider = new ethers.providers.Web3Provider(window.ethereum);

    //       const signer = provider.getSigner();

    //       const contract = new ethers.Contract(
    //         exchangeAddress,
    //         ExchangeABI,
    //         signer
    //       );

    //       // Call the getUserPortfolio function from your contract
    //       const portfolio = await contract.getUserPortfolio();
    //       console.log(portfolio);
    //     }
    //   } catch (error) {
    //     console.error("Error fetching user portfolio:", error);
    //   }
    // };

    // getUserPortfolio();
  }, []);

  const handleBuyStock = async () => {
    try {
      // Check wallet connection and prompt if not connected

      // Prepare the transaction to buy stocks
      const etherS = maxRate * stocksToBuy;
      const k = ethers.utils.parseEther(etherS.toString());

      const tx = await exchangeContract.buyStock(
        companyId,
        maxRate,
        stocksToBuy,
        {
          value: ethers.utils.parseEther(etherS.toString()), // Convert to Wei
        }
      );

      // Wait for the transaction to be mined
      const receipt = await tx.wait();
      console.log(receipt);

      // Process the transaction completion
      // Add any other desired logic after the transaction is successful
    } catch (error) {
      console.error(error);
      // Handle errors
    }
  };
  const handleListStocks = async () => {
    try {
      const stocks = 5;
      const rate = 1;

      const tx = await exchangeContract.listStocks(companyId, stocks, rate);
      // setTransactionHash(tx.hash);
      await tx.wait(); // Wait for transaction confirmation
      // Transaction successful
    } catch (error) {
      // Handle error
      console.error("Error listing stocks:", error);
    }
  };
  return (
    <Layout>
      <div className=" w-full h-[75%] overflow-y-scroll absolute top-20 flex flex-col items-center mt-2">
        <button onClick={getUserPortfolio}>get portfolio</button>
        <div className="w-[80%] h-[70px]  flex justify-between mt-2">
          <div className="flex justify-center items-center">
            <img
              src="http://pluspng.com/img-png/google-logo-png-open-2000.png"
              className="w-12 h-12  shadow-lg rounded-full p-1"
              alt=""
            />
            <div className="flex flex-col justify-center ml-4">
              <p className="text-xl font-semibold">RELIANCE</p>
              <p className="text-[14px] text-slate-500">Reliance.co</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xl font-semibold">$2,350</p>
            <div className="flex text-green-500">
              <IoMdArrowDropup />
              2.35%
            </div>
          </div>
        </div>

        <div className="mt-4">
          <RenderLineChart height={400} width={600} showAxes={true} />
        </div>
        <div className="mt-8 flex justify-between items-center w-[70%]">
          <button
            type="button"
            className="w-32 h-10 text-white text-[18px] bg-green-500 p-2 rounded-lg shadow-slate-500 shadow-sm "
            onClick={handleBuyStock}
          >
            BUY
          </button>
          <button
            type="button"
            className="w-32 h-10 text-white text-[18px] bg-[#f14a41] p-2 rounded-lg shadow-slate-500 shadow-sm"
            onClick={handleListStocks}
          >
            SELL
          </button>
        </div>

        {/* <div className="w-full h-[50px] flex flex-col overflow-y-auto">
          <h1>siu</h1>
          <h1>siu</h1>
          <h1>siu</h1>
        </div> */}

        <div className="flex flex-col w-3/4 ">
          <h1>Statistics:</h1>
          <div className="border-b-[1px] border-slate-300 h-[50px] flex justify-between items-center">
            <span>Previous Close</span>
            <span>$1800</span>
          </div>
          <div className="border-b-[1px] border-slate-300 h-[50px] flex justify-between items-center">
            <span>Opening Price</span>
            <span>$1800</span>
          </div>
          <div className="border-b-[1px] border-slate-300 h-[50px] flex justify-between items-center">
            <span>1D Returns</span>
            <span>$1800</span>
          </div>
          <div className="border-b-[1px] border-slate-300 h-[50px] flex justify-between items-center">
            <span>Current Price</span>
            <span>$1800</span>
          </div>
        </div>

        <div className="flex flex-col w-3/4 mt-8">
          <h1>News:</h1>
          <div className="border-b-[1px] border-slate-300 h-[70px] flex  items-center mt-2">
            <img
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/media_bank/202310/pixel-8-280000-16x9.jpeg?VersionId=u1iE0Bm8V7Jf1PQgZQUk.T1v8dd0xyKs"
              alt=""
              className="w-16 h-16 object-cover"
            />
            <p className="text-[16px] ml-4">
              Google pixel latest edition gets revealed in the techfest
              California,google headquarters.Google Pixel again breaks all the
              records
            </p>
          </div>

          <div className="border-b-[1px] border-slate-300 h-[70px] flex  items-center mt-2">
            <img
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/media_bank/202310/pixel-8-280000-16x9.jpeg?VersionId=u1iE0Bm8V7Jf1PQgZQUk.T1v8dd0xyKs"
              alt=""
              className="w-16 h-16 object-cover"
            />
            <p className="text-[16px] ml-4">
              Google pixel latest edition gets revealed in the techfest
              California,google headquarters.Google Pixel again breaks all the
              records
            </p>
          </div>

          <div className="border-b-[1px] border-slate-300 h-[70px] flex  items-center mt-2">
            <img
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/media_bank/202310/pixel-8-280000-16x9.jpeg?VersionId=u1iE0Bm8V7Jf1PQgZQUk.T1v8dd0xyKs"
              alt=""
              className="w-16 h-16 object-cover"
            />
            <p className="text-[16px] ml-4">
              Google pixel latest edition gets revealed in the techfest
              California,google headquarters.Google Pixel again breaks all the
              records
            </p>
          </div>

          <div className="border-b-[1px] border-slate-300 h-[70px] flex  items-center mt-2">
            <img
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/media_bank/202310/pixel-8-280000-16x9.jpeg?VersionId=u1iE0Bm8V7Jf1PQgZQUk.T1v8dd0xyKs"
              alt=""
              className="w-16 h-16 object-cover"
            />
            <p className="text-[16px] ml-4">
              Google pixel latest edition gets revealed in the techfest
              California,google headquarters.Google Pixel again breaks all the
              records
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleStock;
