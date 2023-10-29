import React from "react";
import Layout from "../components/Layout";

const ProfilePage = () => {
  return (
    <Layout>
      <div className="absolute top-20 w-full flex flex-col items-start overflow-y-scroll">
        <div className=" w-full flex flex-col  h-[600px]">
          <div className="ml-8 mt-8">
            <h1>Profile Information</h1>
            <h2>Update your profile information details</h2>
          </div>

          <div className="w-3/4  ml-8 mt-8 shadow-md h-auto p-4 flex flex-col">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src="https://tiermaker.com/images/chart/chart/cartoon-characters-i-want-to-punch-in-the-face-full-748002/41cuqnjf5klacjpg.png"
                  alt=""
                  className="w-12 h-12 rounded-full shadow-md"
                />

                <input type="file" className="ml-4" />
              </div>
              <button
                type="button"
                className="w-32 h-10 text-white text-[12px] bg-[#f14a41] p-2 rounded-lg shadow-slate-500 shadow-sm mt-4"
              >
                Delete Account
              </button>
            </div>

            <div className="mt-2">
              <span className="text-[12px]">NAME</span>
              <input
                type="search"
                id="search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none  "
                placeholder="Full Name"
                required
              />{" "}
            </div>
            <div className="mt-2">
              <span className="text-[12px]">EMAIL</span>
              <input
                type="search"
                id="search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none  "
                placeholder="Email"
                required
              />{" "}
            </div>
            <div className="mt-2">
              <span className="text-[12px]">PASSWORD</span>
              <input
                type="search"
                id="search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none  "
                placeholder="Password"
                required
              />{" "}
            </div>

            <div className="w-full flex justify-end">
              <button
                type="button"
                className="w-20 h-10 text-white text-[12px] bg-[#5462B5] p-2 rounded-lg shadow-slate-500 shadow-sm mt-4"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
