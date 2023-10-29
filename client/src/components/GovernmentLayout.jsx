import React from "react";

const GovernmentLayout = ({ children }) => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center font-['Poppins']">
      <div className="absolute top-0 left-0">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          className="w-32 ml-4 mt-8"
        />
      </div>
      <div className="bg-white h-[100%] w-[70%] relative shadow-md">
        {children}
      </div>
    </div>
  );
};

export default GovernmentLayout;