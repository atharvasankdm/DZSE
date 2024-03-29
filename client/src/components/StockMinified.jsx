import React from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

const StockMinified = (props) => {
  return (
    <div className="w-full h-[70px] border-gray-300 border-b-[1px] flex justify-between mt-2">
      <div className="flex justify-center items-center">
        {/* <img
          src="http://pluspng.com/img-png/google-logo-png-open-2000.png"
          className="w-12 h-12  shadow-lg rounded-full p-1"
          alt=""
        /> */}
        <p className="text-xl font-semibold">{props.quantity}</p>
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-xl font-semibold">{props.symbol}</p>
        <p className="text-[14px] text-slate-500">{props.name}</p>
      </div>

      <div className="flex flex-col justify-center">
        <p className="text-xl font-semibold">{props.price}</p>
        {/* <div className="flex text-green-500">
          <IoMdArrowDropup />
          2.35%
        </div> */}
      </div>
    </div>
  );
};

export default StockMinified;
