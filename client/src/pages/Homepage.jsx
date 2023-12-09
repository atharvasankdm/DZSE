import React, { useState, useEffect } from "react";
import { CiLock } from "react-icons/ci";
import StockMinified from "../components/StockMinified";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";
import Layout from "../components/Layout";
import AccountDetailCard from "../components/AccountDetailCard";
import { userContext } from "../contexts/userContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const { setUser } = useContext(userContext);

  const [userData, setUserData] = useState({
    name: "",
    total: "",
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
    // <div className="w-[100vw] h-[100vh]  flex justify-center font-['Poppins']">
    //   <div className="bg-white h-[100%] w-[70%] relative shadow-md">
    <Layout user={userData}>
      {/*main content*/}
      <div className="w-full   absolute top-20 h-[75%] overflow-y-auto flex flex-col items-center ">
        <div className="w-1/2">
          <AccountDetailCard total={userData.total} />
        </div>

        <div className="w-full flex flex-col items-center ">
          <div className="w-full">
            <p className="text-xl text-start ml-16 mb-4 mt-4  ">Stocks:</p>
          </div>
          <div className="w-[80%]">
            {/* <StockMinified />
            <StockMinified />
            <StockMinified />
            <StockMinified />
            <StockMinified /> */}
            {userData.stocks.map((stock, index) => (
              <Link to={`/investor/company/${stock.symbol}`}>
                <StockMinified
                  key={index}
                  quantity={stock.quantity}
                  symbol={stock.symbol}
                  name={stock.name}
                  price={stock.price}
                />
              </Link>
            ))}
          </div>

          <div className="w-full border-t-[1px] border-gray-200 mt-4 flex flex-col items-center">
            <div className="w-full">
              <p className="text-xl text-start ml-16 mb-4 mt-4  ">Watchlist:</p>
            </div>

            <div className="grid grid-cols-2 place-content-center gap-4 w-[80%]">
              <StockMinified />
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
