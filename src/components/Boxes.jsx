import React from "react";

const Boxes = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      <div className="p-6 border rounded-lg text-center bg-gray-50 shadow-lg">
        <h3 className="text-xl font-semibold">Basic Plan</h3>
        <p className="text-gray-500 text-fluid-lg">$19/month</p>
      </div>
      <div className="p-6 border rounded-lg text-center bg-gray-100 shadow-lg">
        <h3 className="text-xl font-semibold">Standard Plan</h3>
        <p className="text-gray-500 text-fluid-lg">$49/month</p>
      </div>
      <div className="p-6 border rounded-lg text-center bg-gray-200 shadow-lg lg:hidden">
        <h3 className="text-xl font-semibold">Premium Plan</h3>
        <p className="text-gray-500 text-fluid-lg">$99/month</p>
      </div>
    </div>
  );
};

export default Boxes;
