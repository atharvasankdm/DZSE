import React from "react";
import Layout from "../components/Layout";
import AccountDetailCard from "../components/AccountDetailCard";
import StockMinified from "../components/StockMinified";

const Account = () => {
  return (
    <Layout>
      <div className="absolute top-20 w-full flex flex-col items-center overflow-y-scroll">
        <div className=" grid grid-cols-2 gap-4">
          <AccountDetailCard />

          <div className="w-full h-[120px] bg-gradient-to-br from-[#5462B5] to-[#DC5D80] mt-4 rounded-2xl flex  justify-around ">
            <div className="flex flex-col justify-center">
              <p className="text-white ml-4 ">My Balance</p>
              <p className="text-white text-4xl font-bold ml-4 mt-2">220 Eth</p>
            </div>
          </div>
        </div>

        <div className="w-full h-96 flex flex-col items-center mt-8">
          <h1>My Stocks:</h1>
          <div className="w-1/2">
            <StockMinified />
            <StockMinified />
            <StockMinified />
            <StockMinified />
            <StockMinified />
            <StockMinified />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Account;
