"use client";

import { useRouter, usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { navigations } from "./navigations";
import { Button } from "../ui/button";

const MobileNav = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 md:hidden"
          aria-label="Open mobile navigation"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-48">
        {navigations.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.slug || pathname.startsWith(`${item.slug}/`);

          return (
            <DropdownMenuItem
              key={item.slug}
              onClick={() => router.push(item.slug)}
              className={`flex items-center gap-2 ${isActive ? "bg-slate-100 text-slate-900" : "text-slate-700"}`}
            >
              <Icon className="h-4 w-4" />
              <span>{item.title}</span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileNav;