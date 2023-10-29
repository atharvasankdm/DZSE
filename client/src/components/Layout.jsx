import React from "react";
import TopBar from "./TopBar";
import BottomBar from "./BottomBar";

const Layout = ({ children }) => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center font-['Poppins']">
      <div className="bg-white h-[100%] w-[70%] relative shadow-md">
        <TopBar />

        {children}
        <BottomBar />
      </div>
    </div>
  );
};

export default Layout;
