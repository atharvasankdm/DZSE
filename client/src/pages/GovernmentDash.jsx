import React from "react";
import GovernmentLayout from "../components/GovernmentLayout";
import ApprovalRequest from "../components/ApprovalRequest";

const GovernmentDash = () => {
  return (
    <GovernmentLayout>
      <div className="w-full flex flex-col h-[650px] overflow-y-scroll">
        <h1 className="text-2xl ml-8 mt-8">APPROVAL REQUESTS:</h1>

        <ApprovalRequest />
        <ApprovalRequest />
        <ApprovalRequest />
        <ApprovalRequest />
        <ApprovalRequest />
        <ApprovalRequest />
      </div>
    </GovernmentLayout>
  );
};

export default GovernmentDash;
