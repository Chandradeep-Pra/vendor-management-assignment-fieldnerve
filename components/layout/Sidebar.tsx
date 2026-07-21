"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useUIStore } from "../../store/ui.store";
import { navigations } from "./navigations";

const Sidebar = () => {
  const pathname = usePathname();
  const { sideBarOpen, toggleSidebar } = useUIStore();

  return (
    <aside
      className={`md:flex h-screen flex-col border-r hidden border-slate-200 bg-white transition-all duration-300 ${
        sideBarOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="flex items-center justify-between  px-4 py-4">
        <div
          className={`overflow-hidden text-lg font-semibold text-slate-800 ${
            sideBarOpen ? "block" : "hidden"
          }`}
        >
          VendorHub
        </div>
        <button
          type="button"
          onClick={toggleSidebar}
          className="rounded-md p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          aria-label={sideBarOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
          {sideBarOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </button>
      </div>

      <nav className="flex-1 space-y-1 p-2">
        {navigations.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.slug || pathname.startsWith(`${item.slug}/`);

          return (
            <Link
              key={item.slug}
              href={item.slug}
              className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-slate-900 text-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              } ${sideBarOpen ? "justify-start" : "justify-center"}`}
            >
              <Icon className="h-5 w-5 shrink-0" />
              <span className={`truncate ${sideBarOpen ? "inline" : "hidden"}`}>
                {item.title}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;