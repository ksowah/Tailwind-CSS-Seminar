import React from "react";

const Sidebar = () => {
  return (
    <aside className="col-span-1 flex flex-col justify-between p-4 bg-gray-100">
      <nav className="space-y-2">
        <a href="#" className="block px-3 py-2 rounded hover:bg-gray-200">
          Link 1
        </a>
        <a href="#" className="block px-3 py-2 rounded hover:bg-gray-200">
          Link 2
        </a>
      </nav>
      <div className="mt-4">
        <button className="px-4 py-2 bg-red-500 text-white rounded">Logout</button>
      </div>
    </aside>
  );
};

export default Sidebar;
