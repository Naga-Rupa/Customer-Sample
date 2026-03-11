import { useState } from "react";
import Sidebar from "./Sidebar";

function HomeLayout({ children }) {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-grey-100">

      <Sidebar sidebarOpen={sidebarOpen} />

      <div className="flex-1 p-6">

        {/* Toggle Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="mb-4 bg-[#E6ECFE] text-[#455FBF] px-4 py-2 rounded"
        >
          ☰
        </button>

        {children}

      </div>

    </div>
  );
}

export default HomeLayout;