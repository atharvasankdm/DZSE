import React, {useState} from "react";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { Link , useNavigate} from "react-router-dom";

const CompanyLogin = () => {

  let navigate = useNavigate()
  const [credentials  , setCredentials] = useState({email : '' , password : ""})

  const handleSubmit =  async () => {
    console.log("logn cliked ")
    console.log(credentials)
    const response = await fetch("http://localhost:5000/api/stock/login", {
      method : 'POST',
      headers: {
        "Content-Type" : "application/json"
      }, 
      body: JSON.stringify({email :credentials.email , password : credentials.password})
      // body: JSON.stringify({phone : , password : credentials.phone})
    })

    const json = await response.json()
    console.log(json);
    console.log(json.authToken)
    if (json.success) {
      localStorage.setItem('token' , json.authToken)
      navigate('/company/home')
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
                <CiMail />
              </div>
              <input
                type="search"
                id="search"
                name = "email"
                onChange={onChange}
                value = {credentials.email}
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none  "
                placeholder="Email Address"
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
                name = "password"
                onChange={onChange}
                value = {credentials.password}
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
            <Link to="/company/register">
              <p className="w-full text-center text-[12px] text-slate-400 mt-2">
                Haven't registered the company yet?
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogin;
