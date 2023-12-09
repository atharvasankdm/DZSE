import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Homepage from "./pages/Homepage";
import SingleStock from "./components/SingleStock";
import Account from "./pages/Account";
import Notifications from "./pages/Notifications";
import ProfilePage from "./pages/ProfilePage";
import GovernmentDash from "./pages/GovernmentDash";
import InvestorKYC from "./components/InvestorKYC";
import CompanyRegister from "./pages/CompanyRegister";
import CompanyLogin from "./pages/CompanyLogin";
import CompanyHomePage from "./pages/CompanyHomePage";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { userContext } from "./contexts/userContext";

const App = () => {
  const [user, setUser] = useState({});
  useEffect(() => {}, [user]);

  return (
    <userContext.Provider value={{ user, setUser }}>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/investor/login" element={<Login />} />
        <Route path="/investor/register" element={<Register />} />
        <Route path="/company/login" element={<CompanyLogin />} />
        <Route path="/company/register" element={<CompanyRegister />} />
        <Route path="/company/home" element={<CompanyHomePage />} />
        <Route path="/investor/home" element={<Homepage />} />
        <Route path="/investor/profile" element={<ProfilePage />} />
        <Route path="/investor/KYC" element={<InvestorKYC />} />
        <Route path="/investor/holdings" element={<Account />} />
        <Route path="/investor/company/:id" element={<SingleStock />} />
        <Route path="/investor/notifications" element={<Notifications />} />
        <Route path="/government/home" element={<GovernmentDash />} />
      </Routes>
    </userContext.Provider>
  );
};

export default App;
