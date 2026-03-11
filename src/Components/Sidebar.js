import { LayoutDashboard, Users, Menu, MessageCircle, ChevronDown } from "lucide-react";
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
      } bg-white shadow-lg transition-all duration-300 flex flex-col`}
    >
      {/* LOGO */}
      <div className="p-4 border-b flex justify-center">
        <img className="object-contain h-10" src="/logo/logo.png" alt="logo" />
      </div>

      {/* MENU LIST */}
      <ul className="p-4 space-y-2">

        {/* Dropdown Menu */}
        <li>
          <div
            onClick={() => toggleMenu("tickets")}
            className="flex items-center justify-between p-2 rounded hover:bg-[#cee4d8] cursor-pointer text-[#0b7d7b]"
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
                <Link to="/services" className="hover:text-[#0b7d7b]">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/payments" className="hover:text-[#0b7d7b]">
                  Payments
                </Link>
              </li>

            </ul>
          )}
        </li>

        {/* Account */}
<li
  className="flex items-center gap-3 p-2 rounded hover:bg-[#cee4d8] cursor-pointer text-[#0b7d7b]"
>
  <LayoutDashboard size={20} />
  {sidebarOpen && "Account"}
</li>

{/* Settings */}
<li
  className="flex items-center gap-3 p-2 rounded hover:bg-[#cee4d8] cursor-pointer text-[#0b7d7b]"
>
  <Users size={20} />
  {sidebarOpen && "Settings"}
</li>

{/* Chat */}
<li
  className="flex items-center gap-3 p-2 rounded hover:bg-[#cee4d8] cursor-pointer text-[#0b7d7b]"
>
  <MessageCircle size={20} />
  {sidebarOpen && "Chat"}
</li>

      </ul>
    </aside>
  );
}

export default Sidebar;