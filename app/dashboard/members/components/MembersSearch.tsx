"use client";

import React, { useState } from "react";
import { Search, ChevronDown, User, Building, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function MembersSearch() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F59E0B] focus:border-transparent transition-all"
          />
        </div>

        <div className="relative">
          <button className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
            Type
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="relative">
        <Button
          className="flex items-center gap-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          Invite member(s)
          <Plus className="h-4 w-4" />
        </Button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-md shadow-lg z-10 py-1 animate-in fade-in slide-in-from-top-2 duration-200">
            <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center justify-between group">
              Individual
              <User className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
            </button>
            <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center justify-between group">
              Company
              <Building className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
