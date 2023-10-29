import React, { useState } from "react";
import SingleStock from "../components/SingleStock";
import { RenderLineChart } from "../components/RenderLineChart";
import { IoMdArrowDropup } from "react-icons/io";
const CompanyHomePage = () => {
  const [isListed, setIsListed] = useState(false);

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center font-['Poppins']">
      <div className="bg-white h-[100%] w-[70%] relative shadow-md">
        <h1 className="ml-8 text-[#DC5D80]">GOOGLE</h1>
        <div className=" w-full h-[75%] overflow-y-scroll absolute top-20 flex flex-col items-center mt-2">
          {isListed && (
            <>
              {" "}
              <div className="w-[80%] h-[70px]  flex justify-between mt-2">
                <div className="flex justify-center items-center">
                  <img
                    src="http://pluspng.com/img-png/google-logo-png-open-2000.png"
                    className="w-12 h-12  shadow-lg rounded-full p-1"
                    alt=""
                  />
                  <div className="flex flex-col justify-center ml-4">
                    <p className="text-xl font-semibold">GOOGLE</p>
                    <p className="text-[14px] text-slate-500">Alphabet.co</p>
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
