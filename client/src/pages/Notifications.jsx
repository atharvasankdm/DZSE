import React from "react";
import Layout from "../components/Layout";

const Notifications = () => {
  return (
    <Layout>
      <div className="absolute top-20 w-full flex flex-col items-center">
        <h1 className="text-slate-400">No Notifications available right now</h1>
      </div>
    </Layout>
  );
};

export default Notifications;
