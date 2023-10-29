import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const TopBar = () => {
  const [showProfileDown, setShowProfileDOwn] = useState(false);
  const [verified, setVerified] = useState(false);

  return (
    <div className="w-[70%] fixed top-0 border-gray-200 border-b-[1px] flex justify-between py-4">
      <div className="ml-4 relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <CiSearch />
        </div>
        <input
          type="search"
          id="search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-200 rounded-lg focus:outline-none  "
          placeholder="Search Stocks"
          required
        />
      </div>

      <div className="mr-4 flex">
        <button
          type="button"
          className="w-28 text-white text-[12px] bg-[#5462B5]  rounded-md shadow-slate-500 h-12 mr-4"
        >
          Connect Wallet
        </button>
        <div className="relative">
          <img
            src="https://tiermaker.com/images/chart/chart/cartoon-characters-i-want-to-punch-in-the-face-full-748002/41cuqnjf5klacjpg.png"
            alt=""
            className="w-12 h-12 rounded-full shadow-md cursor-pointer"
            onClick={() => {
              setShowProfileDOwn((prev) => !prev);
            }}
          />
          {showProfileDown && (
            <div className="w-44 h-28 absolute top-12 shadow-lg bg-white flex flex-col justify-center items-center">
              <span className="text-[20px]">Atharva Kadam</span>
              {!verified ? (
                <button
                  type="button"
                  className="w-28 text-white text-[12px] bg-[#DC5D80]  rounded-md shadow-slate-500 h-10 mt-4 mr-4"
                >
                  Verify Account
                </button>
              ) : (
                <h1 className="text-xl text-slate-500">Verified</h1>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
