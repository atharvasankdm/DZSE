import React, { useState, useEffect } from "react";
import SingleStock from "../components/SingleStock";
import { RenderLineChart } from "../components/RenderLineChart";
import { IoMdArrowDropup } from "react-icons/io";
import { ethers } from "ethers"; // Import ethers.js
import { ExchangeABI } from "../ExchangeABI";

const CompanyHomePage = () => {
  const [isListed, setIsListed] = useState(false);

  const [companyAddress, setCompanyAddress] = useState(
    "0x8464135c8F25Da09e49BC8782676a84730C318bC"
  );
  const [companyId, setCompanyId] = useState("REL");
  const [contractAddress, setContractAddress] = useState(
    "0x5FbDB2315678afecb367f032d93F642f64180aa3"
  );
  // company address ko DB mai rakho, say maam ki company verify hoke deploy hogi and company contract ko address milega joh DB mai save hoga

  const AddCompany = async () => {
    if (typeof window.ethereum === "undefined") {
      console.error("Metamask not found");
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, ExchangeABI, signer);

    try {
      const tx = await contract.addCompany(companyAddress, companyId);
      await tx.wait();
      console.log("Company added successfully!");
    } catch (error) {
      console.error("Error adding company:", error);
    }
  };

  const [userData, setUserData] = useState({
    name: "",
    symbol: "",
    weekHigh52: "",
    weekLow52: "",
    marketCap: "",
    numberofshares: "",
    price: "",
  });

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await fetch("http://localhost:5000/api/stock/getStock", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "auth-token" : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU0MTUzOWI0NGQ4NTc1ODU5NWVjMTgxIiwicGhvbmUiOiI5OTMwMjQ4NDYwIn0sImlhdCI6MTY5ODc4MTUwNX0.a-6M93t9iH0ii3j2IaFol9n4mDpA9syaxBKuz771PrM'
        "auth-token": localStorage.getItem("token"),
      },
      // body: JSON.stringify({ email })not required
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      if (data.address != null) {
        setIsListed(true);

        setUserData = setUserData({
          name: data.name,
          symbol: data.symbol,
          weekHigh52: data.weekHigh52,
          weekLow52: data.weekHigh52,
          marketCap: data.marketCap,
          numberofshares: data.numberofshares,
          price: data.price,
        });
      } else {
        setIsListed(false);
      }
    } else {
      alert("We have encountered an error. Try Again!");
    }

    // console.log(data)
  };

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center font-['Poppins']">
      <div className="bg-white h-[100%] w-[70%] relative shadow-md">
        <h1 className="ml-8 text-[#DC5D80]">{userData.symbol}</h1>
        <div className=" w-full h-[75%] overflow-y-scroll absolute top-20 flex flex-col items-center mt-2">
          {isListed && (
            <>
              {" "}
              <div className="w-[80%] h-[70px]  flex justify-between mt-2">
                <div className="flex justify-center items-center">
                  {/* <img
                    src="http://pluspng.com/img-png/google-logo-png-open-2000.png"

                    className="w-12 h-12  shadow-lg rounded-full p-1"
                    alt=""
                  /> */}
                  <div className="flex flex-col justify-center ml-4">
                    <p className="text-xl font-semibold">{userData.name}</p>
                    <p className="text-[14px] text-slate-500">
                      {userData.symbol}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <p className="text-xl font-semibold">{userData.price}</p>
                  {/* <div className="flex text-green-500">
                    <IoMdArrowDropup />
                    2.35%
                  </div> */}
                </div>
              </div>
              <div className="mt-4">
                <RenderLineChart height={400} width={600} showAxes={true} />
              </div>
              {/* <div className="w-full h-[50px] flex flex-col overflow-y-auto">
          <h1>siu</h1>
          <h1>siu</h1>
          <h1>siu</h1>
        </div> */}
              <div className="flex flex-col w-3/4 ">
                <h1>Statistics:</h1>
                <div className="border-b-[1px] border-slate-300 h-[50px] flex justify-between items-center">
                  <span>Market Cap</span>
                  <span>{userData.marketCap}</span>
                </div>
                <div className="border-b-[1px] border-slate-300 h-[50px] flex justify-between items-center">
                  <span>52 Week High</span>
                  <span>{userData.weekHigh52}</span>
                </div>
                <div className="border-b-[1px] border-slate-300 h-[50px] flex justify-between items-center">
                  <span>52 Week Low</span>
                  <span>{userData.weekLow52}</span>
                </div>
                <div className="border-b-[1px] border-slate-300 h-[50px] flex justify-between items-center">
                  <span>Number of Shares</span>
                  <span>{userData.numberofshares}</span>
                </div>
              </div>
            </>
          )}

          {!isListed && (
            <>
              <h1>List Company Shares</h1>

              <div className="w-1/2 h-[400px] shadow-md mt-2 flex flex-col justify-around p-2">
                <input
                  type="search"
                  id="search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none  "
                  placeholder="Company Name"
                  required
                />

                <input
                  type="number"
                  id="search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none  "
                  placeholder="Number Of Shares"
                  required
                />
                <input
                  type="number"
                  id="search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none  "
                  placeholder="Base Price"
                  required
                />
                <textarea
                  type="search"
                  id="search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none  "
                  placeholder="Company Address"
                  required
                />

                <div>
                  <span className="text-slate-400">Company Logo</span>
                  <input
                    type="file"
                    id="search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none mt-2  "
                    placeholder="logo"
                    required
                  />
                </div>

                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    className="w-28 text-white text-[12px] bg-[#5462B5]  rounded-md shadow-slate-500 h-12 mr-4"
                    onClick={AddCompany}
                  >
                    Request Listing
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyHomePage;
