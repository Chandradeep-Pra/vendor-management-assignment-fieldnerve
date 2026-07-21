"use client";

import { usePathname } from "next/navigation";
import { Bell, UserCircle2 } from "lucide-react";
import MobileNav from "./MobileNav";
import { navigations } from "./navigations";
import Link from "next/link";

const HeaderLayout = () => {
  const pathname = usePathname();

  const currentNav = navigations.find(
    (item) => pathname === item.slug || pathname.startsWith(`${item.slug}/`)
  );

  const title = currentNav?.title ?? "Dashboard";

  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-6">
      <div className="text-lg font-semibold text-slate-800">{title}</div>

      <div className="flex items-center gap-3">
        <Link className="relative cursor-pointer" href="/notifications">
          <Bell size={24} className="text-slate-700" />
          <span className="absolute -right-1 -top-2 flex aspect-square h-5 w-5 items-center justify-center rounded-full bg-red-400 text-[10px] font-semibold text-white">
            2
          </span>
        </Link>

        <MobileNav />

        <div className="hidden h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white sm:flex">
          <UserCircle2 className="h-6 w-6" />
        </div>
      </div>
    </header>
  );
};

export default HeaderLayout;