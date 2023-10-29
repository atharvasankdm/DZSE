import React from "react";
import Layout from "./Layout";
import StockMinified from "./StockMinified";
import { IoMdArrowDropup } from "react-icons/io";
import { RenderLineChart } from "./RenderLineChart";

const SingleStock = () => {
  return (
    <Layout>
      <div className=" w-full h-[75%] overflow-y-scroll absolute top-20 flex flex-col items-center mt-2">
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

        <div className="flex flex-col w-3/4 mt-8">
          <h1>News:</h1>
          <div className="border-b-[1px] border-slate-300 h-[70px] flex  items-center mt-2">
            <img
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/media_bank/202310/pixel-8-280000-16x9.jpeg?VersionId=u1iE0Bm8V7Jf1PQgZQUk.T1v8dd0xyKs"
              alt=""
              className="w-16 h-16 object-cover"
            />
            <p className="text-[16px] ml-4">
              Google pixel latest edition gets revealed in the techfest
              California,google headquarters.Google Pixel again breaks all the
              records
            </p>
          </div>

          <div className="border-b-[1px] border-slate-300 h-[70px] flex  items-center mt-2">
            <img
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/media_bank/202310/pixel-8-280000-16x9.jpeg?VersionId=u1iE0Bm8V7Jf1PQgZQUk.T1v8dd0xyKs"
              alt=""
              className="w-16 h-16 object-cover"
            />
            <p className="text-[16px] ml-4">
              Google pixel latest edition gets revealed in the techfest
              California,google headquarters.Google Pixel again breaks all the
              records
            </p>
          </div>

          <div className="border-b-[1px] border-slate-300 h-[70px] flex  items-center mt-2">
            <img
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/media_bank/202310/pixel-8-280000-16x9.jpeg?VersionId=u1iE0Bm8V7Jf1PQgZQUk.T1v8dd0xyKs"
              alt=""
              className="w-16 h-16 object-cover"
            />
            <p className="text-[16px] ml-4">
              Google pixel latest edition gets revealed in the techfest
              California,google headquarters.Google Pixel again breaks all the
              records
            </p>
          </div>

          <div className="border-b-[1px] border-slate-300 h-[70px] flex  items-center mt-2">
            <img
              src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/media_bank/202310/pixel-8-280000-16x9.jpeg?VersionId=u1iE0Bm8V7Jf1PQgZQUk.T1v8dd0xyKs"
              alt=""
              className="w-16 h-16 object-cover"
            />
            <p className="text-[16px] ml-4">
              Google pixel latest edition gets revealed in the techfest
              California,google headquarters.Google Pixel again breaks all the
              records
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleStock;
