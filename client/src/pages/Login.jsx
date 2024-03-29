import React, { useState } from "react";
import { CiPhone } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom"; // Import useHistory

const Login = () => {
  let navigate = useNavigate()
  const [credentials  , setCredentials] = useState({phone : '' , password : ""})

  const handleSubmit =  async () => {
    console.log("logn cliked ")
    console.log(credentials)
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method : 'POST',
      headers: {
        "Content-Type" : "application/json"
      }, 
      body: JSON.stringify({phone :credentials.phone , password : credentials.password})
      // body: JSON.stringify({phone : , password : credentials.phone})
    })

    const json = await response.json()
    console.log(json);
    if (json.success) {
      localStorage.setItem('token' , json.authToken)
      navigate('/investor/holdings')
    } else {
      alert("Invalid Credentials!")
    }
  }


  const onChange = (e) => {
    setCredentials({...credentials, [e.target.name] : e.target.value})
    console.log([e.target.name] , e.target.value)
  }

  return (
    <div className="w-[100vw] h-[100vh] bg-[#B8CEE4] flex justify-center items-center font-['Poppins']">
      <div className="w-[75%] h-[85%] shadow-md rounded-lg flex">
        <div className="w-[60%] rounded-lg bg-gradient-to-b from-blue-400 to-blue-800 flex flex-col justify-center">
          <div className="ml-28">
            <h1 className="text-white text-3xl mb-2">DeStocks</h1>

            <h3 className="text-white mb-4">
              The most popular peer to peer lending at SEA
            </h3>

            <button
              type="button"
              className="w-28 text-white text-[12px] bg-[#0575E6] p-2 rounded-md shadow-slate-500 shadow-sm"
            >
              Read More
            </button>
          </div>
        </div>

        <div className="w-[40%] rounded-lg bg-white flex justify-center items-center ">
          <div className="flex flex-col justify-center">
            <h1 className="font-bold text-2xl">Hello Again</h1>
            <h2 className="mt-2">Welcome Back</h2>

            <div className="relative mt-8">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <CiPhone />
              </div>
              <input
                type="search"
                id="search"
                name="phone" // Add this name attribute
                value = {credentials.phone}
                onChange={onChange}
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none  "
                placeholder="Phone"
                required
              />
            </div>

            <div className="relative mt-4">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <CiLock />
              </div>
              <input
                type="search"
                id="search"
                name="password" // Add this name attribute
                value = {credentials.password}
                onChange={onChange}
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none  "
                placeholder="Password"
                required
              />
            </div>
            <button
              type="button"
              className="w-full h-10 text-white text-[12px] bg-[#0575E6] p-2 rounded-lg shadow-slate-500 shadow-sm mt-4"
              onClick={handleSubmit}
            >
              Login
            </button>

            <Link to="/investor/register">
              <p className="w-full text-center text-[12px] text-slate-400 mt-2">
                New here?
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
