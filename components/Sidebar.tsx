"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Users,
  LayoutDashboard,
  Map,
  Bike,
  Warehouse,
  Settings,
  MoreVertical,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Map, label: "Network", href: "/dashboard/network" },
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Bike, label: "Vehicles", href: "/dashboard/vehicles" },
  { icon: Users, label: "Members", href: "/dashboard/members" },
  { icon: Warehouse, label: "Storage depot", href: "/dashboard/storage" },
  { icon: Settings, label: "Account & billing", href: "/dashboard/account" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-64 flex-col bg-[#0F172A] text-white">
      {/* Profile Section */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center gap-3 bg-[#1E293B] p-2 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
          <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#F59E0B] font-bold text-gray-900 border-2 border-[#D97706]/20">
            EN
          </div>
          <div className="flex flex-1 flex-col overflow-hidden">
            <span className="truncate text-sm font-semibold">
              Edison Nicholas
            </span>
            <span className="truncate text-xs text-gray-400">SparkXpress</span>
          </div>
          <MoreVertical className="h-4 w-4 text-gray-400" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href === "/dashboard/members" &&
              pathname.startsWith("/dashboard/members"));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-[#F59E0B] text-gray-900"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white",
              )}
            >
              <item.icon
                className={cn(
                  "h-5 w-5",
                  isActive ? "text-gray-900" : "text-gray-400",
                )}
              />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800 mt-auto">
        <div className="text-xs text-gray-500 font-medium pb-2">
          Powered by KOFA
        </div>
        <div className="text-[10px] text-gray-600">Fleet Platform</div>
      </div>
    </div>
  );
}
