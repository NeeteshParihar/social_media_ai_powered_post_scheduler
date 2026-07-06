import {
  CalendarDays,
  LayoutDashboardIcon,
  LogOutIcon,
  UserIcon,
  Wand2Icon,
} from "lucide-react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

interface IpropSidebar {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: IpropSidebar) => {
  const navigate = useNavigate();
  const { user, logoutFn } = {
    logoutFn: () => navigate("/"),
    user: {
      name: "John doe",
      email: "Johndoe@gmail.com",
    },
  };

  const url = useLocation().pathname.toLowerCase();
  const navItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboardIcon,
      path: "/dashboard",
    },
    {
      name: "Accounts",
      icon: UserIcon,
      path: "/accounts",
    },
    {
      name: "Scheduler",
      icon: CalendarDays,
      path: "/scheduler",
    },
    {
      name: "AI Composer",
      icon: Wand2Icon,
      path: "/ai-composer",
    },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64  bg-white border-r border-slate-200 flex flex-col h-full transform transition-transform duration-200 ease-in-out ${isOpen ? "translate-x-0 md:relative" : "-translate-x-full md:relative md:translate-0"}`}
    >
      {/*logo*/}
      <div className="p-6 pb-4">
        <div className="text-xl tracking-tight text-slate-800 flex items-center gap-1.5">
          <img src="/logo.svg" alt="logo" className="size-6" />
          Scheduler
        </div>
      </div>

      {/* Nav section label */}
      <div className="px-6 py-2">
        <span className="text-xs text-slate-500 uppercase tracking-wider">
          {" "}
          Menu{" "}
        </span>
      </div>

      <div className="px-6 py-2">
        <nav>
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => {
              const isActive = url.includes(item.path);
              return (
                <li key={item.path} onClick={() => setIsOpen(false)}>
                  <NavLink
                    to={item.path}
                    end={item.path === "/dashboard"}
                    className={`flex gap-3 items-center px-3 py-2 rounded text-sm transition-all duration-150 border ${isActive ? "bg-red-50 text-red-600 border-red-100" : "text-slate-500 hover:bg-slate-50 border-transparent hover:text-slate-700"} `}
                  >
                    <item.icon
                      className={`size-4.5 shrink-0 ${isActive ? "text-red-500" : "text-slate-500"}`}
                    />
                    <span> {item.name} </span>
                    {isActive && (
                      <span className="ml-auto w-[5px] h-5 rounded-full bg-red-500" />
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* gap */}
      <div className="flex-1" />

      {/* user footer */}
      <div className="p-4 border-t border-slate-100 ">
        {/* user */}
        <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors">
          <div className="size-8 rounded-full bg-linear-to-br from-red-400 to-pink-400 flex items-center justify-center text-white text-sm font-medium shrink-0">
            {user?.name?.charAt(0).toUpperCase() || "U"}
          </div>
          <div className="flex-1 min-w-0">
            <div title={user?.name} className="text-sm text-slate-800 truncate">
              {" "}
              {user?.name}{" "}
            </div>
            <div
              title={user?.email}
              className="text-sm text-slate-400 truncate"
            >
              {" "}
              {user?.email}{" "}
            </div>
          </div>
        </div>
        {/* logout button */}
       
          <button onClick={logoutFn} className="mt-1 flex items-center gap-2 px-3 py-2 w-full rounded text-sm text-slate-500 hover:text-red-500 transition-all duration-150">
            <LogOutIcon className="size-4 " />
            logout
          </button>        
      </div>
    </div>
  );
};

export default Sidebar;
