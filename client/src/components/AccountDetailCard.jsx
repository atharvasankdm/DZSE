import React from "react";
import { RenderLineChart } from "../components/RenderLineChart";

const AccountDetailCard = (props) => {
  return (
    <div className="w-full h-[120px] bg-gradient-to-br from-[#5462B5] to-[#DC5D80] mt-4 rounded-2xl flex  justify-around ">
      <div className="flex flex-col justify-center">
        <p className="text-white ml-4 ">Total Investments</p>
        <p className="text-white text-4xl font-bold ml-4 mt-2">{props.total}</p>
      </div>

      <div className="flex flex-col justify-center p-2">
        <RenderLineChart height={100} width={100} />
      </div>
    </div>
  );
};

export default AccountDetailCard;
