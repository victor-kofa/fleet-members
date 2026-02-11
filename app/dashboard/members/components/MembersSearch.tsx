"use client";

import React from "react";
import { Search, ChevronDown } from "lucide-react";

export function MembersSearch() {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="relative flex-1 max-w-[320px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f59e0b] focus:border-transparent transition-all placeholder:text-gray-400"
        />
      </div>

      <div className="flex items-center gap-2">
        <div className="relative">
          <button className="flex items-center gap-6 px-3 py-2 text-sm text-[#101828] font-medium bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-all min-w-[120px] justify-between">
            Type
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </button>
        </div>

        <div className="relative">
          <button className="flex items-center gap-6 px-3 py-2 text-sm text-[#101828] font-medium bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-all min-w-[140px] justify-between">
            Last swap
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
