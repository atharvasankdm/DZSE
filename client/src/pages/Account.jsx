import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import AccountDetailCard from "../components/AccountDetailCard";
import StockMinified from "../components/StockMinified";
import { userContext } from "../contexts/userContext";
import { useContext } from "react";
const Account = () => {
  const { setUser } = useContext(userContext);

  const [userData, setUserData] = useState({
    name: "",
    total: "",
    balance: "",
    stocks: [],
  });

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await fetch("http://localhost:5000/api/auth/getUser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "auth-token" : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU0MTUzOWI0NGQ4NTc1ODU5NWVjMTgxIiwicGhvbmUiOiI5OTMwMjQ4NDYwIn0sImlhdCI6MTY5ODc4MTUwNX0.a-6M93t9iH0ii3j2IaFol9n4mDpA9syaxBKuz771PrM'
        "auth-token": localStorage.getItem("token"),
      },
      // body: JSON.stringify({ phone })not required
    });
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setUserData({
        name: data.name,
        total: data.total,
        balance: data.balance,
        stocks: data.stocks,
      });
      setUser({
        name: data.name,
        total: data.total,
        stocks: data.stocks,
      });
    } else {
      alert("We have encountered an error. Try Again!");
    }

    // console.log(data)
  };

  return (
    <Layout>
      <div className="absolute top-20 w-full flex flex-col items-center overflow-y-scroll">
        <div className=" grid grid-cols-2 gap-4">
          <AccountDetailCard total={userData.total} />

          <div className="w-full h-[120px] bg-gradient-to-br from-[#5462B5] to-[#DC5D80] mt-4 rounded-2xl flex  justify-around ">
            <div className="flex flex-col justify-center">
              <p className="text-white ml-4 ">My Balance</p>
              <p className="text-white text-4xl font-bold ml-4 mt-2">
                {userData.balance}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-96 flex flex-col items-center mt-8">
          <h1>My Stocks:</h1>
          {/* <div className="w-1/2">
            <StockMinified />
            <StockMinified />
            <StockMinified />
            <StockMinified />
            <StockMinified />
            <StockMinified />
          </div> */}
          <div className="w-1/2">
            {userData.stocks.map((stock, index) => (
              <StockMinified
                key={index}
                quantity={stock.quantity}
                symbol={stock.symbol}
                name={stock.name}
                price={stock.price}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Account;
