import React from "react";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="order-2 lg:order-1 lg:col-span-2 bg-gray-50 p-4 rounded-lg">
        <h2 className="text-xl font-semibold">Main Content</h2>
        <p>Here’s the main blog content.</p>
      </div>

      <aside className="order-1 lg:order-2 bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold">Sidebar</h3>
        <ul>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Link 1
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">
              Link 2
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Dashboard;
