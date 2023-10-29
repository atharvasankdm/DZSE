import React from "react";

const InvestorKYC = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="w-1/2 h-3/4 shadow-lg flex flex-col p-4 justify-around">
        <h1 className="text-2xl ml-2 mt-4">Send details for verification</h1>
        <input
          type="search"
          id="search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none  "
          placeholder="Full Name"
          required
        />

        <input
          type="date"
          id="search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none  "
          placeholder="birth"
          required
        />
        <input
          type="number"
          id="search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none  "
          placeholder="Number"
          required
        />
        <textarea
          type="search"
          id="search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none  "
          placeholder="Address"
          required
        />

        <div>
          <span className="text-slate-400">Document</span>
          <input
            type="file"
            id="search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none mt-2  "
            placeholder="Full Name"
            required
          />
        </div>

        <div className="flex justify-between items-center">
          <button
            type="button"
            className="w-28 text-white text-[12px] bg-[#5462B5]  rounded-md shadow-slate-500 h-12 mr-4"
          >
            Submit
          </button>
          <button
            type="button"
            className="w-28 text-white text-[12px] bg-[#6CAAA8]  rounded-md shadow-slate-500 h-12 mr-4"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestorKYC;
