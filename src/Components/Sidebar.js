import { LayoutDashboard, Users, Menu, HomeIcon, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar({ sidebarOpen }) {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <aside
      className={`${
        sidebarOpen ? "w-64" : "w-20"
      } bg-[#E6ECFE] shadow-lg transition-all duration-300 flex flex-col`}
    >
    
    {/* HOME */}
    <div className="p-4 border-b flex items-center justify-center gap-2 text-[#455FBF] font-semibold">
        <HomeIcon size={22} />
        <span className={`transition-all duration-300 ${sidebarOpen ? "opacity-100" : "hidden"}`}>
        Home
        </span>
    </div>

      {/* MENU LIST */}
      <ul className="p-4 space-y-2">

        {/* Dropdown Menu */}
        <li>
          <div
            onClick={() => toggleMenu("tickets")}
            className="flex items-center justify-between p-2 rounded hover:bg-[#CDD7FE] cursor-pointer text-[#455FBF]"
          >
            <div className="flex items-center gap-3">
              <Menu size={20} />
              {sidebarOpen && "Menu"}
            </div>

            {sidebarOpen && <ChevronDown size={16} />}
          </div>

          {openMenu === "tickets" && sidebarOpen && (
            <ul className="ml-8 mt-2 space-y-2 text-sm">

              <li>
                <Link to="/services" className="flex items-center gap-3 p-2 rounded hover:bg-[#CDD7FE] cursor-pointer text-[#455FBF] hover:text-[#5D76D0]">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/payments" className="flex items-center gap-3 p-2 rounded hover:bg-[#CDD7FE] cursor-pointer text-[#455FBF] hover:text-[#5D76D0]">
                  Payments
                </Link>
              </li>

            </ul>
          )}
        </li>

        {/* Account */}
        
        <li
            className="flex items-center gap-3 p-2 rounded hover:bg-[#CDD7FE] cursor-pointer text-[#455FBF]"
        >
            <LayoutDashboard size={20} />
            {sidebarOpen && "Account"}
        </li>

        {/* Settings */}
        <li
            className="flex items-center gap-3 p-2 rounded hover:bg-[#CDD7FE] cursor-pointer text-[#455FBF]"
        >
            <Users size={20} />
            {sidebarOpen && "Settings"}
        </li>

      </ul>
    </aside>
  );
}

export default Sidebar;