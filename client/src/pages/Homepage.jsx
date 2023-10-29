import React from "react";
import { CiLock } from "react-icons/ci";
import StockMinified from "../components/StockMinified";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";
import Layout from "../components/Layout";
import AccountDetailCard from "../components/AccountDetailCard";

const Homepage = () => {
  return (
    // <div className="w-[100vw] h-[100vh]  flex justify-center font-['Poppins']">
    //   <div className="bg-white h-[100%] w-[70%] relative shadow-md">
    <Layout>
      {/*main content*/}
      <div className="w-full   absolute top-20 h-[75%] overflow-y-auto flex flex-col items-center ">
        <div className="w-1/2">
          <AccountDetailCard />
        </div>

        <div className="w-full flex flex-col items-center ">
          <div className="w-full">
            <p className="text-xl text-start ml-16 mb-4 mt-4  ">Stocks:</p>
          </div>
          <div className="w-[80%]">
            <StockMinified />
            <StockMinified />
            <StockMinified />
            <StockMinified />
            <StockMinified />
          </div>

          <div className="w-full border-t-[1px] border-gray-200 mt-4 flex flex-col items-center">
            <div className="w-full">
              <p className="text-xl text-start ml-16 mb-4 mt-4  ">Watchlist:</p>
            </div>

            <div className="grid grid-cols-2 place-content-center gap-4 w-[80%]">
              <StockMinified />
              <StockMinified />
              <StockMinified />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
