import React from "react";

const ApprovalRequest = () => {
  return (
    <div className="w-full h-[140px] flex justify-between shadow-md mt-4 p-4">
      <div className="flex items-center">
        <img
          src="https://tiermaker.com/images/chart/chart/cartoon-characters-i-want-to-punch-in-the-face-full-748002/41cuqnjf5klacjpg.png"
          alt=""
          className="w-20 h-20 rounded-full shadow-md m-2 mr-4"
        />

        <div className="flex flex-col justify-center">
          <span className="text-[20px]">Atharva Kadam</span>
          <span>Age: 21</span>
          <button
            type="button"
            className="w-32 h-10 text-white text-[12px] bg-[#5462B5] p-2 rounded-lg shadow-slate-500 shadow-sm mt-4"
          >
            View Documents
          </button>
        </div>
        <div className="flex max-w-xs ml-4">
          <span>Address: Hari heights CHS sec-09 plot 23 Navi Mumbai</span>
        </div>
      </div>

      <div className="flex flex-col justify-center mr-8">
        <button
          type="button"
          className="w-32 h-10 text-white text-[12px] bg-green-500 p-2 rounded-lg shadow-slate-500 shadow-sm "
        >
          Approve Request
        </button>
        <button
          type="button"
          className="w-32 h-10 text-white text-[12px] bg-[#f14a41] p-2 rounded-lg shadow-slate-500 shadow-sm mt-2"
        >
          Deny Request
        </button>
      </div>
    </div>
  );
};

export default ApprovalRequest;
