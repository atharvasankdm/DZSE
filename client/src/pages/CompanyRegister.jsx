import React, {useState} from "react";
import { CiMail } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";
import { Link , useNavigate} from "react-router-dom";


const CompanyRegister = () => {

  let navigate = useNavigate()
  const [credentials  , setCredentials] = useState({name : "" , email : "" , password : ""})

  const handleSubmit =  async () => {
    console.log("company register cliked ")
    console.log(credentials)
    const response = await fetch("http://localhost:5000/api/stock/createStock", {
      method : 'POST',
      headers: {
        "Content-Type" : "application/json"
      }, 
      body: JSON.stringify({email :credentials.email , password : credentials.password, name : credentials.name})
      // body: JSON.stringify({email : , password : credentials.email})
    })
    const json = await response.json()
    console.log(json);
    if (json.success) {
      // localStorage.setItem('token' , json.authToken)
      console.log(json.response)
      navigate('/company/login')
    } else {
      alert("Customer already exists!")
    }
  }

  const onChange = (e) => {
    setCredentials({...credentials, [e.target.name] : e.target.value})
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
            <h1 className="font-bold text-2xl">Hello </h1>
            <h2 className="mt-2">Sign up as a company</h2>

            <div className="relative mt-8">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <CiFaceSmile />
              </div>
              <input
                type="search"
                id="search"
                name="name" // Add this name attribute
                value = {credentials.name}
                onChange={onChange}
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none  "
                placeholder="Company Name"
                required
              />
            </div>

            <div className="relative mt-4">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <CiMail />
              </div>
              <input
                type="search"
                id="search"
                name="email" // Add this name attribute
                value = {credentials.email}
                onChange={onChange}
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
              Sign up
            </button>
            <Link to="/company/login">
              <p className="w-full text-center text-[12px] text-slate-400 mt-2">
                Already joined?
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegister;
