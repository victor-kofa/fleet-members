"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MoreHorizontal, 
  
 } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NETWORKSVG,
  STORAGESVG,
  ACCOUNTSVG,
  DASHBOARDSVG,
  VEHICLESVG,
  MEMBERSSVG,
} from "@/app/constant/assets";

const navItems = [
  { icon: NETWORKSVG, label: "Network", href: "/dashboard/network" },
  { icon: DASHBOARDSVG, label: "Dashboard", href: "/dashboard" },
  { icon: VEHICLESVG, label: "Vehicles", href: "/dashboard/vehicles" },
  { icon: MEMBERSSVG, label: "Members", href: "/dashboard/members" },
  { icon: STORAGESVG, label: "Storage depot", href: "/dashboard/storage" },
  { icon: ACCOUNTSVG, label: "Account & billing", href: "/dashboard/account" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-[240px] flex-col bg-[#101820] text-white">
      {/* Profile Section */}
      <div className="w-[240px] px-3 py-[10px] flex items-center gap-3">
        <div className="flex flex-1 items-center gap-3 bg-[#101820] p-2 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#f59e0b] font-bold text-gray-900 border-2 border-[#D97706]/20">
            EN
          </div>
          <div className="flex flex-1 flex-col overflow-hidden">
            <span className="truncate text-sm font-semibold">
              Edison Nicholas
            </span>
            <span className="truncate text-[11px] text-gray-400">
              SparkXpress
            </span>
          </div>
          <MoreHorizontal className="h-4 w-4 text-gray-400" />
        </div>
      </div>

      {/* Top Gap Spacer */}
      <div className="h-[2px] shrink-0" />

      {/* Navigation - Unified Section */}
      <div className="flex flex-col w-[240px] px-3 py-3 gap-[2px] items-start transition-all">
        {navItems.map((item) => (
          <SidebarLink key={item.href} item={item} pathname={pathname} />
        ))}
      </div>

      {/* Spacing/Empty Area */}
      <div className="flex-1" />

      {/* Footer Section */}
      <div className="p-4 mt-auto">
        <div className="text-xs text-gray-500 font-medium pb-2">
          Powered by KOFA
        </div>
        <div className="text-[10px] text-gray-600">Fleet Platform</div>
      </div>
    </div>
  );
}

function SidebarLink({
  item,
  pathname,
}: {
  item: (typeof navItems)[0];
  pathname: string;
}) {
  const isActive =
    pathname === item.href ||
    (item.href === "/dashboard/members" &&
      pathname.startsWith("/dashboard/members"));

  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center gap-[18px] w-full rounded-md pl-[33px] pr-[9px] py-2 text-sm font-medium transition-colors group relative h-[36px]",
        isActive ? "text-[#f59e0b]" : " hover:bg-[#1E293B]",
      )}
    >
      {isActive && (
        <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-0.5 h-6 bg-[#f59e0b]" />
      )}
      <div className="relative h-5 w-5 shrink-0">
        <div
          className={cn(
            "h-full w-full transition-all duration-200",
            isActive ? "bg-[#f59e0b]" : "bg-white/60 group-hover:bg-white",
          )}
          style={{
            maskImage: `url(${item.icon})`,
            maskRepeat: "no-repeat",
            maskPosition: "center",
            maskSize: "contain",
            WebkitMaskImage: `url(${item.icon})`,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            WebkitMaskSize: "contain",
          }}
        />
      </div>
      <span className="truncate flex-1 h-[18px]  leading-[18px]">
        {item.label}
      </span>
    </Link>
  );
}
