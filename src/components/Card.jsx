import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col justify-between p-4 border rounded shadow">
      <h2 className="text-lg font-bold">Card Title</h2>
      <p className="text-sm text-gray-600">Card description goes here.</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Learn More
      </button>
    </div>
  );
};

export default Card;
