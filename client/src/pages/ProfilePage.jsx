import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

const ProfilePage = () => {

  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    date: ""
  });

  useEffect(() => {
    getData()
    
  }, [])
  const getData =  async () => {
    const response = await fetch("http://localhost:5000/api/auth/getUser", {
      method : 'GET',
      headers: {
        "Content-Type" : "application/json",
        // "auth-token" : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU0MTUzOWI0NGQ4NTc1ODU5NWVjMTgxIiwicGhvbmUiOiI5OTMwMjQ4NDYwIn0sImlhdCI6MTY5ODc4MTUwNX0.a-6M93t9iH0ii3j2IaFol9n4mDpA9syaxBKuz771PrM'
        "auth-token" : localStorage.getItem("token")
      }
      // body: JSON.stringify({ phone })not required 
    })
    console.log(response)
      if (response.ok) {
        const data = await response.json()
      setUserData = setUserData({
        name: data.name,
        phone: data.phone,
        date: data.date
      });
      } else {
        alert("We have encountered an error. Try Again!")
      }
    
    // console.log(data)
    }

  return (
    <Layout>
      <div className="absolute top-20 w-full flex flex-col items-start overflow-y-scroll">
        <div className=" w-full flex flex-col  h-[600px]">
          <div className="ml-8 mt-8">
            <h1>Profile Information</h1>
            {/* <h2>Update your profile information details</h2> */}
          </div>

          <div className="w-3/4  ml-8 mt-8 shadow-md h-auto p-4 flex flex-col">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src="https://tiermaker.com/images/chart/chart/cartoon-characters-i-want-to-punch-in-the-face-full-748002/41cuqnjf5klacjpg.png"
                  alt=""
                  className="w-20 h-20 rounded-full shadow-md"
                />

                {/* <input type="file" className="ml-4" /> */}
              </div>
              {/* <button
                type="button"
                className="w-32 h-10 text-white text-[12px] bg-[#f14a41] p-2 rounded-lg shadow-slate-500 shadow-sm mt-4"
              >
                Delete Account
              </button> */}
            </div>

            <div className="mt-2">
              <span className="text-[12px]">NAME</span>
              <input
                type="search"
                id="search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none  "
                placeholder="Full Name"
                value = {userData.name}
                required
              />{" "}
            </div>
            <div className="mt-2">
              <span className="text-[12px]">PHONE</span>
              <input
                type="search"
                id="search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none  "
                placeholder="Email"
                required
                value = {userData.phone}
              />{" "}
            </div>
            <div className="mt-2">
              <span className="text-[12px]">DATE OF JOINING</span>
              <input
                type="search"
                id="search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none  "
                placeholder="Date of Joining"
                required
                value = {userData.date}
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
